import { useMemo } from 'react'
import StarRate from '@/components/common/StarRate.tsx'
import Climb from '@/assets/icons/climb.svg?react'
import Timer from '@/assets/icons/timer.svg?react'
import { useParams } from 'react-router-dom'

interface Props {
  courseName: string
  distance: number
  time: number
  onlyFreeCourse?: boolean
  level: '쉬움' | '중간' | '어려움'
}

const CourseCard = ({ courseName, distance, time, level, onlyFreeCourse }: Props) => {
  const params = useParams()
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

  console.log(params)

  return (
    <div className="mb-[10px] rounded-[20px] bg-gray-100 p-[14px]">
      {courseName === '자유코스' ? (
        params.scheduleId ? (
          <>
            <div className="mb-[10px] flex gap-1">
              <div className="text-b1">{courseName}</div>
            </div>
            <div className="text-b2">
              <p>발길 닿는 대로 가보는 것도 등산의 묘미!</p>
              <p>안전에 유의하며 자유롭게 올라보세요!</p>
            </div>
          </>
        ) : onlyFreeCourse ? (
          <>
            <div className="mb-[10px] flex gap-1">
              <div className="text-b1">{courseName}</div>
            </div>
            <div className="text-b2">
              <p>이 산은 높지 않아 하나의 코스만 있어요.</p>
              <p>안전에 유의하며 자유롭게 올라보세요!</p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-[10px] flex gap-1">
              <div className="text-b1">{courseName}</div>
            </div>
            <div className="text-b2">
              <p>아직 코스를 정하지 않아도 괜찮아요.</p>
              <p>부담없이 등산 일정을 만들고 나중에 코스를 정해요.</p>
            </div>
          </>
        )
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default CourseCard
