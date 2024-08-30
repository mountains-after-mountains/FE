import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { BackIcon } from '@/icons'

interface BackDrawerProps {
  backDrawerTitle?: string
  message?: string
  continueButtonLabel?: string
  onConfirmExit?: () => void
}

const BackDrawer = ({
  onConfirmExit,
  backDrawerTitle = '저장하지 않고 나가시겠어요?',
  message = '아직 변경 사항이 저장되지 않았어요.',
  continueButtonLabel = '이어서 수정하기',
}: BackDrawerProps) => {
  const navigate = useNavigate()

  const handleConfirmExit = () => {
    if (onConfirmExit) {
      onConfirmExit() // 외부에서 제공된 핸들러 호출
    } else {
      navigate(-1) // 기본 동작: 이전 페이지로 이동
    }
  }

  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <BackIcon />
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader className="text-start text-h4">{backDrawerTitle}</DrawerHeader>
        <div className="px-4 pb-9 text-b2">{message}</div>
        <DrawerFooter>
          <DrawerClose asChild>
            <FooterButton variant="bright">{continueButtonLabel}</FooterButton>
          </DrawerClose>
          <FooterButton onClick={handleConfirmExit}>그만하고 나가기</FooterButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default BackDrawer
