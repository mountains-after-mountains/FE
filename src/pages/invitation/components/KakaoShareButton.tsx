import React, { useEffect } from 'react'
import KakaoShareIcon from '@/assets/icons/kakaoShareIcon.svg?react'

interface KakaoShareButtonProps {
  title: string
  description: string
  imageUrl: string
  webUrl: string
}
declare global {
  interface Window {
    Kakao: any
  }
}
const KakaoShareButton: React.FC<KakaoShareButtonProps> = ({ title, description, imageUrl, webUrl }) => {
  const JavaScript_Key = import.meta.env.VITE_JAVASCRIPT_KEY

  useEffect(() => {
    const loadKakaoSDK = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.Kakao) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js'
        script.onload = () => {
          if (!window.Kakao) {
            reject('Kakao SDK failed to load')
            return
          }
          if (!window.Kakao.isInitialized()) {
            window.Kakao.init(JavaScript_Key)
          }
          resolve()
        }
        script.onerror = () => reject('Kakao SDK load error')
        document.head.appendChild(script)
      })
    }

    loadKakaoSDK()
      .then(() => {
        if (window.Kakao.isInitialized()) {
          window.Kakao.Share.createCustomButton({
            container: '#kakaotalk-sharing-btn',
            templateId: 110356,
            templateArgs: {
              title: title,
              description: description,
              imageUrl: imageUrl,
              webUrl: webUrl,
            },
          })
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [title, imageUrl, description, webUrl, JavaScript_Key])

  return (
    <div id="kakaotalk-sharing-btn" className="flex cursor-pointer flex-col items-center justify-center gap-1">
      <KakaoShareIcon />
      <div className="text-b3 text-gray-900">카카오톡</div>
    </div>
  )
}

export default KakaoShareButton
