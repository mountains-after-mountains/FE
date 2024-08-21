import Header from '@/components/layouts/header'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { EditIcon } from '@/icons'
import KakaoShareButton from '@/pages/invitation/components/KakaoShareButton.tsx'
import UrlShareButton from '@/pages/invitation/components/UrlShareButton.tsx'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCreateInvitation } from '@/services/api/invitation'
import LoadingSpinner from '@/components/common/Spinner.tsx'

const Invitation = () => {
  const { invitationId } = useParams<{ invitationId: string }>()

  const { data, isFetching } = useQuery({
    queryKey: ['getCreateInvitation', invitationId],
    queryFn: () => getCreateInvitation(invitationId || ''),
    refetchOnWindowFocus: false,
    enabled: !!invitationId,
  })

  return (
    <div className="flex flex-col">
      {isFetching && <LoadingSpinner />}
      <Header title="초대장" />
      <div className="px-5 py-14">
        <div className="rounded-t-2xl bg-black">
          <img
            src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg"
            alt="Onboarding image"
            className="rounded-t-2xl"
          />
        </div>
        <div className="rounded-b-2xl px-5 py-4 shadow-md">
          <DayBadgeWithTitle text="D-day " title="5월 26일 (수)" rightAction={<EditIcon />} />
          <div className="mb-2 mb-4 mt-1 flex gap-1">
            <div className="text-b2 font-semibold">{data?.mountainName}</div>
            <div className="text-b2">{data?.courseName}</div>
          </div>
          <div className="text-b2">{data?.text}</div>
        </div>
        <div className="flex justify-center gap-6 pt-[18px]">
          <KakaoShareButton
            title="D-12 5월 26일 (수) 북한산 백운대 코스"
            description={data?.text}
            imageUrl="https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg"
            webUrl="https://developers.kakao.com"
          />
          <UrlShareButton />
        </div>
      </div>
    </div>
  )
}

export default Invitation
