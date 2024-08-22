import Header from '@/components/layouts/header'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import KakaoShareButton from '@/pages/invitation/components/KakaoShareButton.tsx'
import UrlShareButton from '@/pages/invitation/components/UrlShareButton.tsx'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import useDateInfo from '@/hooks/useDateInfo.ts'
import useInvitationData from '@/hooks/useInvitationData.ts'

const Invitation = () => {
  const { invitationId } = useParams<{ invitationId: string }>()
  const { data, isFetching } = useInvitationData(invitationId || '')
  const { formattedDate, dDayText } = useDateInfo(data?.scheduleDate)
  const invitationUrl = `https://over-the-mountain.site/invitation/accept/${data?.invitationId}`

  return (
    <div className="flex flex-col">
      {isFetching && <LoadingSpinner />}
      <Header title="초대장" />
      <div className="px-5 py-14">
        <div className="rounded-t-2xl">
          <img src={`data:image/jpeg;base64,${data?.img}`} alt="Onboarding image" className="rounded-t-2xl" />
        </div>
        <div className="rounded-b-2xl px-5 py-4 shadow-md">
          {/*초대장 수정은 나중에*/}
          {/*<DayBadgeWithTitle text={dDayText} title={formattedDate} rightAction={<EditIcon />} />*/}
          <DayBadgeWithTitle text={dDayText} title={formattedDate} />
          <div className="mb-2 mb-4 mt-1 flex gap-1">
            <div className="text-b2 font-semibold">{data?.mountainName}</div>
            <div className="text-b2">{data?.courseName}</div>
          </div>
          <div className="text-b2">{data?.text}</div>
        </div>
        <div className="flex justify-center gap-6 pt-[18px]">
          <KakaoShareButton
            title={`${dDayText} ${formattedDate} ${data?.mountainName} ${data?.courseName}`}
            description={data?.text}
            imageUrl="https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg"
            webUrl={`invitation/accept/${data?.invitationId}`}
          />
          <UrlShareButton url={invitationUrl} />
        </div>
      </div>
    </div>
  )
}

export default Invitation
