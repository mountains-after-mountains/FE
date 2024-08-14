import { useQuery } from '@tanstack/react-query'
import { getScheduleDetail } from '@/services/api/schedule'

const useGetScheduleDetail = (scheduleId: string | undefined) => {
  const { data, isError } = useQuery({
    queryKey: ['mountainCourse', scheduleId],
    queryFn: () => getScheduleDetail(scheduleId || ''),
    enabled: !!scheduleId,
    refetchOnWindowFocus: false,
  })

  // const transformedData = useMemo(() => {
  //   if (!data) return []
  //   return data.map(item => ({
  //     key: item.courseName,
  //     value: item.courseNo,
  //   }))
  // }, [data])

  return { data, isError }
}

export default useGetScheduleDetail
