import { useState } from 'react'
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { EditIcon, WasteBasket } from '@/icons'
import FooterButton from '@/components/common/button/FooterButton.tsx'

interface ChecklistItem {
  id: number
  text: string
}
const MemoDrawer = () => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([{ id: 1, text: '' }])

  const addChecklistItem = () => {
    setChecklistItems([...checklistItems, { id: checklistItems.length + 1, text: '' }])
  }

  const removeChecklistItem = (id: number) => {
    setChecklistItems(checklistItems.filter(item => item.id !== id))
  }

  const handleInputChange = (id: number, value: string) => {
    setChecklistItems(checklistItems.map(item => (item.id === id ? { ...item, text: value } : item)))
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
            <div className="text-b1 text-main">확인</div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          {checklistItems.map(item => (
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
