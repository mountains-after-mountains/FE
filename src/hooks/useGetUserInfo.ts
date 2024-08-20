import axiosInstance from '@/services/instance/axiosInstance'
import { UserInfo } from '@/types/home'
import { useQuery } from '@tanstack/react-query'

const useGetUserInfo = () => {
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => await axiosInstance.get<UserInfo>('/user/myPage'),
    refetchOnWindowFocus: false,
  })

  return { data: data?.data, isError, isLoading, isFetching }
}

export default useGetUserInfo
