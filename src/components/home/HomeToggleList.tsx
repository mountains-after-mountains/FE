import { useState } from 'react'
import ToggleButton from '@/components/common/button/ToggleButton'
import Info from '@/assets/icons/info.svg?react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import MountainClassification from './MountainClassification'
import { useNavigate } from 'react-router-dom'

interface HomeToggleListProps {
  scrollToTop: () => void
  id: string | undefined
}

const HomeToggleList = ({ scrollToTop, id }: HomeToggleListProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const onClick = (level: '1' | '2' | '3') => {
    if (id === level) {
      scrollToTop()
      navigate('/')
    } else {
      scrollToTop()
      navigate(`/${level}`)
    }
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex items-center justify-between px-5 py-[21px]">
      <div className="flex gap-[10px]">
        <ToggleButton id={1} toggleOn={id === '1'} onClick={() => onClick('1')} text="산 아래 산" />
        <ToggleButton id={2} toggleOn={id === '2'} onClick={() => onClick('2')} text="산 중의 산" />
        <ToggleButton id={3} toggleOn={id === '3'} onClick={() => onClick('3')} text="산 너머 산" />
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button onClick={() => setIsOpen(true)}>
            <Info />
          </button>
        </DialogTrigger>
        <DialogContent className="w-[calc(100%-40px)] rounded-xl">
          <DialogTitle className="hidden" />
          <MountainClassification onClick={closeDialog} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default HomeToggleList
