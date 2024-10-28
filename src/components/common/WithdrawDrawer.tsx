import { useNavigate } from 'react-router-dom'
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

const WithdrawDrawer = () => {
  const navigate = useNavigate()

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>탈퇴하기</button>
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader>
          <DrawerTitle className="text-start text-xl font-bold">산너머산을 탈퇴 하시겠어요?</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-9 text-b2">
          나의 등산 기록과 일정이 모두 사라져요.
          <br />
          그래도 탈퇴하시겠어요?
        </div>
        <DrawerFooter>
          <FooterButton variant="bright" onClick={() => navigate('/withdraw')}>
            탈퇴하기
          </FooterButton>
          <DrawerClose asChild>
            <FooterButton>계속 사용하기</FooterButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default WithdrawDrawer
