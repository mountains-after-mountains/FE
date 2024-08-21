import CommonCard from '@/components/common/CommonCard.tsx'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { NextIcon } from '@/icons'
import useDateInfo from '@/hooks/useDateInfo.ts'
import { useNavigate } from 'react-router-dom'
import { ScheduleListResponse } from '@/types/schedule'
import { WeatherGroup } from '@/components/common/Weather.tsx'

interface ListCardProps {
  schedule: ScheduleListResponse
}

const ListCard = ({ schedule }: ListCardProps) => {
  const navigate = useNavigate()
  const { formattedDate, dDayText } = useDateInfo(schedule?.scheduleDate)
  return (
    <CommonCard>
      <div className="flex flex-col gap-1">
        <DayBadgeWithTitle
          text={dDayText}
          title={formattedDate}
          rightAction={
            <button
              onClick={() => navigate(`/schedule/detail/${schedule?.scheduleId}`)}
              className="flex items-center gap-[7px] text-b2"
            >
              자세히
              <NextIcon />
            </button>
          }
        />
        <div className="flex gap-1">
          <div className="text-b2 font-semibold">{schedule?.mountain}</div>
          <div className="text-b2">{schedule?.course}</div>
        </div>
      </div>
      <div className="pt-2">
        <WeatherGroup weathers={schedule.weatherList} className="mt-[10px]" />
      </div>
    </CommonCard>
  )
}

export default ListCard
