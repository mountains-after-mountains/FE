import MemoDescription from '@/pages/schedule/detail/components/MemoDescription.tsx'
import MemoDrawer from '@/pages/schedule/detail/components/MemoDrawer.tsx'
import { useQuery } from '@tanstack/react-query'
import { getDetailSchedule } from '@/services/api/schedule'
import { useNavigate, useParams } from 'react-router-dom'
import { WeatherGroup, WeatherProps } from '@/components/common/Weather.tsx'
import DetailCourse from '@/pages/schedule/detail/components/DetailCourse.tsx'
import DetailTop from '@/pages/schedule/detail/components/DetailTop.tsx'

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
}
const DetailSchedule = () => {
  const navigate = useNavigate()
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const { data, isError } = useQuery({
    queryKey: ['detailSchedule', scheduleId],
    queryFn: () => getDetailSchedule(scheduleId),
    refetchOnWindowFocus: false,
    enabled: !!scheduleId,
  })

  const weathers: WeatherProps[] = [
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'sunny', isToday: true, date: '2024-07-27T15:24:00', temperature: 30 },
    { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  ]
  return (
    <div className="flex flex-col gap-2 bg-background">
      <DetailTop mountain={mountain} />
      <DetailCourse mountain={mountain} />
      <div className="bg-white p-5">
        <span className="text-h5 text-gray-900">날씨</span>
        <WeatherGroup weathers={weathers} className="mt-[10px]" />
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="text-h5">메모장</div>
          <MemoDrawer />
        </div>
        <div className="pt-8">
          <MemoDescription />
        </div>
      </div>
    </div>
  )
}

export default DetailSchedule
