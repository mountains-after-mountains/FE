import axiosInstance from '@/services/instance/axiosInstance.ts'
import {
  courseListType,
  ModifyMemoPayload,
  MountainListResponse,
  RegisterMemoPayload,
  ScheduleDataPayload,
} from '@/types/schedule/index.ts'

export const getMountainsList = async () => {
  const response = await axiosInstance.get<MountainListResponse[]>('/main/list')
  return response.data
}

export const getMountainCourse = async (mountainId: string) => {
  const response = await axiosInstance.post<courseListType[]>(`/main/courseList/${mountainId}`)
  return response.data
}

export const registerSchedule = async (scheduleData: ScheduleDataPayload) => {
  const response = await axiosInstance.post('/schedule/create', scheduleData)
  return response.data
}

export const getDetailSchedule = async (scheduleId: string) => {
  const response = await axiosInstance.get(`/schedule/mySchedule/${scheduleId}`)
  return response.data
}

export const getScheduleList = async () => {
  const response = await axiosInstance.get('/schedule/mySchedule')
  return response.data
}

export const deleteSchedule = async (scheduleId: string) => {
  const response = await axiosInstance.patch(`/schedule/delete/${scheduleId}`)
  return response.data
}

export const getMemoList = async (scheduleId: string | undefined) => {
  const response = await axiosInstance.get(`/schedule/memo/list/${scheduleId}`)
  return response.data
}

export const registerMemo = async (payload: RegisterMemoPayload) => {
  const response = await axiosInstance.post('/schedule/memo/create', payload)
  return response.data
}

export const modifyMemo = async (payload: ModifyMemoPayload) => {
  const response = await axiosInstance.patch('/schedule/memo/update', payload)
  return response.data
}

export const deleteMemo = async (memoId: string) => {
  const response = await axiosInstance.delete(`/schedule/memo/delete/${memoId}`)
  return response.data
}

export const checkMemo = async (memoId: string) => {
  const response = await axiosInstance.patch(`/schedule/memo/update/${memoId}`)
  return response.data
}
