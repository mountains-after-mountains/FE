import axiosInstance from '@/services/instance/axiosInstance.ts'
import { AxiosError } from 'axios'
import {
  courseListType,
  MountainListResponse,
  registerScheduleResponse,
  ScheduleDataPayload,
} from '@/types/schedule/index.ts'

export const getMountainsList = async () => {
  try {
    const response = await axiosInstance.get<MountainListResponse[]>('/main/list')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error fetching feature A data')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
export const getMountainCourse = async (mountainId: string) => {
  try {
    const response = await axiosInstance.post<courseListType[]>(`/main/courseList/${mountainId}`)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error fetching feature A data')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}

export const registerSchedule = async (scheduleData: ScheduleDataPayload) => {
  try {
    const response = await axiosInstance.post<registerScheduleResponse>('/schedule/create', scheduleData)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error fetching feature A data')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}

export const getScheduleDetail = async (scheduleId: string) => {
  try {
    const response = await axiosInstance.post<registerScheduleResponse>(`/schedule/mySchedule/${scheduleId}`)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error fetching feature A data')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
