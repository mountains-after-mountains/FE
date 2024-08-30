import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useDateInfo from '@/hooks/useDateInfo.ts'
import { useDetailSchedule } from '@/hooks/useDetailSchedule.ts'
import useCreateInvitation from './useCreateInvitation'
import useInvitationImages from './useInvitationImages'
import { InvitationImage } from '@/types/invitation'

const useInvitation = () => {
  const [selectedImage, setSelectedImage] = useState<InvitationImage | null>(null)
  const [text, setText] = useState('')
  const { scheduleId } = useParams<{ scheduleId: string }>()

  const { data, isFetching } = useDetailSchedule(scheduleId)
  const { invitationImgList } = useInvitationImages()
  const { completeInvitation } = useCreateInvitation()

  useEffect(() => {
    if (invitationImgList && invitationImgList.length > 0) {
      setSelectedImage({ img: invitationImgList[0].img, imgNumber: invitationImgList[0].imgNumber })
    }
  }, [invitationImgList])

  const handleImageClick = (img: string, imgNumber: number) => {
    setSelectedImage({ img, imgNumber })
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const scheduleDate = data?.scheduleDate ?? ''
  const dateInfo = useDateInfo(scheduleDate)

  const handleCompleteInvitation = () => {
    if (!selectedImage || !scheduleId) return
    completeInvitation(scheduleId, selectedImage.imgNumber, text)
  }

  return {
    isFetching,
    selectedImage,
    invitationImgList,
    text,
    dateInfo,
    data,
    handleImageClick,
    handleTextChange,
    completeInvitation: handleCompleteInvitation,
  }
}

export default useInvitation
