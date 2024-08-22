import { useQuery } from '@tanstack/react-query'
import { getCreateInvitation } from '@/services/api/invitation'

const useInvitationData = (invitationId: string) => {
  return useQuery({
    queryKey: ['getCreateInvitation', invitationId],
    queryFn: () => getCreateInvitation(invitationId),
    refetchOnWindowFocus: false,
    enabled: !!invitationId,
  })
}

export default useInvitationData
