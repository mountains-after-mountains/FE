import React from 'react'
import { AsteriskIcon } from '@/icons'

interface TextWithSubtextProps {
  children: React.ReactNode
  asteriskIcon?: boolean
  title: string
  subtext?: string
}

const TextWithSubtext = ({ children, asteriskIcon = false, title, subtext }: TextWithSubtextProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex text-b1">
          {title}
          {asteriskIcon && <AsteriskIcon />}
        </div>
        {subtext && <div className="mt-1 text-c1">{subtext}</div>}
      </div>
      {children}
    </div>
  )
}

export default TextWithSubtext
