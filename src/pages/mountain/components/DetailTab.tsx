import Map from './Map'
import CourseCard from './CourseCard'
import Flag from '@/assets/icons/flag.svg?react'
import { CourseType } from '@/types/mountain'

const DetailTab = ({ courseList }: { courseList?: CourseType[] }) => {
  return (
    <div className="p-5 pb-2.5">
      <div className="mb-[10px] text-h5 text-gray-900">코스</div>
      {courseList && <Map markers={courseList} />}
      <div className="mb-[10px] mt-5 flex items-center">
        <Flag />
        <span className="text-b1 text-gray-900">
          총 <span className="text-green-600">{courseList?.length}</span>개의 코스
        </span>
      </div>
      {courseList?.map(course => (
        <CourseCard
          key={course.courseName}
          courseName={course.courseName}
          distance={Number(course.mntiDist)}
          time={course.mntiTime}
          level={course.mntiLevel}
        />
      ))}
    </div>
  )
}

export default DetailTab
