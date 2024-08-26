import { EditIcon, WasteBasket } from '@/icons'
import { MemoItem as MemoItemType } from '@/types/schedule'

interface MemoItemProps {
  item: MemoItemType
  editingMemoId: string | null
  editingContent: string
  onEditStart: (memoId: string, content: string) => void
  onModify: () => void
  onDelete: (memoId: string) => void
  onContentChange: (content: string) => void
}

const MemoItem = ({
  item,
  editingMemoId,
  editingContent,
  onEditStart,
  onModify,
  onDelete,
  onContentChange,
}: MemoItemProps) => {
  return (
    <div key={item.memoId} className="mb-2 flex">
      {editingMemoId === item.memoId ? (
        <input
          className="w-full rounded border-2 border-primary p-3 focus:outline-none"
          value={editingContent}
          onChange={e => onContentChange(e.target.value)}
        />
      ) : (
        <div className="w-full rounded bg-gray-100 px-3 py-2 text-b2">{item.content}</div>
      )}
      {editingMemoId === item.memoId ? (
        <button className="px-3" onClick={onModify}>
          <span className="whitespace-nowrap text-main">수정</span>
        </button>
      ) : (
        <div className="flex gap-2 rounded bg-gray-100 px-3 py-2">
          <button onClick={() => onEditStart(item.memoId, item.content)}>
            <EditIcon className="text-green-600" />
          </button>
          <button onClick={() => onDelete(item.memoId)}>
            <WasteBasket />
          </button>
        </div>
      )}
    </div>
  )
}

export default MemoItem
