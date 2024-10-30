import axiosInstance from '@/services/instance/axiosInstance.ts'

export const userWithdraw = async (refreshToken: string, reason: string) => {
  const response = await axiosInstance.post('/user/kakaoDelete', { refreshToken, reason })
  return response.data
}
