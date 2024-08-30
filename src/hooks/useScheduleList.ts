import { useQuery } from '@tanstack/react-query'
import { getScheduleList } from '@/services/api/schedule'
import { ScheduleListResponse } from '@/types/schedule'

export const useScheduleList = () => {
  return useQuery<ScheduleListResponse[]>({
    queryKey: ['scheduleList'],
    queryFn: getScheduleList,
    refetchOnWindowFocus: false,
  })
}
