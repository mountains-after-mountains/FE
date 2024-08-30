import { useNavigate } from 'react-router-dom'
import useDateInfo from '@/hooks/useDateInfo.ts'
import { ScheduleListResponse } from '@/types/schedule'

export const useListCard = (schedule: ScheduleListResponse) => {
  const navigate = useNavigate()
  const { formattedDate, dDayText } = useDateInfo(schedule?.scheduleDate)

  const handleNavigate = () => {
    navigate(`/schedule/detail/${schedule?.scheduleId}`)
  }

  return {
    formattedDate,
    dDayText,
    handleNavigate,
  }
}
