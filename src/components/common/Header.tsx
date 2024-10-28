import MenuSvg from '@/assets/icons/menu.svg?react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import ProfileImg from '@/assets/image/profile.png'
import useAuthStore from '@/store/useAuthStore'
import WithdrawDrawer from '@/components/common/WithdrawDrawer.tsx'

type Props = {
  selected: 'home' | 'schedule'
}

const Header = ({ selected }: Props) => {
  const navigate = useNavigate()
  const name = localStorage.getItem('nickName')
  const { logout } = useAuthStore()

  const handleAddSchedule = () => navigate('/schedule/register')
  const handleSignOut = () => logout()

  return (
    <>
      <header className="sticky top-0 z-20 flex max-w-[550px] items-center justify-between bg-white p-5">
        <div className="flex items-center gap-5 text-h4 font-bold text-gray-300">
          <button className={clsx({ 'text-gray-900': selected === 'home' })} onClick={() => navigate('/home')}>
            홈
          </button>
          <button className={clsx({ 'text-gray-900': selected === 'schedule' })} onClick={() => navigate('/schedule')}>
            등산일정
          </button>
        </div>
        {selected === 'home' ? (
          <Popover>
            <PopoverTrigger>
              <MenuSvg />
            </PopoverTrigger>
            <PopoverContent className="absolute right-0 flex max-w-[250px] flex-col items-start gap-5 rounded-3xl p-5">
              <div className="flex items-center gap-2">
                <img src={ProfileImg} className="h-6 w-6" />
                <span className="text-h5 font-bold text-gray-900">{name}</span>
              </div>
              <a
                href="https://www.notion.so/over-the-mnt/179a7f503ba54d2aa705bd882e069c10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>개인정보처리방침</button>
              </a>
              <a href="https://moaform.com/q/U9DcCc" target="_blank" rel="noopener noreferrer">
                <button>개선의견 남기기</button>
              </a>
              <PopoverClose onClick={handleSignOut}>로그아웃</PopoverClose>
              <WithdrawDrawer />
            </PopoverContent>
          </Popover>
        ) : (
          <button className="text-b2 text-green-600" onClick={handleAddSchedule}>
            추가
          </button>
        )}
      </header>
    </>
  )
}

export default Header
