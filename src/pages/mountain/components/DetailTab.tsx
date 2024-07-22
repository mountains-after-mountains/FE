import CourseCard from './CourseCard'
import Flag from '@/assets/icons/flag.svg?react'
import Map from './Map'

const DetailTab = () => {
  const markers = [
    {
      title: '카카오',
      lat: 33.450705,
      lng: 126.570677,
    },
    {
      title: '생태연못',
      lat: 33.450936,
      lng: 126.569477,
    },
    {
      title: '텃밭',
      lat: 33.450879,
      lng: 126.56994,
    },
    {
      title: '근린공원',
      lat: 33.451393,
      lng: 126.570738,
    },
  ]

  return (
    <>
      <div className="p-5">
        <span className="text-h5 text-gray-900">코스</span>
      </div>
      <Map lat={33.450701} lng={126.570667} markers={markers} />
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
