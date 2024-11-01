import { useQuery } from '@tanstack/react-query'
import axiosInstance from '@/services/instance/axiosInstance'
import { MountainListResponse } from '@/types/schedule'

const useMountainsListHome = (keyword?: string) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['mountainsList', keyword],
    queryFn: async () =>
      await axiosInstance.get<MountainListResponse[]>('/main/list', {
        params: { keyword },
      }),
    refetchOnWindowFocus: false,
    retry: 0,
  })

  return { data: data?.data, isError, isLoading, refetch }
}

export default useMountainsListHome
