import { useQuery } from '@tanstack/react-query'
import { getMountainsList } from '@/services/api/schedule'
import { useMemo } from 'react'

const useMountainsList = () => {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['mountainsList'],
    queryFn: getMountainsList,
    refetchOnWindowFocus: false,
  })

  const transformedData = useMemo(() => {
    if (!data) return []
    return data.map(item => ({
      key: item.mntiName,
      value: item.mntiListNo,
    }))
  }, [data])

  return { data: transformedData, isError, isFetching }
}

export default useMountainsList
