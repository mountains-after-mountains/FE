import axiosInstance from '@/services/instance/axiosInstance.ts'
import { MountainResponse } from '@/types/mountain'
import { AxiosError } from 'axios'

export const getMountainDetails = async (mountainId?: string) => {
  try {
    const response = await axiosInstance.post<MountainResponse>(`/main/detail/${mountainId}`)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error fetching feature A data')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
