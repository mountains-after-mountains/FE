import Header from '@/components/layouts/header'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { EditIcon } from '@/icons'
import KakaoShareButton from '@/pages/invitation/components/KakaoShareButton.tsx'
import UrlShareButton from '@/pages/invitation/components/UrlShareButton.tsx'

const Invitation = () => {
  return (
    <>
      <Header title="초대장" rightAction={<div className="text-b2 text-main">삭제</div>} />
      <div className="px-5 py-14">
        <div className="h-[520px]">
          <div className="h-7/10 rounded-t-2xl bg-black">
            <img
              src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg"
              alt="Onboarding image"
              className="rounded-t-2xl"
            />
          </div>
          <div className="h-3/10 rounded-b-2xl px-5 py-4 shadow-md">
            <DayBadgeWithTitle text="D-day " title="5월 26일 (수)" rightAction={<EditIcon />} />
            <div className="mb-2 mb-4 mt-1 flex gap-1">
              <div className="text-b2 font-semibold">북한산</div>
              <div className="text-b2">백운대코스</div>
            </div>
            <div className="text-b2">
              산행중 잡담없이 각자 등산 기록용으로 다녀올 겁니다 인원 4명, 입산 시간은 12시 10분 예상하고 있습니다 추가
              질문은 010.0000.0000으로 연락주세요
            </div>
          </div>
          <div className="flex justify-center gap-6 pt-[18px]">
            <KakaoShareButton
              title="D-12 5월 26일 (수) 북한산 백운대 코스"
              description="등산 ㄱㄱ ?"
              imageUrl="https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg"
              webUrl="https://developers.kakao.com"
            />
            <UrlShareButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Invitation
