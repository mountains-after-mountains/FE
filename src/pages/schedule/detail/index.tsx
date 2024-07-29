import Divider from '@/components/common/Divider'
import MountainInfo from '@/components/common/MountainInfo'
import Top100Badge from '@/components/common/Top100Badge'
import { useNavigate, useParams } from 'react-router-dom'
import Clip from '@/assets/icons/clip.svg?react'
import { WeatherGroup, WeatherProps } from '@/components/common/Weather'
import Map from '@/pages/mountain/components/Map'
import CourseCard from '@/pages/mountain/components/CourseCard'
import FooterButton from '@/components/common/button/FooterButton'

type Props = {}

const mountain = {
  name: '북한산',
  address: '서울시 성북구 정릉동',
  altitude: 338,
  rates: 2,
  img: 'https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=56531&fileTy=MEDIA&fileNo=1',
  isTop100: true,
  park: {
    name: '북한산국립공원',
    link: 'https://www.knps.or.kr/',
  },
  dday: 5,
  date: '5월 26일 (수)',
  time: '12시 10분',
  people: 4,
}

const weathers: WeatherProps[] = [
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'sunny', isToday: true, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
]

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

const ScheduleDetail = (props: Props) => {
  const { scheduleId } = useParams()

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div>
      <img src={mountain.img} className="h-[246px] w-full" onClick={goBack} />
      <div className="box-border p-5">
        <div className="mb-[6px] flex gap-1">
          <span className="rounded-[6px] bg-green-200 px-2 py-0.5 text-b2 font-semibold text-green-600">{`D-${mountain.dday === 0 ? 'day' : mountain.dday}`}</span>
          <span className="text-h5 text-gray-900">{mountain.date}</span>
        </div>
        <div className="mb-[6px] flex gap-1 text-b3 text-gray-900">
          <span className="text-gray-700">입산시간</span>
          <span>{mountain.time}</span>
        </div>
        <div className="mb-[6px] flex gap-1 text-b3 text-gray-900">
          <span className="text-gray-700">인원수</span>
          <span>{`${mountain.people}명`}</span>
        </div>
      </div>
      <Divider />
      <div className="p-5">
        <div className="mb-[14px] text-h5 text-gray-900">코스 상세</div>
        {mountain.isTop100 && <Top100Badge className="inline-flex" />}
        <MountainInfo mountain={mountain} />
        <a
          className="mb-2 flex items-center gap-0.5 text-b3 text-gray-700 underline"
          href={mountain.park.link}
          target="_blank"
        >
          {mountain.park.name}
          <Clip />
        </a>
        <Map lat={33.450701} lng={126.570667} markers={markers} />
        <div className="h-2" />
        <CourseCard courseName="백운대코스" distance={849} time={120} />
      </div>
      <Divider />
      <div className="p-5">
        <span className="text-h5 text-gray-900">날씨</span>
        <WeatherGroup weathers={weathers} className="mt-[10px]" />
      </div>
      <Divider />
      <div className="p-5">
        <span className="text-h5 text-gray-900">메모장</span>
      </div>
      <div className="fixed bottom-5 mx-5 w-[calc(100%-40px)] max-w-[460px]">
        <FooterButton>초대장 만들기</FooterButton>
      </div>
    </div>
  )
}

export default ScheduleDetail
