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
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'

const DeleteDrawer = ({ scheduleId }: { scheduleId: string }) => {
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
        <DrawerHeader>
          <DrawerTitle className="text-start text-xl font-bold">등산 일정을 삭제하시겠어요?</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-9 text-b2">만들었던 일정이 사라져요.</div>
        <DrawerFooter>
          <DrawerClose asChild>
            <FooterButton variant="bright">이어서 수정하기</FooterButton>
          </DrawerClose>
          <FooterButton onClick={handleDelete}>그만하고 삭제하기</FooterButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default DeleteDrawer
