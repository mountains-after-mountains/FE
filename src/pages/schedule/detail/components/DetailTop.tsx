import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { useNavigate } from 'react-router-dom'
import useDateInfo from '@/hooks/useDateInfo.ts'

const DetailTop = ({ data }) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const scheduleDate = data?.scheduleDate ?? ''
  const dateInfo = useDateInfo(scheduleDate)
  return (
    <div>
      <img
        src="https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=56531&fileTy=MEDIA&fileNo=1"
        className="h-[246px] w-full"
        onClick={goBack}
      />
      <div className="flex flex-col gap-[6px] bg-white p-5">
        <DayBadgeWithTitle text={dateInfo.dDayText} title={dateInfo.formattedDate} />
        <div className="flex gap-1 text-b3">
          <div className="text-subtext">입산시간</div>
          <div className="text-text">{dateInfo.formattedTime}</div>
        </div>
        <div className="flex gap-1 text-b3">
          <div className="text-subtext">인원수</div>
          <div className="text-text">4명</div>
        </div>
      </div>
    </div>
  )
}

export default DetailTop
