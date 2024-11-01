import emptyImg from '@/assets/image/empty_mnti_img.png'
import { Button } from '@/components/ui/button.tsx'

interface ErrorPage {
  refetch: () => void
}

const ErrorPage = ({ refetch }: ErrorPage) => {
  return (
    <div className="flex h-[calc(100vh-450px)] w-full flex-col items-center justify-center">
      <p className="mb-2 text-h3 font-bold text-gray-900">페이지가 없거나 오류가 발생하였습니다.</p>
      <p className="text-b2 text-gray-900">조금 뒤 다시 접속해주세요.</p>
      <img src={emptyImg} className="mb-5 h-[199px] w-[192px]" />
      <Button className="rounded-3xl border border-gray-300 bg-white px-4 py-2 text-b2 text-gray-900" onClick={refetch}>
        다시시도
      </Button>
    </div>
  )
}

export default ErrorPage
