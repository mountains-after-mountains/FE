import MemoDescription from '@/pages/schedule/detail/components/MemoDescription.tsx'
import MemoDrawer from '@/pages/schedule/detail/components/MemoDrawer.tsx'
import { useQuery } from '@tanstack/react-query'
import { getDetailSchedule } from '@/services/api/schedule'
import { useParams } from 'react-router-dom'

const DetailSchedule = () => {
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const { data, isError } = useQuery({
    queryKey: ['detailSchedule', scheduleId],
    queryFn: () => getDetailSchedule(scheduleId),
    refetchOnWindowFocus: false,
    enabled: !!scheduleId,
  })
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-h5">메모장</div>
        <MemoDrawer />
      </div>
      <div className="pt-4">
        <MemoDescription />
      </div>
    </div>
  )
}

export default DetailSchedule
