import { useQuery } from '@tanstack/react-query'
import axiosInstance from '@/services/instance/axiosInstance'
import { MountainListResponse } from '@/types/schedule'

const useMountainsListHome = (keyword?: string) => {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['mountainsList', keyword],
    queryFn: async () =>
      await axiosInstance.get<MountainListResponse[]>('/main/list', {
        params: { keyword },
      }),
    refetchOnWindowFocus: false,
  })

  return { data: data?.data, isError, isFetching }
}

export default useMountainsListHome
