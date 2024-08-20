import MountainInfo from '@/components/common/MountainInfo.tsx'
import Top100Badge from '@/components/common/Top100Badge.tsx'
import { Schedule } from '@/types/schedule'

interface DetailCourseProps {
  data: Schedule
}

const DetailCourse = ({ data }: DetailCourseProps) => {
  return (
    <div className="bg-white p-5">
      <div className="pb-[14px] text-h5">코스 상세</div>
      {data?.famous100 && <Top100Badge className="inline-flex" />}
      <MountainInfo mountain={data} />
      {/*<a*/}
      {/*  className="text-b3 text-gray-700 underline"*/}
      {/*  href={mountain.park.link}*/}
      {/*  target="_blank"*/}
      {/*>{`${mountain.park.name} >`}</a>*/}
      {/*<Map lat={33.450701} lng={126.570667} markers={data?.course.pahts} />*/}
      {/*<CourseCard*/}
      {/*  courseName={data?.course?.courseName}*/}
      {/*  distance={Number(data?.course?.mntiDist) * 1000}*/}
      {/*  time={data?.course?.mntiTime}*/}
      {/*  mountainLevel={data?.mountainLevel}*/}
      {/*/>*/}
    </div>
  )
}

export default DetailCourse
