import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import useDateInfo from '@/hooks/useDateInfo.ts'
import { BackIcon } from '@/icons'
import { Schedule } from '@/types/schedule'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'

interface DetailTopProps {
  data: Schedule
}

const DetailTop = ({ data }: DetailTopProps) => {
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const navigate = useNavigate()
  const scheduleDate = data?.scheduleDate ?? ''
  const dateInfo = useDateInfo(scheduleDate)

  const imageSrc = data?.mountainImg ? `data:image/jpeg;base64,${data.mountainImg}` : EmptyImg
  return (
    <div>
      <div className="relative h-[246px] w-full">
        <img src={imageSrc} className="h-full w-full object-cover" alt="Mountain" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-start justify-between p-4">
          <button className="text-white" onClick={() => navigate(-1)}>
            <BackIcon color="#ffffff" />
          </button>
          <button className="text-white" onClick={() => navigate(`/schedule/modify/${scheduleId}`)}>
            수정
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[6px] bg-white p-5">
        <DayBadgeWithTitle text={dateInfo.dDayText} title={dateInfo.formattedDate} />
        <div className="flex gap-1 text-b3">
          <div className="text-subtext">입산시간</div>
          <div className="text-text">{dateInfo.formattedTime}</div>
        </div>
        <div className="flex gap-1 text-b3">
          <div className="text-subtext">인원수</div>
          <div className="text-text">
            {parseInt(data?.memberCount) >= 5 ? `${data?.memberCount}명 이상` : `${data?.memberCount}명`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailTop
