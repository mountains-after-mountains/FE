import CommonCard from '@/components/common/CommonCard.tsx'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { NextIcon } from '@/icons'
import useDateInfo from '@/hooks/useDateInfo.ts'
import { WeatherGroup, WeatherProps } from '@/components/common/Weather.tsx'
import { useNavigate } from 'react-router-dom'
import { ScheduleListResponse } from '@/types/schedule'

const weathers: WeatherProps[] = [
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'sunny', isToday: true, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
]
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
      <div className="pt-5">
        <WeatherGroup weathers={weathers} className="mt-[10px]" />
      </div>
    </CommonCard>
  )
}

export default ListCard
