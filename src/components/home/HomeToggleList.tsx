import { useState } from 'react'
import ToggleButton from '@/components/common/button/ToggleButton'

const HomeToggleList = ({ onClickOuter }: { onClickOuter: (level: '1' | '2' | '3' | undefined) => void }) => {
  const [mntiLevel, setMntiLevel] = useState<'1' | '2' | '3'>()

  const onClick = (level: '1' | '2' | '3') => {
    if (mntiLevel === level) {
      setMntiLevel(undefined)
      onClickOuter(undefined)
    } else {
      setMntiLevel(level)
      onClickOuter(level)
    }
  }

  return (
    <div className="flex gap-[10px] px-5 py-[21px]">
      <ToggleButton toggleOn={mntiLevel === '1'} onClick={() => onClick('1')} text="낮은 산" />
      <ToggleButton toggleOn={mntiLevel === '2'} onClick={() => onClick('2')} text="중간 산" />
      <ToggleButton toggleOn={mntiLevel === '3'} onClick={() => onClick('3')} text="높은 산" />
    </div>
  )
}

export default HomeToggleList
