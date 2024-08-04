import axiosInstance from '@/services/instance/axiosInstance'
import { AxiosError } from 'axios'

export const getMountainList = async (keyword: string) => {
  try {
    const response = await axiosInstance.get('/main/list', {
      params: { keyword },
    })
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
