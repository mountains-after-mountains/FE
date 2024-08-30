import MemoDescription from '@/pages/schedule/detail/components/MemoDescription.tsx'
import MemoDrawer from '@/pages/schedule/detail/components/MemoDrawer.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { WeatherGroup } from '@/components/common/Weather.tsx'
import DetailCourse from '@/pages/schedule/detail/components/DetailCourse.tsx'
import DetailTop from '@/pages/schedule/detail/components/DetailTop.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { useState } from 'react'
import { MemoItem } from '@/types/schedule'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import { useDetailSchedule } from '@/hooks/useDetailSchedule.ts'
import { useMemoList } from '@/pages/schedule/detail/hooks/useMemoList.ts'
import CheckMemoItem from '@/pages/schedule/detail/components/CheckMemoItem.tsx'

const DetailSchedule = () => {
  const navigate = useNavigate()
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const [memo, setMemo] = useState('')

  const { data, isFetching } = useDetailSchedule(scheduleId)
  const { memoListData, handleRegisterMemo, handleCheckboxChange } = useMemoList(scheduleId)

  const handleCreateInvitation = () => {
    if (scheduleId) {
      navigate(`/invitation/make/${scheduleId}`)
    }
  }

  return (
    <div className="flex flex-col gap-2 bg-background">
      {isFetching && <LoadingSpinner />}
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
            handleRegisterMemo={() => {
              handleRegisterMemo(memo)
              setMemo('')
            }}
          />
        </div>
        <div className="pb-24 pt-4">
          {memoListData?.length > 0 ? (
            <div>
              {memoListData.map((item: MemoItem) => (
                <CheckMemoItem key={item.memoId} item={item} onCheckboxChange={handleCheckboxChange} />
              ))}
            </div>
          ) : (
            <MemoDescription />
          )}
        </div>
      </div>
      <div className="fixed bottom-5 w-[calc(%-40px)] max-w-[460px] px-5">
        <FooterButton onClick={handleCreateInvitation}>초대장 만들기</FooterButton>
      </div>
    </div>
  )
}

export default DetailSchedule
