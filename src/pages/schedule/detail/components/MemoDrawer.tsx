import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { EditIcon, WasteBasket } from '@/icons'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { v4 as uuidv4 } from 'uuid'
import { ChecklistItem } from '@/pages/schedule/detail'

interface MemoDrawerProps {
  checklistItems: ChecklistItem[]
  setChecklistItems: (items: ChecklistItem[]) => void
}
const MemoDrawer = ({ checklistItems, setChecklistItems }: MemoDrawerProps) => {
  const addChecklistItem = () => {
    setChecklistItems([...checklistItems, { id: uuidv4(), text: '', checked: false }])
  }

  const removeChecklistItem = (id: string) => {
    setChecklistItems(checklistItems.filter((item: ChecklistItem) => item.id !== id))
  }

  const handleInputChange = (id: string, value: string) => {
    setChecklistItems(checklistItems.map((item: ChecklistItem) => (item.id === id ? { ...item, text: value } : item)))
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <EditIcon />
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader>
          <DrawerTitle className="flex justify-between">
            <div className="text-h5">메모장</div>
            <DrawerClose className="text-b1 text-main">확인</DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          {checklistItems.map((item: ChecklistItem) => (
            <div key={item.id} className="mb-2 flex gap-1">
              <input
                className="w-full rounded border-2 px-4 py-[13.5px] focus:outline-none"
                value={item.text}
                onChange={e => handleInputChange(item.id, e.target.value)}
              />
              <button
                className="rounded border-2 border-green-400 p-[14px]"
                onClick={() => removeChecklistItem(item.id)}
              >
                <WasteBasket />
              </button>
            </div>
          ))}
        </div>
        <DrawerFooter className="pt-20">
          <FooterButton variant="bright" onClick={addChecklistItem}>
            체크리스트({checklistItems.length}/50) 추가하기 +
          </FooterButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default MemoDrawer
