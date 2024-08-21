import { useNavigate } from 'react-router-dom'

const SuggestionPrompt = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img alt="등산 일정 이미지" src="src/assets/images/mountainListImg.png" />
      <div className="mb-2 mt-5 text-h5 text-green-950">일정을 정하고 친구와 공유해요</div>
      <div className="mb-4 text-center text-b2 text-gray-600">
        등산하기 좋은 산을 알려드릴게요
        <br />산 구경하고 일정 정해볼까요 ?
      </div>
      <button
        className="rounded-[32px] border-[1px] border-border bg-white px-3 py-2 text-b2"
        onClick={() => navigate('/home')}
      >
        구경하러 가기
      </button>
    </div>
  )
}

export default SuggestionPrompt