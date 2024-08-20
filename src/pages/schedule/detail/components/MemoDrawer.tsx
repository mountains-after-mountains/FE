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
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteMemo, modifyMemo } from '@/services/api/schedule'
import { MemoDrawerProps } from '@/types/schedule'

const MemoDrawer = ({ memoList, memo, setMemo, handleRegisterMemo }: MemoDrawerProps) => {
  const [editingMemoId, setEditingMemoId] = useState<string | null>(null)
  const [editingContent, setEditingContent] = useState('')

  const queryClient = useQueryClient()

  const modifyMemoMutation = useMutation({
    mutationFn: modifyMemo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memoList'] })
    },
  })
  const deleteMemoMutation = useMutation({
    mutationFn: deleteMemo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memoList'] })
    },
  })

  const handleModifyMemo = () => {
    if (!editingMemoId) return

    const payload = {
      memoId: editingMemoId,
      memoContent: editingContent,
    }
    modifyMemoMutation.mutate(payload)
    setEditingMemoId(null)
    setEditingContent('')
  }

  const handleDeleteMemo = (memoId: string) => {
    deleteMemoMutation.mutate(memoId)
  }

  const startEditingMemo = (memoId: string, content: string) => {
    setEditingMemoId(memoId)
    setEditingContent(content)
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
          {memoList.map(item => (
            <div key={item.memoId} className="mb-2 flex">
              {editingMemoId === item.memoId ? (
                <input
                  className="w-full rounded border-2 border-primary p-3 focus:outline-none"
                  value={editingContent}
                  onChange={e => setEditingContent(e.target.value)}
                />
              ) : (
                <div className="w-full rounded bg-gray-100 px-3 py-2 text-b2">{item.content}</div>
              )}
              {editingMemoId === item.memoId ? (
                <button className="px-3" onClick={handleModifyMemo}>
                  <span className="text-blue-600">확인</span>
                </button>
              ) : (
                <div className="flex gap-2 rounded bg-gray-100 px-3 py-2">
                  <button onClick={() => startEditingMemo(item.memoId, item.content)}>
                    <EditIcon className="text-green-600" />
                  </button>
                  <button onClick={() => handleDeleteMemo(item.memoId)}>
                    <WasteBasket />
                  </button>
                </div>
              )}
            </div>
          ))}
          <input
            className="w-full rounded border-2 border-primary p-3 placeholder:text-border focus:outline-none"
            value={memo}
            onChange={e => setMemo(e.target.value)}
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
