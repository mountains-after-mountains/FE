import { UrlShareIcon } from '@/icons'
import { useState } from 'react'

interface UrlShareButtonProps {
  url: string
}

const UrlShareButton = ({ url }: UrlShareButtonProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      })
      .catch(err => {
        console.error('URL 복사 실패:', err)
      })
  }

  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-1" onClick={handleCopy}>
      <UrlShareIcon />
      <div className="text-b3 text-gray-900">{isCopied ? '복사됨' : 'URL 복사'}</div>
    </div>
  )
}

export default UrlShareButton
