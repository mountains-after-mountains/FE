import { useParams } from 'react-router-dom'
import DetailMountainInfo from './components/DetailMountainInfo'
import DetailTab from './components/DetailTab'
import Divider from '@/components/common/Divider'
import { WeatherGroup, WeatherProps } from '@/components/common/Weather'
import FooterButton from '@/components/common/button/FooterButton'

const Mountain = () => {
  const { mountainId } = useParams()
  const weathers: WeatherProps[] = [
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'sunny', isToday: true, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  ]

  return (
    <div>
      <DetailMountainInfo />
      <Divider />
      <DetailTab />
      <Divider />
      <div className="p-5 pb-[100px]">
        <span className="text-h5 text-gray-900">날씨</span>
        <WeatherGroup weathers={weathers} className="mt-[10px]" />
      </div>
      <div className="fixed bottom-5 mx-5 w-[calc(100%-40px)] max-w-[460px]">
        <FooterButton>일정 등록하기</FooterButton>
      </div>
    </div>
  )
}

export default Mountain
