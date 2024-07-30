import MountainInfo from '@/components/common/MountainInfo.tsx'
import CourseCard from '@/pages/mountain/components/CourseCard.tsx'

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
const DetailCourse = ({ data }) => {
  return (
    <div className="bg-white p-5">
      <div className="pb-[14px] text-h5">코스 상세</div>
      {/*{data.isTop100 && <Top100Badge className="inline-flex" />}*/}
      <MountainInfo mountain={data} />
      {/*<a*/}
      {/*  className="text-b3 text-gray-700 underline"*/}
      {/*  href={mountain.park.link}*/}
      {/*  target="_blank"*/}
      {/*>{`${mountain.park.name} >`}</a>*/}
      {/*<Map lat={33.450701} lng={126.570667} markers={markers} />*/}
      <CourseCard courseName={data?.courseName} distance={840} time={120} />
    </div>
  )
}

export default DetailCourse
