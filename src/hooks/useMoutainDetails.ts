import { getMountainDetails } from '@/services/api/mountain'
import { useQuery } from '@tanstack/react-query'

const useMountainDetails = ({ mountainId }: { mountainId?: string } = {}) => {
  const { data, isError } = useQuery({
    queryKey: ['mountainDetails', mountainId],
    queryFn: async () => await getMountainDetails(mountainId),
    enabled: !!mountainId,
    refetchOnWindowFocus: false,
  })

  return { data, isError }
}

export default useMountainDetails
