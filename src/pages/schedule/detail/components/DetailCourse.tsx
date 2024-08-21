import MountainInfo from '@/components/common/MountainInfo.tsx'
import Top100Badge from '@/components/common/Top100Badge.tsx'
import { Schedule } from '@/types/schedule'
import CourseCard from '@/pages/mountain/components/CourseCard.tsx'
import Map from '@/pages/mountain/components/Map.tsx'

interface DetailCourseProps {
  data: Schedule
}

const DetailCourse = ({ data }: DetailCourseProps) => {
  return (
    <div className="bg-white p-5">
      <div className="pb-[14px] text-h5">코스 상세</div>
      {data?.famous100 && <Top100Badge className="inline-flex" />}
      <MountainInfo mountain={data} />
      {data && <Map markers={[data.course]} />}
      <CourseCard
        key={data?.course?.courseName}
        courseName={data?.course?.courseName || ''}
        distance={Number(data?.course?.mntiDist)}
        time={data?.course?.mntiTime}
        level={data?.course?.mntiLevel}
      />
    </div>
  )
}

export default DetailCourse
