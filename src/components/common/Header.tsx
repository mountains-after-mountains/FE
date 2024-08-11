import MenuSvg from '@/assets/icons/menu.svg?react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

type Props = {
  selected: 'home' | 'schedule'
}

const Header = ({ selected }: Props) => {
  const navigate = useNavigate()

  return (
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
      <button>
        <MenuSvg />
      </button>
    </header>
  )
}

export default Header
