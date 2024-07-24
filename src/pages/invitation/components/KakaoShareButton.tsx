import React, { useEffect } from 'react'
import KakaoShareIcon from '@/assets/icons/kakaoShareIcon.svg?react'

interface KakaoShareButtonProps {
  title: string
  description: string
  imageUrl: string
  webUrl: string
  mobileWebUrl: string
  profileText?: string
  profileImageUrl?: string
  titleImageUrl?: string
  titleImageText?: string
  titleImageCategory?: string
  items?: { item: string; itemOp: string }[]
  sum?: string
  sumOp?: string
  likeCount?: number
  commentCount?: number
  sharedCount?: number
}

const KakaoShareButton: React.FC<KakaoShareButtonProps> = ({
  title,
  description,
  imageUrl,
  webUrl,
  mobileWebUrl,
  profileText = '',
  profileImageUrl = '',
  titleImageUrl = '',
  titleImageText = '',
  titleImageCategory = '',
  items = [],
  sum = '',
  sumOp = '',
  likeCount = 0,
  commentCount = 0,
  sharedCount = 0,
}) => {
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
          window.Kakao.Share.createDefaultButton({
            container: '#kakaotalk-sharing-btn',
            objectType: 'feed',
            content: {
              title: title,
              description: description,
              imageUrl: imageUrl,
              link: {
                mobileWebUrl: mobileWebUrl,
                webUrl: webUrl,
              },
            },
            itemContent: {
              profileText: profileText,
              profileImageUrl: profileImageUrl,
              titleImageUrl: titleImageUrl,
              titleImageText: titleImageText,
              titleImageCategory: titleImageCategory,
              items: items,
              sum: sum,
              sumOp: sumOp,
            },
            social: {
              likeCount: likeCount,
              commentCount: commentCount,
              sharedCount: sharedCount,
            },
            buttons: [
              {
                title: '웹으로 이동',
                link: {
                  mobileWebUrl: mobileWebUrl,
                  webUrl: webUrl,
                },
              },
              {
                title: '앱으로 이동',
                link: {
                  mobileWebUrl: mobileWebUrl,
                  webUrl: webUrl,
                },
              },
            ],
          })
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [
    title,
    description,
    imageUrl,
    webUrl,
    mobileWebUrl,
    profileText,
    profileImageUrl,
    titleImageUrl,
    titleImageText,
    titleImageCategory,
    items,
    sum,
    sumOp,
    likeCount,
    commentCount,
    sharedCount,
    JavaScript_Key,
  ])

  return (
    <div id="kakaotalk-sharing-btn" className="flex cursor-pointer flex-col items-center justify-center gap-1">
      <KakaoShareIcon />
      <div className="text-b3 text-gray-900">카카오톡</div>
    </div>
  )
}

export default KakaoShareButton
