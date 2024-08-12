import Altitude from '@/assets/icons/altitude.svg?react'
import clsx from 'clsx'

const MountainInfo = ({ mountain, row }: { mountain?: any; row?: boolean }) => {
  return (
    <div className="flex items-start justify-between pt-2">
      <div className={clsx({ 'flex w-full items-center justify-between': row })}>
        <div className="flex gap-2">
          <div className="text-h3 text-gray-900">{mountain?.mntiName ?? ''}</div>
          <div className="flex items-center gap-1">
            <Altitude />
            <div className="text-b3 text-gray-700">{`${mountain?.mntiHigh ?? mountain?.height ?? ''}m`}</div>
          </div>
        </div>
        <div className="text-b3 text-gray-700">{mountain?.mntiAddress ?? mountain?.mntiAdd ?? ''}</div>
      </div>
    </div>
  )
}

export default MountainInfo
