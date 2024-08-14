import { useState } from 'react'
import ToggleButton from '@/components/common/button/ToggleButton'
import Info from '@/assets/icons/info.svg?react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import MountainClassification from './MountainClassification'

const HomeToggleList = ({ onClickOuter }: { onClickOuter: (level: '1' | '2' | '3' | undefined) => void }) => {
  const [mntiLevel, setMntiLevel] = useState<'1' | '2' | '3'>()
  const [isOpen, setIsOpen] = useState(false)

  const onClick = (level: '1' | '2' | '3') => {
    if (mntiLevel === level) {
      setMntiLevel(undefined)
      onClickOuter(undefined)
    } else {
      setMntiLevel(level)
      onClickOuter(level)
    }
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex items-center justify-between px-5 py-[21px]">
      <div className="flex gap-[10px]">
        <ToggleButton toggleOn={mntiLevel === '1'} onClick={() => onClick('1')} text="산 아래 산" />
        <ToggleButton toggleOn={mntiLevel === '2'} onClick={() => onClick('2')} text="산 중의 산" />
        <ToggleButton toggleOn={mntiLevel === '3'} onClick={() => onClick('3')} text="산 너머 산" />
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
