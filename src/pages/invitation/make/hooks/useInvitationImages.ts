import { useQuery } from '@tanstack/react-query'
import { getInvitationImgList } from '@/services/api/invitation'

const useInvitationImages = () => {
  const { data: invitationImgList } = useQuery({
    queryKey: ['getInvitationImgList'],
    queryFn: getInvitationImgList,
    refetchOnWindowFocus: false,
  })

  return {
    invitationImgList,
  }
}

export default useInvitationImages
