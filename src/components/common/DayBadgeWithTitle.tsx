import DayBadge from '@/components/common/DayBadge.tsx'
import { ReactNode } from 'react'

interface DayBadgeWithTitleProps {
  title: string
  text: string
  rightAction?: ReactNode
}

const DayBadgeWithTitle = ({ title, text, rightAction }: DayBadgeWithTitleProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <DayBadge text={text} />
        <div className="text-h5">{title}</div>
      </div>
      {rightAction && <div>{rightAction}</div>}
    </div>
  )
}

export default DayBadgeWithTitle
