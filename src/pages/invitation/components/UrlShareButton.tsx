import { UrlShareIcon } from '@/icons'

const UrlShareButton = () => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-1">
      <UrlShareIcon />
      <div className="text-b3 text-gray-900">URL 복사</div>
    </div>
  )
}
export default UrlShareButton
