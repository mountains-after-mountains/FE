import axiosInstance from '@/services/instance/axiosInstance.ts'

export const userWithdraw = async (refreshToken: string) => {
  const response = await axiosInstance.get('/user/kakaoDelete', {
    params: { refreshToken },
  })
  return response.data
}
