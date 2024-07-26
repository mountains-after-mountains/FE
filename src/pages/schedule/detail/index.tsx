import { EditIcon } from '@/icons'
import MemoDescription from '@/pages/schedule/detail/components/MemoDescription.tsx'

const DetailSchedule = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-h5">메모장</div>
        <EditIcon />
      </div>
      <div className="pt-4">
        <MemoDescription />
      </div>
    </div>
  )
}

export default DetailSchedule
