import Altitude from '@/assets/icons/altitude.svg?react'

const MountainInfo = ({ mountain }: { mountain?: any }) => {
  return (
    <div className="flex items-start justify-between pt-2">
      <div>
        <div className="flex gap-2">
          <div className="text-h3 text-gray-900">{mountain?.mntiName}</div>
          <div className="flex items-center gap-1">
            <Altitude />
            <div className="text-b3 text-gray-700">{`${mountain?.mntiHigh ?? mountain?.height}m`}</div>
          </div>
        </div>
        <div className="text-b3 text-gray-700">{mountain?.mntiAddress ?? mountain?.mntiAdd}</div>
      </div>
    </div>
  )
}

export default MountainInfo
