import Divider from '@/components/common/Divider'
import { useParams } from 'react-router-dom'
import { WeatherGroup, WeatherProps } from '@/components/common/Weather'
import FooterButton from '@/components/common/button/FooterButton'
import ScheduleInfo from './components/ScheduleInfo'
import CourseInfo from './components/CourseInfo'
import useGetScheduleDetail from '@/hooks/useGetScheduleDetail'

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
  const { data, isLoading } = useGetScheduleDetail(scheduleId)

  console.log(data)

  return (
    <div>
      {/* <ScheduleInfo /> */}
      <Divider />
      {/* <CourseInfo /> */}
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
