import StarRate from './StarRate'
import Altitude from '@/assets/icons/altitude.svg?react'

type Props = {
  mountain: {
    mountainName: string
    mountainLevel: number | undefined
    address: string
    mountainHigh: number
  }
}

const MountainInfo = ({ mountain }: Props) => {
  return (
    <div className="flex items-start justify-between py-2">
      <div>
        <div className="flex gap-2">
          <div className="text-h3 text-gray-900">{mountain?.mountainName}</div>
          <StarRate difficulty={mountain?.mountainLevel} />
        </div>
        <div className="text-b3 text-gray-700">주소 들어갈 부분</div>
      </div>
      <div className="flex items-center gap-1">
        <Altitude />
        <div className="text-b3 text-gray-700">{`${mountain?.mountainHigh}m`}</div>
      </div>
    </div>
  )
}

export default MountainInfo
