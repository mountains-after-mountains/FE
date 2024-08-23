import { ReactNode } from 'react'

interface CommonCardProps {
  children: ReactNode
  className?: string
}

const CommonCard = ({ children, className = '' }: CommonCardProps) => {
  return <div className={`rounded-[20px] bg-white p-5 ${className}`}>{children}</div>
}

export default CommonCard
