import StarRate from '@/components/common/StarRate'
import Climb from '@/assets/icons/climb.svg?react'
import Timer from '@/assets/icons/timer.svg?react'
import { useMemo } from 'react'

interface Props {
  courseName: string
  distance: number
  time: number
  level: '쉬움' | '중간' | '어려움'
}

const CourseCard = ({ courseName, distance, time, level }: Props) => {
  const difficulty = useMemo(() => {
    switch (level) {
      case '쉬움':
        return 1
      case '중간':
        return 2
      default:
        return 3
    }
  }, [level])

  return (
    <div className="mb-[10px] rounded-[20px] bg-gray-100 p-[14px]">
      <div className="mb-[10px] flex gap-1">
        <div className="text-b1">{courseName}</div>
        {level ? <StarRate difficulty={difficulty} textNone /> : null}
      </div>
      <div className="flex gap-[15px]">
        <div className="mb-1 flex w-[92px] items-center gap-1 text-b3 text-gray-900">
          <Climb />
          거리
        </div>
        <div className="text-b3 text-gray-900">{distance ? `${distance}km` : '-'}</div>
      </div>
      <div className="flex gap-[15px]">
        <div className="flex w-[92px] items-center gap-1 text-b3 text-gray-900">
          <Timer />
          예상소요시간
        </div>
        <div className="text-b3 text-gray-900">{time ? `${time}분` : '-'}</div>
      </div>
    </div>
  )
}

export default CourseCard
