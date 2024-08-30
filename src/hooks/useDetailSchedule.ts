import { useQuery } from '@tanstack/react-query'
import { getDetailSchedule } from '@/services/api/schedule'

export const useDetailSchedule = (scheduleId: string | undefined) => {
  return useQuery({
    queryKey: ['detailSchedule', scheduleId],
    queryFn: () => getDetailSchedule(scheduleId || ''),
    refetchOnWindowFocus: false,
    enabled: !!scheduleId,
  })
}
