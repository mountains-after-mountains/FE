import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import useDateInfo from '@/hooks/useDateInfo.ts'
import { BackIcon } from '@/icons'
import { Schedule } from '@/types/schedule'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'

interface DetailTopProps {
  data: Schedule
  isAuthenticated?: boolean
}

const DetailTop = ({ data, isAuthenticated }: DetailTopProps) => {
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const navigate = useNavigate()
  const { imageSrc, dateInfo } = useDetailTopLogic(data)

  return (
    <div>
      <ImageSection imageSrc={imageSrc} navigate={navigate} scheduleId={scheduleId} isAuthenticated={isAuthenticated} />
      <InfoSection dateInfo={dateInfo} memberCount={data?.memberCount} />
    </div>
  )
}

const useDetailTopLogic = (data: Schedule) => {
  const imageSrc = data?.mountainImg ? data.mountainImg : EmptyImg
  const scheduleDate = data?.scheduleDate ?? ''
  const dateInfo = useDateInfo(scheduleDate)
  return { imageSrc, dateInfo }
}

const ImageSection = ({
  imageSrc,
  navigate,
  scheduleId,
  isAuthenticated,
}: {
  imageSrc: string
  navigate: any
  scheduleId?: string
  isAuthenticated?: boolean
}) => (
  <div className="relative h-[246px] w-full">
    <img src={imageSrc} className="h-full w-full object-cover" alt="Mountain" />
    <div className="absolute inset-0 bg-black/10" />
    <div className="absolute inset-0 flex items-start justify-between p-4">
      {isAuthenticated && (
        <button className="text-white" onClick={() => navigate('/schedule')}>
          <BackIcon color="#ffffff" />
        </button>
      )}
      {isAuthenticated && (
        <button className="text-white" onClick={() => navigate(`/schedule/modify/${scheduleId}`)}>
          수정
        </button>
      )}
    </div>
  </div>
)

const InfoSection = ({ dateInfo, memberCount }: { dateInfo: any; memberCount: string }) => (
  <div className="flex flex-col gap-[6px] bg-white p-5">
    <DayBadgeWithTitle text={dateInfo.dDayText} title={dateInfo.formattedDate} />
    <DetailRow label="입산시간" value={dateInfo.formattedTime} />
    <DetailRow
      label="인원수"
      value={
        parseInt(memberCount) === 0 ? '미정' : parseInt(memberCount) >= 5 ? `${memberCount}명 이상` : `${memberCount}명`
      }
    />
  </div>
)

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-1 text-b3">
    <div className="text-subtext">{label}</div>
    <div className="text-text">{value}</div>
  </div>
)

export default DetailTop
