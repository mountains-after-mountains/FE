import Header from '@/components/layouts/header'
import { useNavigate } from 'react-router-dom'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { userWithdraw } from '@/services/api/withdraw'
import useAuthStore from '@/store/useAuthStore.ts'

const Withdraw = () => {
  const navigate = useNavigate()
  const [withdrawal, setWithdrawal] = useState(false)
  const [text, setText] = useState('')
  const { logout } = useAuthStore()

  const kakaoRefreshToken = localStorage.getItem('kakaoRefreshToken')
  const userId = localStorage.getItem('userId')

  const userWithdrawMutation = useMutation({
    mutationFn: () => userWithdraw(kakaoRefreshToken!, text, userId!),
    onSuccess: () => {
      logout()
      navigate('/')
    },
    onError: error => {
      console.error('회원 탈퇴 실패:', error)
      alert('회원 탈퇴에 실패했습니다. 다시 시도해주세요.')
    },
  })
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleWithdraw = () => {
    userWithdrawMutation.mutate()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="회원탈퇴" onBackClick={() => navigate('/')} />
      {withdrawal ? (
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-5 text-h4">탈퇴하시는 이유를 알려주세요.</div>
          <div className="mb-8 text-b2 text-subtext">
            불편했던 점을 자세히 입력해주시면,
            <br />더 좋은 서비스를 만드는데 큰 도움이 돼요.
            <br />
            ex) OO산이 추가되었으면 좋겠어요. 등산 일정 공유가 안돼요.
          </div>
          <textarea
            className="mb-1 rounded border p-3 focus:outline-none"
            rows={5}
            value={text}
            onChange={handleTextChange}
            maxLength={500}
          />
          <div className="text-end text-b2 text-main">{text.length}/500</div>
          <div className="mt-auto flex gap-2">
            <FooterButton variant="bright" onClick={handleWithdraw}>
              탈퇴하기
            </FooterButton>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-5 text-h4">산너머산을 탈퇴하신다니 아쉬워요.</div>
          <div className="mb-20 text-b2 text-subtext">
            회원 탈퇴를 원하신다니 산너머산의 서비스가 부족했나봐요. <br /> 불편했던 점을 알려주시면 적극 반영해서
            해결할게요.
          </div>
          <div className="mb-2 text-b1 text-subtext">회원 탈퇴 시 유의사항</div>
          <div className="text-b2 text-subtext">
            <ul className="list-disc pl-6">
              <li>산을 탐색하고 계획했던 기록이 모두 사라져요.</li>
              <li>등산하기 전 설렜던 기억들이 날아가요.</li>
              <li>회원 탈퇴 시, 산너머산 이용 기록은 통신비밀 보호법에 따라 3개월간 분리 보관된 후 영구 삭제돼요.</li>
              <li>7일 지나고 나서 같은 계정으로 재가입할 수 있어요.</li>
            </ul>
          </div>
          <div className="mt-auto flex gap-2">
            <FooterButton variant="bright" onClick={() => setWithdrawal(true)}>
              탈퇴하기
            </FooterButton>
            <FooterButton onClick={() => navigate('/')}>계속 사용하기</FooterButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default Withdraw
