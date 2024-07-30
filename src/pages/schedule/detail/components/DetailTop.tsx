import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { useNavigate } from 'react-router-dom'

const DetailTop = ({ mountain }) => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div>
      <img src={mountain.img} className="h-[246px] w-full" onClick={goBack} />
      <div className="flex flex-col gap-[6px] bg-white p-5">
        <DayBadgeWithTitle text="D-day" title="5월 26일(수)" />
        <div className="flex gap-1 text-b3">
          <div className="text-subtext">입산시간</div>
          <div className="text-text">12시 10분</div>
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
