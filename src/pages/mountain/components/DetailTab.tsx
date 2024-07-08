import CourseCard from './CourseCard'
import Flag from '@/assets/icons/flag.svg?react'

type Props = {}

const DetailTab = (props: Props) => {
  return (
    <>
      <div className="p-5">
        <span className="text-h5 text-gray-900">코스</span>
      </div>
      <div className="p-5">
        <div className="mb-[10px] flex items-center">
          <Flag />
          <span className="text-b1 text-gray-900">
            총 <span className="text-green-600">{3}</span>개의 코스
          </span>
        </div>
        <CourseCard courseName="무슨무슨코스" distance={840} time={120} />
        <CourseCard courseName="무슨무슨코스" distance={840} time={120} />
        <CourseCard courseName="무슨무슨코스" distance={840} time={120} />
        <CourseCard courseName="무슨무슨코스" distance={840} time={120} />
      </div>
      <div className="mt-5 h-2 w-full bg-gray-100" />
      <div className="p-5">
        <span className="text-h5 text-gray-900">날씨</span>
      </div>
    </>
  )
}

export default DetailTab
