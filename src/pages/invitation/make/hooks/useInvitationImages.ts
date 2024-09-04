import { useQuery } from '@tanstack/react-query'
import { getInvitationImgList } from '@/services/api/invitation'

const useInvitationImages = () => {
  const { data: invitationImgList, isFetching: invitationImgListLoading } = useQuery({
    queryKey: ['getInvitationImgList'],
    queryFn: getInvitationImgList,
    refetchOnWindowFocus: false,
  })

  return {
    invitationImgList,
    invitationImgListLoading,
  }
}

export default useInvitationImages
