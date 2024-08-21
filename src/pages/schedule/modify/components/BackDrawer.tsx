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

const BackDrawer = () => {
  const navigate = useNavigate()

  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <BackIcon />
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader className="text-start text-h4">저장하지 않고 나가시겠어요?</DrawerHeader>
        <div className="px-4 pb-9 text-b2">아직 변경 사항이 저장되지 않았어요.</div>
        <DrawerFooter>
          <DrawerClose asChild>
            <FooterButton variant="bright">이어서 수정하기</FooterButton>
          </DrawerClose>
          <FooterButton onClick={() => navigate(-1)}>그만하고 나가기</FooterButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default BackDrawer
