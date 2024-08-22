import axiosInstance from '@/services/instance/axiosInstance.ts'
import { createInvitationPayload } from '@/types/invitation'

export const getInvitationImgList = async () => {
  const response = await axiosInstance.get('/schedule/invite/create/imgList')
  return response.data
}
export const createInvitation = async (payload: createInvitationPayload) => {
  const response = await axiosInstance.post('/schedule/invite/create', payload)
  return response.data
}
export const getCreateInvitation = async (invitationId: string) => {
  const response = await axiosInstance.get(`/schedule/invite/view/${invitationId}`)
  return response.data
}
export const acceptInvitation = async (scheduleId: string) => {
  const response = await axiosInstance.post(`/schedule/invite/join/${scheduleId}`)
  return response.data
}
