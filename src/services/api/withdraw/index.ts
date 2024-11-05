import axiosInstance from '@/services/instance/axiosInstance.ts'

export const userWithdraw = async (refreshToken: string, reason: string, userId: string) => {
  const response = await axiosInstance.post('/user/kakaoDelete', { refreshToken, reason, userId })
  return response.data
}
