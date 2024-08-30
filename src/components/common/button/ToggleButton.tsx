import { memo, PropsWithChildren } from 'react'

type Props = {
  toggleOn?: boolean
  onClick?: () => void
  className?: string
  text: string
}

const ToggleButton = memo(({ toggleOn, onClick, text, className, children, ...props }: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`${toggleOn ? 'bg-green-700 text-white' : 'bg-white text-green-700'} border-box inline-flex cursor-pointer items-center justify-center rounded-[20px] border border-green-700 px-3 py-[6px] text-b2 ${className}`}
      {...props}
    >
      {text}
    </button>
  )
})

export default ToggleButton
