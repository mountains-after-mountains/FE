import { memo, PropsWithChildren } from 'react'
import { LevelOneGr, LevelOneWh, LevelThreeGr, LevelThreeWh, LevelTwoGr, LevelTwoWh } from '@/icons'

type Props = {
  toggleOn?: boolean
  onClick?: () => void
  className?: string
  text: string
  id: number
}

const ToggleButton = memo(
  ({ toggleOn, onClick, text, className, id, children, ...props }: PropsWithChildren<Props>) => {
    const getLevelIcon = () => {
      if (toggleOn) {
        switch (id) {
          case 1:
            return <LevelOneWh />
          case 2:
            return <LevelTwoWh />
          case 3:
            return <LevelThreeWh />
          default:
            return null
        }
      } else {
        switch (id) {
          case 1:
            return <LevelOneGr />
          case 2:
            return <LevelTwoGr />
          case 3:
            return <LevelThreeGr />
          default:
            return null
        }
      }
    }

    return (
      <button
        onClick={onClick}
        className={`${
          toggleOn ? 'bg-green-700 text-white' : 'bg-white text-green-700'
        } border-box inline-flex cursor-pointer items-center justify-center gap-1 rounded-[20px] border border-green-700 px-3 py-[6px] text-b2 ${className}`}
        {...props}
      >
        {text}
        <div className="hidden phone:flex">{getLevelIcon()}</div>
      </button>
    )
  },
)

export default ToggleButton
