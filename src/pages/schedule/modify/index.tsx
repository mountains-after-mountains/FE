import useMountainsList from '@/hooks/useMountainsList.ts'
import { useEffect, useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'
import { useQuery } from '@tanstack/react-query'
import { getDetailSchedule } from '@/services/api/schedule'
import { useParams } from 'react-router-dom'
import useMountainCourse from '@/hooks/useMountainCourse.ts'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import HeaderWithDrawer from '@/pages/schedule/modify/components/HeaderWithDrawer.tsx'

const ModifySchedule = () => {
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const [, setMountainCourseValue] = useState({ key: '', value: '' })
  const [, setPersonnelValue] = useState({ key: '', value: '' })
  const { data: mountainsListOption, isError: mountainsListError } = useMountainsList()
  const { data } = useQuery({
    queryKey: ['detailSchedule', scheduleId],
    queryFn: () => getDetailSchedule(scheduleId || ''),
    refetchOnWindowFocus: false,
    enabled: !!scheduleId,
  })
  const { data: mountainCourseOption, isError: mountainCourseError } = useMountainCourse(
    mountainsValue.value ? mountainsValue.value : data?.mountainId,
  )
  const [, setHour] = useState<number | null>(null)
  const [minute, setMinute] = useState<number | null>(null)
  const [date, setDate] = useState<Date | undefined>()
  useEffect(() => {
    if (data) {
      setDate(data.scheduleDate)
    }
  }, [data])
  return (
    <div className="flex h-full flex-col">
      {scheduleId && <HeaderWithDrawer scheduleId={scheduleId} />}
      <div className="flex h-full flex-col p-5">
        <ScheduleFormSection
          modifyData={data}
          date={date}
          setDate={setDate}
          mountainsListOption={mountainsListOption}
          mountainsListError={mountainsListError}
          setMountainsValue={setMountainsValue}
          mountainCourseOption={mountainCourseOption}
          mountainCourseError={mountainCourseError}
          setMountainCourseValue={setMountainCourseValue}
          setPersonnelValue={setPersonnelValue}
          setHour={setHour}
          setMinute={setMinute}
          hour={minute}
          minute={minute}
        />
      </div>
      <div className="fixed bottom-5 mx-5 w-[calc(100%-40px)] max-w-[460px]">
        <FooterButton>일정 수정하기</FooterButton>
      </div>
    </div>
  )
}

export default ModifySchedule
