import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'

const AcceptInvitation = () => {
  return (
    <div className="flex h-full flex-col px-5 py-4">
      <FooterButton className="mb-6 !py-3 text-text" variant="bright">
        씩씩한 박태기나무님이 초대장을 보냈어요!
        <br />
        산너머산에서 같이 등산할까요? 😆
      </FooterButton>
      <div className="flex h-[520px] flex-col">
        <div className="flex-grow-[7] rounded-t-2xl bg-black">
          <img
            src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg"
            alt="Onboarding image"
            className="h-full w-full rounded-t-2xl"
          />
        </div>
        <div className="flex-grow-[3] rounded-b-2xl px-5 py-4 shadow-md">
          <DayBadgeWithTitle text="D-day " title="5월 26일 (수)" />
          <div className="mb-4 mt-1 flex gap-1">
            <div className="text-b2 font-semibold">북한산</div>
            <div className="text-b2">백운대코스</div>
          </div>
          <div className="text-b2">
            산행중 잡담없이 각자 등산 기록용으로 다녀올 겁니다 인원 4명, 입산 시간은 12시 10분 예상하고 있습니다 추가
            질문은 010.0000.0000으로 연락주세요
          </div>
        </div>
      </div>
      <FooterButton children="초대 수락하기" className="mt-auto" />
    </div>
  )
}
export default AcceptInvitation
