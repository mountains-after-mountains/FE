import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { createInvitation } from '@/services/api/invitation'

const useCreateInvitation = () => {
  const navigate = useNavigate()

  const createInvitationMutation = useMutation({
    mutationFn: createInvitation,
    onSuccess: data => {
      const invitationId = data.invitationId
      navigate(`/invitation/${invitationId}`)
    },
  })

  const completeInvitation = (scheduleId: string, imgNumber: number, text: string) => {
    const payload = {
      scheduleId: scheduleId,
      imgNumber: imgNumber,
      text: text,
    }
    createInvitationMutation.mutate(payload)
  }

  return {
    completeInvitation,
  }
}

export default useCreateInvitation
