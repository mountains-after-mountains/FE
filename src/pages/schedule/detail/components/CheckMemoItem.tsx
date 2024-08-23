import { Checkbox } from '@/components/ui/checkbox.tsx'
import { MemoItem } from '@/types/schedule'

interface MemoItemComponentProps {
  item: MemoItem
  onCheckboxChange: (memoId: string) => void
}

const CheckMemoItem = ({ item, onCheckboxChange }: MemoItemComponentProps) => {
  return (
    <div key={item.memoId} className="flex items-center gap-2">
      <Checkbox
        className="h-[18px] w-[18px] border-2"
        checked={item.checkStatus}
        onCheckedChange={() => onCheckboxChange(item.memoId)}
      />
      <label htmlFor={item.memoId}>{item.content}</label>
    </div>
  )
}

export default CheckMemoItem
