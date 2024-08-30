import { BackIcon } from '@/icons'
import { useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'

interface HeaderProps {
  title?: string
  rightAction?: ReactNode
  onBackClick?: () => void
}

const Header = ({ title, rightAction, onBackClick }: HeaderProps) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick() // 외부에서 제공된 핸들러 호출
    } else {
      navigate(-1) // 기본 동작: 이전 페이지로 이동
    }
  }

  return (
    <header className="sticky top-0 flex items-center bg-white px-4 py-3">
      <button className="w-1/3 p-2" onClick={handleBackClick}>
        <BackIcon />
      </button>
      <div className="flex w-1/3 justify-center text-h5 text-gray-900">{title}</div>
      <div className="flex w-1/3 justify-end">{rightAction}</div>
    </header>
  )
}

export default Header
