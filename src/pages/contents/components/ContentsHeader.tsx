import Arrow from '@/assets/icons/arrow_left.svg?react'
import { useNavigate } from 'react-router-dom'

const ContentsHeader = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <header className="sticky top-0 z-20 flex h-12 w-full items-center bg-white px-4">
      <div className="absolute left-4 top-3 cursor-pointer" onClick={goBack}>
        <Arrow color="black" />
      </div>
    </header>
  )
}

export default ContentsHeader
