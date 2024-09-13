import { useEffect, useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'
import { useParams } from 'react-router-dom'
import useMountainCourse from '@/hooks/useMountainCourse.ts'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import HeaderWithDrawer from '@/pages/schedule/modify/components/HeaderWithDrawer.tsx'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import { useDetailSchedule } from '@/hooks/useDetailSchedule.ts'
import { useModifySchedule } from '@/pages/schedule/modify/hooks/useModifySchedule.ts'
import { useQuery } from '@tanstack/react-query'
import { getMountainsList } from '@/services/api/schedule'

const ModifySchedule = () => {
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const [mountainCourseValue, setMountainCourseValue] = useState({ key: '', value: '' })
  const [PersonnelValue, setPersonnelValue] = useState({ key: '', value: '' })
  const [hour, setHour] = useState<number | null>(null)
  const [minute, setMinute] = useState<number | null>(null)
  const [date, setDate] = useState<Date | undefined>()
  const [searchValue, setSearchValue] = useState('')
  const [skipMountainsEffect, setSkipMountainsEffect] = useState(true)

  const { data: mountainsList } = useQuery({
    queryKey: ['getMountainsList', searchValue],
    queryFn: () => getMountainsList(searchValue),
    refetchOnWindowFocus: false,
  })

  const { data, isFetching } = useDetailSchedule(scheduleId)
  const {
    data: mountainCourseOption,
    isError: mountainCourseError,
    isFetching: mountainCourseLoading,
  } = useMountainCourse(mountainsValue.value ? mountainsValue.value : data?.mountainId)

  useEffect(() => {
    if (data) {
      setMountainsValue({ key: '', value: data.mountainId })
      setMountainCourseValue({ key: '', value: data.course.courseNo })
      setPersonnelValue({ key: '', value: String(data.memberCount) })
      setDate(data.scheduleDate)
      setSearchValue(data.mountainName)
      const dateObj = new Date(data.scheduleDate)
      setHour(dateObj.getHours())
      setMinute(dateObj.getMinutes())
      setSkipMountainsEffect(false)
    }
  }, [data])

  useEffect(() => {
    if (!skipMountainsEffect && mountainsValue.key !== '') {
      setMountainCourseValue({ key: '', value: '' })
    }
  }, [mountainsValue])

  const { handleModifySchedule } = useModifySchedule({
    scheduleId,
    mountainsValue,
    PersonnelValue,
    date,
    hour,
    minute,
    mountainCourseValue,
  })

  return (
    <div className="flex h-full flex-col">
      {(isFetching || mountainCourseLoading) && <LoadingSpinner />}
      {scheduleId && <HeaderWithDrawer title="등산일정 수정" scheduleId={scheduleId} />}
      <div className="flex h-full flex-col p-5">
        <ScheduleFormSection
          date={date}
          setDate={setDate}
          setMountainsValue={setMountainsValue}
          mountainCourseOption={mountainCourseOption}
          mountainCourseError={mountainCourseError}
          mountainCourseValue={mountainCourseValue}
          setMountainCourseValue={setMountainCourseValue}
          PersonnelValue={PersonnelValue}
          setPersonnelValue={setPersonnelValue}
          setHour={setHour}
          setMinute={setMinute}
          hour={hour}
          minute={minute}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          mountainsList={mountainsList || []}
        />
      </div>
      <div className="fixed bottom-5 w-[calc(100%-40px)] max-w-[460px] px-5">
        <FooterButton onClick={handleModifySchedule}>일정 수정하기</FooterButton>
      </div>
    </div>
  )
}

export default ModifySchedule
