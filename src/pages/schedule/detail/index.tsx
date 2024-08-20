import MemoDescription from '@/pages/schedule/detail/components/MemoDescription.tsx'
import MemoDrawer from '@/pages/schedule/detail/components/MemoDrawer.tsx'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { checkMemo, getDetailSchedule, getMemoList, registerMemo } from '@/services/api/schedule'
import { useNavigate, useParams } from 'react-router-dom'
import { WeatherGroup } from '@/components/common/Weather.tsx'
import DetailCourse from '@/pages/schedule/detail/components/DetailCourse.tsx'
import DetailTop from '@/pages/schedule/detail/components/DetailTop.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { useState } from 'react'
import { MemoItem } from '@/types/schedule'

const DetailSchedule = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const [memo, setMemo] = useState('')

  const memoRegisterMutaion = useMutation({
    mutationFn: registerMemo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memoList'] })
    },
  })

  const memoCheckMutaion = useMutation({
    mutationFn: checkMemo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memoList'] })
    },
  })

  const { data } = useQuery({
    queryKey: ['detailSchedule', scheduleId],
    queryFn: () => getDetailSchedule(scheduleId || ''),
    refetchOnWindowFocus: false,
    enabled: !!scheduleId,
  })

  const { data: memoListData } = useQuery({
    queryKey: ['memoList', scheduleId],
    queryFn: () => getMemoList(scheduleId),
    refetchOnWindowFocus: false,
    enabled: !!scheduleId,
  })

  const handleRegisterMemo = () => {
    if (!memo.trim()) return

    const payload = {
      scheduleId,
      memoRequest: [
        {
          text: memo,
          checked: false,
        },
      ],
    }
    memoRegisterMutaion.mutate(payload)
    setMemo('')
  }

  const handleCheckboxChange = (memoId: string) => {
    memoCheckMutaion.mutate(memoId)
  }

  return (
    <div className="flex flex-col gap-2 bg-background">
      <DetailTop data={data} />
      <DetailCourse data={data} />
      <div className="bg-white p-5">
        <span className="text-h5 text-gray-900">날씨</span>
        <WeatherGroup weathers={data?.weatherList} className="mt-[10px]" />
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="text-h5">메모장</div>
          <MemoDrawer
            memoList={memoListData || []}
            memo={memo}
            setMemo={setMemo}
            handleRegisterMemo={handleRegisterMemo}
          />
        </div>
        <div className="pb-24 pt-4">
          {memoListData?.length > 0 ? (
            <div>
              {memoListData.map((item: MemoItem) => (
                <div key={item.memoId} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.checkStatus}
                    onChange={() => handleCheckboxChange(item.memoId)}
                  />
                  <span>{item.content}</span>
                </div>
              ))}
            </div>
          ) : (
            <MemoDescription />
          )}
        </div>
      </div>
      <div className="fixed bottom-5 mx-5 w-[calc(100%-40px)] max-w-[460px]">
        <FooterButton onClick={() => navigate(`/invitation/make/${scheduleId}`)}>초대장 만들기</FooterButton>
      </div>
    </div>
  )
}

export default DetailSchedule
