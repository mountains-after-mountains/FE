import { useMutation } from '@tanstack/react-query'
import { deleteSchedule } from '@/services/api/schedule'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'

const DeleteDialog = ({ scheduleId }: string) => {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: () => deleteSchedule(scheduleId),
    onSuccess: () => {
      navigate('/schedule')
    },
    onError: (error: AxiosError) => {
      console.error('Error deleting schedule:', error)
    },
  })

  const handleDelete = () => {
    mutation.mutate()
  }
  return (
    <Drawer>
      <DrawerTrigger className="text-b2 text-primary">삭제</DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader className="text-h4">저장하지 않고 나가시겠어요?</DrawerHeader>
        <div className="px-4 pb-9 text-b2">아직 변경 사항이 저장되지 않았어요.</div>
        <DrawerFooter>
          <DrawerClose asChild>
            <FooterButton variant="bright">이어서 수정하기</FooterButton>
          </DrawerClose>
          <FooterButton onClick={handleDelete}>그만하고 나가기</FooterButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default DeleteDialog
