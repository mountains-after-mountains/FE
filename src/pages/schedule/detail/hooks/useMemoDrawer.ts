import { useRef, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteMemo, modifyMemo } from '@/services/api/schedule'
import { MemoItem } from '@/types/schedule'

export const useMemoDrawer = (memoList: MemoItem[], handleRegisterMemo: () => void) => {
  const [editingMemoId, setEditingMemoId] = useState<string | null>(null)
  const [editingContent, setEditingContent] = useState('')

  const isComposing = useRef(false) // 조합 중 여부를 확인하는 플래그 Mac에서 엔터 누르면 두번 이벤트 발생 때문에 추가

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
    if (!editingMemoId || !editingContent.trim()) return

    const isDuplicate = memoList.some(item => item.content === editingContent.trim() && item.memoId !== editingMemoId)
    if (isDuplicate) {
      alert('이미 동일한 내용의 메모가 존재합니다.')
      return
    }
    modifyMemoMutation.mutate({
      memoId: editingMemoId,
      memoContent: editingContent,
    })
    resetEditingState()
  }

  const handleDeleteMemo = (memoId: string) => {
    deleteMemoMutation.mutate(memoId)
  }

  const startEditingMemo = (memoId: string, content: string) => {
    setEditingMemoId(memoId)
    setEditingContent(content)
  }

  const resetEditingState = () => {
    setEditingMemoId(null)
    setEditingContent('')
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleRegisterMemo()
    }
  }

  return {
    editingMemoId,
    editingContent,
    handleModifyMemo,
    handleDeleteMemo,
    startEditingMemo,
    setEditingContent,
    handleKeyDown,
    handleCompositionStart: () => (isComposing.current = true),
    handleCompositionEnd: () => (isComposing.current = false),
  }
}
