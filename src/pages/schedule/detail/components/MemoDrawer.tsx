import React, { useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { EditIcon } from '@/icons'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { MemoDrawerProps } from '@/types/schedule'
import { useMemoDrawer } from '@/pages/schedule/detail/hooks/useMemoDrawer.ts'
import MemoItem from '@/pages/schedule/detail/components/MemoItem.tsx'

const MemoDrawer = ({
  memoList,
  memo,
  setMemo,
  handleRegisterMemo,
  isOpen,
  setIsOpen,
  isAuthenticated,
  setIsLogin,
}: MemoDrawerProps) => {
  const { editingMemoId, editingContent, handleModifyMemo, handleDeleteMemo, startEditingMemo, setEditingContent } =
    useMemoDrawer(memoList, handleRegisterMemo)

  const [isComposing, setIsComposing] = useState(false)

  const handleDrawerChange = (open: boolean) => {
    if (open && !isAuthenticated) {
      setIsOpen(false)
      setIsLogin(true)
    } else {
      setIsOpen(open)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value)
  }

  const handleCompositionStartWrapper = () => {
    setIsComposing(true)
  }

  const handleCompositionEndWrapper = (e: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false)
    setMemo(e.currentTarget.value)
  }
  const handleKeyDownWrapper = (e: React.KeyboardEvent) => {
    if (!isComposing && e.key === 'Enter') {
      e.preventDefault()
      handleRegisterMemo()
      setMemo('')
    }
  }

  return (
    <Drawer open={isOpen} onOpenChange={handleDrawerChange}>
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
        <div className="max-h-96 overflow-y-auto px-4">
          {memoList.map(item => (
            <MemoItem
              key={item.memoId}
              item={item}
              editingMemoId={editingMemoId}
              editingContent={editingContent}
              onEditStart={startEditingMemo}
              onModify={handleModifyMemo}
              onDelete={handleDeleteMemo}
              onContentChange={setEditingContent}
            />
          ))}
          <input
            className="w-full rounded border-2 border-primary p-3 placeholder:text-border focus:outline-none"
            value={memo}
            onChange={handleInputChange}
            onKeyDown={handleKeyDownWrapper}
            onCompositionStart={handleCompositionStartWrapper}
            onCompositionEnd={handleCompositionEndWrapper}
            placeholder="메모를 입력하세요"
          />
        </div>
        <DrawerFooter className="pt-20">
          <FooterButton variant="bright" onClick={handleRegisterMemo}>
            체크리스트({memoList.length}/50) 추가하기 +
          </FooterButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default MemoDrawer
