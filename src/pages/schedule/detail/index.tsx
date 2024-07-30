import MemoDescription from '@/pages/schedule/detail/components/MemoDescription.tsx'
import MemoDrawer from '@/pages/schedule/detail/components/MemoDrawer.tsx'
import { useQuery } from '@tanstack/react-query'
import { getDetailSchedule } from '@/services/api/schedule'
import { useNavigate, useParams } from 'react-router-dom'
import { WeatherGroup, WeatherProps } from '@/components/common/Weather.tsx'
import DetailCourse from '@/pages/schedule/detail/components/DetailCourse.tsx'
import DetailTop from '@/pages/schedule/detail/components/DetailTop.tsx'
import { useState } from 'react'
import FooterButton from '@/components/common/button/FooterButton.tsx'

const weathers: WeatherProps[] = [
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'sunny', isToday: true, date: '2024-07-27T15:24:00', temperature: 30 },
  { weather: 'blizzard', isToday: false, date: '2024-07-27T15:24:00', temperature: 30 },
]
interface ChecklistItem {
  id: number
  text: string
  checked: boolean
}
const DetailSchedule = () => {
  const navigate = useNavigate()
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([])
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const { data, isError } = useQuery({
    queryKey: ['detailSchedule', scheduleId],
    queryFn: () => getDetailSchedule(scheduleId),
    refetchOnWindowFocus: false,
    enabled: !!scheduleId,
  })

  const handleCheckboxChange = (id: number) => {
    setChecklistItems(prevItems => prevItems.map(item => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }
  return (
    <div className="flex flex-col gap-2 bg-background">
      <DetailTop data={data} />
      <DetailCourse data={data} />
      <div className="bg-white p-5">
        <span className="text-h5 text-gray-900">날씨</span>
        <WeatherGroup weathers={weathers} className="mt-[10px]" />
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="text-h5">메모장</div>
          <MemoDrawer checklistItems={checklistItems} setChecklistItems={setChecklistItems} />
        </div>
        <div className="pb-24 pt-8">
          {checklistItems.length > 0 ? (
            <div>
              {checklistItems.map(item => (
                <div key={item.id} className="flex items-center gap-2">
                  <input type="checkbox" checked={item.checked} onChange={() => handleCheckboxChange(item.id)} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          ) : (
            <MemoDescription />
          )}
        </div>
      </div>
      <div className="fixed bottom-5 mx-5 w-[calc(100%-40px)] max-w-[460px]">
        <FooterButton onClick={() => navigate(`/invitation/make/${scheduleId}`)}>초대장 만들기</FooterButton>
      </div>
    </div>
  )
}

export default DetailSchedule
