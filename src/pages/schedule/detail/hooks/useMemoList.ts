import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { checkMemo, getMemoList, registerMemo } from '@/services/api/schedule'
import { MemoItem } from '@/types/schedule'

export const useMemoList = (scheduleId: string | undefined) => {
  const queryClient = useQueryClient()

  const { data: memoListData, isFetching: memoListLoading } = useQuery({
    queryKey: ['memoList', scheduleId],
    queryFn: () => getMemoList(scheduleId),
    refetchOnWindowFocus: false,
    enabled: !!scheduleId,
  })

  const registerMemoMutation = useMutation({
    mutationFn: registerMemo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memoList'] })
    },
  })

  const checkMemoMutation = useMutation({
    mutationFn: checkMemo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memoList'] })
    },
  })

  const handleRegisterMemo = (memo: string) => {
    if (!memo.trim() || !scheduleId) return

    const isDuplicate = memoListData?.some((item: MemoItem) => item.content === memo.trim())
    if (isDuplicate) {
      alert('이미 동일한 내용의 메모가 존재합니다.')
      return
    }

    const payload = {
      scheduleId,
      memoRequest: [
        {
          text: memo,
          checked: false,
        },
      ],
    }
    registerMemoMutation.mutate(payload)
  }

  const handleCheckboxChange = (memoId: string) => {
    checkMemoMutation.mutate(memoId)
  }

  return {
    memoListLoading,
    memoListData,
    handleRegisterMemo,
    handleCheckboxChange,
  }
}
