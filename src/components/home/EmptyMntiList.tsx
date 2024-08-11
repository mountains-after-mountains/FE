import emptyImg from '@/assets/image/empty_mnti_img.png'

const EmptyMntiList = () => {
  return (
    <div className="flex h-[calc(100vh-450px)] w-full flex-col items-center justify-center">
      <p className="text-h3 font-bold text-gray-900">앗, 이런 산은 없어요!</p>
      <p className="text-b3 text-gray-900">다른 이름으로 검색해주세요.</p>
      <img src={emptyImg} className="mb-5 h-[199px] w-[192px]" />
      <button className="rounded-3xl border border-gray-300 px-4 py-2 text-b2 text-gray-900">산 등록 요청</button>
    </div>
  )
}

export default EmptyMntiList
