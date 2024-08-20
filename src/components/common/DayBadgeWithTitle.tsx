import DayBadge from '@/components/common/DayBadge.tsx'
import { ReactNode } from 'react'

interface DayBadgeWithTitleType {
  title: string
  text: string
  rightAction?: ReactNode
}
const DayBadgeWithTitle = ({ title, text, rightAction }: DayBadgeWithTitleType) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        <DayBadge text={text} />
        <div className="text-h5">{title}</div>
      </div>
      {rightAction}
    </div>
  )
}

export default DayBadgeWithTitle
