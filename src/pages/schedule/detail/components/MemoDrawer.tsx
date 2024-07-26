import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { EditIcon, WasteBasket } from '@/icons'

const MemoDrawer = () => {
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
          <div className="flex gap-1">
            <input className="w-full rounded border-2 px-4 py-[13.5px] focus:outline-none" />
            <button className="rounded border-2 border-green-400 p-[14px]">
              <WasteBasket />
            </button>
          </div>
        </div>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default MemoDrawer
