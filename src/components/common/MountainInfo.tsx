import Altitude from '@/assets/icons/altitude.svg?react'
import { MountainResponse } from '@/types/mountain'

const MountainInfo = ({ mountain }: { mountain?: MountainResponse }) => {
  return (
    <div className="flex items-start justify-between pt-2">
      <div>
        <div className="flex gap-2">
          <div className="text-h3 text-gray-900">{mountain?.mntiName}</div>
          <div className="flex items-center gap-1">
            <Altitude />
            <div className="text-b3 text-gray-700">{`${mountain?.mntiHigh}m`}</div>
          </div>
        </div>
        <div className="text-b3 text-gray-700">{mountain?.mntiAddress}</div>
      </div>
    </div>
  )
}

export default MountainInfo
