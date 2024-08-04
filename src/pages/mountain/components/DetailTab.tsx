import Map from './Map'
import CourseCard from './CourseCard'
import Flag from '@/assets/icons/flag.svg?react'
import { CourseType } from '@/types/mountain'

const DetailTab = ({ courseList }: { courseList?: CourseType[] }) => {
  const xyToLatLon = (x: number, y: number) => {
    const R = 6378137 // 지구의 반지름 (미터)

    const longitude = (x / R) * (180 / Math.PI)
    const latitude = (Math.atan(Math.exp(y / R)) * 2 - Math.PI / 2) * (180 / Math.PI)
    return { latitude, longitude }
  }

  const markers = courseList?.map(course => {
    const xyToLatLonResult = xyToLatLon(course.paths[0][0].x, course.paths[0][0].y)
    return { ...course, title: course.courseName, lat: xyToLatLonResult.latitude, lng: xyToLatLonResult.longitude }
  })

  // 변형 안 됨 기준 알아야 됨

  return (
    <div className="p-5 pb-0">
      <div className="mb-[10px] text-h5 text-gray-900">코스</div>
      {markers && <Map lat={markers[0].lat} lng={markers[0].lng} markers={markers} />}
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
