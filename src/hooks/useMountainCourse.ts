import { useQuery } from '@tanstack/react-query'
import { getMountainCourse } from '@/services/api/schedule'
import { useMemo } from 'react'

const useMountainCourse = (mountainId: string | null) => {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['mountainCourse', mountainId],
    queryFn: () => getMountainCourse(mountainId || ''),
    enabled: !!mountainId,
    refetchOnWindowFocus: false,
  })

  const transformedData = useMemo(() => {
    if (!data) return []
    return data.map(item => ({
      key: item.courseName,
      value: item.courseNo,
    }))
  }, [data])

  return { data: transformedData, isError, isFetching }
}

export default useMountainCourse
