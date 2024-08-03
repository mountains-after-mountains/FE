import MountainInfo from '@/components/common/MountainInfo'
import Top100Badge from '@/components/common/Top100Badge'
import CourseCard from '@/pages/mountain/components/CourseCard'
import Map from '@/pages/mountain/components/Map'
import Clip from '@/assets/icons/clip.svg?react'

type Props = {
  isTop100: boolean
  mountain: {
    name: string
    rates: number
    address: string
    altitude: number
  }
  park: {
    name: string
    link: string
  }
  markers: {
    title: string
    lat: number
    lng: number
  }[]
}

const CourseInfo = ({ isTop100, mountain, park, markers }: Props) => {
  return (
    <div className="p-5">
      <div className="mb-[14px] text-h5 text-gray-900">코스 상세</div>
      {isTop100 && <Top100Badge className="inline-flex" />}
      <MountainInfo mountain={mountain} />
      <a className="mb-2 flex items-center gap-0.5 text-b3 text-gray-700 underline" href={park.link} target="_blank">
        {park.name}
        <Clip />
      </a>
      <Map lat={33.450701} lng={126.570667} markers={markers} />
      <div className="h-2" />
      <CourseCard courseName="백운대코스" distance={849} time={120} />
    </div>
  )
}

export default CourseInfo
