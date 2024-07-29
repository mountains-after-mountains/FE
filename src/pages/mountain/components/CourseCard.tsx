import StarRate from '@/components/common/StarRate'
import Climb from '@/assets/icons/climb.svg?react'
import Timer from '@/assets/icons/timer.svg?react'

interface Props {
  courseName: string
  distance: number
  time: number
}

const CourseCard = ({ courseName, distance, time }: Props) => {
  return (
    <div className="mb-[10px] rounded-[20px] bg-gray-100 p-[14px]">
      <div className="mb-[10px] flex gap-1">
        <div className="text-b1">{courseName}</div>
        <StarRate difficulty={2} textNone />
      </div>
      <div className="flex gap-[15px]">
        <div className="mb-1 flex w-[92px] items-center gap-1 text-b3 text-gray-900">
          <Climb />
          거리
        </div>
        <div className="text-b3 text-gray-900">{`${distance}m`}</div>
      </div>
      <div className="flex gap-[15px]">
        <div className="flex w-[92px] items-center gap-1 text-b3 text-gray-900">
          <Timer />
          예상소요시간
        </div>
        <div className="text-b3 text-gray-900">{`${time}분`}</div>
      </div>
    </div>
  )
}

export default CourseCard
