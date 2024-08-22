import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import useDateInfo from '@/hooks/useDateInfo.ts'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import useInvitationData from '@/hooks/useInvitationData.ts'
import { useMutation } from '@tanstack/react-query'
import { acceptInvitation } from '@/services/api/invitation'

const AcceptInvitation = () => {
  const navigate = useNavigate()
  const { invitationId } = useParams<{ invitationId: string }>()
  const { data, isFetching } = useInvitationData(invitationId || '')
  const { formattedDate, dDayText } = useDateInfo(data?.scheduleDate)

  const acceptInvitationMutaion = useMutation({
    mutationFn: () => acceptInvitation(data?.scheduleId),
    onSuccess: () => {
      navigate(`/schedule/detail/${data?.scheduleId}`)
    },
  })
  return (
    <div className="flex flex-col">
      {isFetching && <LoadingSpinner />}
      <div className="px-5 pt-4">
        <FooterButton className="text-text" variant="bright">
          {data?.nickname}님이 초대장을 보냈어요!
          <br />
          산너머산에서 같이 등산할까요? 😆
        </FooterButton>
      </div>
      <div className="px-5 py-8">
        <div className="flex-grow-[7] rounded-t-2xl">
          <img src={`data:image/jpeg;base64,${data?.img}`} alt="Onboarding image" className="rounded-t-2xl" />
        </div>
        <div className="rounded-b-2xl px-5 py-4 shadow-md">
          <DayBadgeWithTitle text={dDayText} title={formattedDate} />
          <div className="mb-4 mt-1 flex gap-1">
            <div className="text-b2 font-semibold">{data?.mountainName}</div>
            <div className="text-b2">{data?.courseName}</div>
          </div>
          <div className="text-b2">{data?.text}</div>
        </div>
      </div>
      <div className="px-5">
        <FooterButton onClick={() => acceptInvitationMutaion.mutate()} children="초대 수락하기" className="mt-auto" />
      </div>
    </div>
  )
}
export default AcceptInvitation
