import MenuSvg from '@/assets/icons/menu.svg?react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import ProfileImg from '@/assets/image/profile.png'
import useGetUserInfo from '@/hooks/useGetUserInfo'

type Props = {
  selected: 'home' | 'schedule'
}

const Header = ({ selected }: Props) => {
  const navigate = useNavigate()
  const { data } = useGetUserInfo()

  return (
    <>
      <header className="sticky top-0 z-20 flex items-center justify-between bg-white p-5">
        <div className="flex items-center gap-5 text-h4 font-bold text-gray-300">
          <button className={clsx({ 'text-gray-900': selected === 'home' })} onClick={() => navigate('/home')}>
            홈
          </button>
          <button
            className={clsx({ 'text-gray-900': selected === 'schedule' })}
            onClick={() => navigate('/schedule/register')}
          >
            등산일정
          </button>
        </div>
        <Popover>
          <PopoverTrigger>
            <MenuSvg />
          </PopoverTrigger>
          <PopoverContent className="absolute right-0 flex max-w-[250px] flex-col items-start gap-5 rounded-3xl p-5">
            <div className="flex items-center gap-2">
              <img src={ProfileImg} className="h-6 w-6" />
              <span className="text-h5 font-bold text-gray-900">{data?.nickname ?? ''}</span>
            </div>
            <button>회원탈퇴</button>
            <button>개인정보처리방침</button>
            <button>개선의견 남기기</button>
            <button>로그아웃</button>
          </PopoverContent>
        </Popover>
      </header>
    </>
  )
}

export default Header
