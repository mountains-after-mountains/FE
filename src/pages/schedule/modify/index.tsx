import useMountainsList from '@/hooks/useMountainsList.ts'
import { useEffect, useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'
import { useMutation } from '@tanstack/react-query'
import { modifySchedule } from '@/services/api/schedule'
import { useNavigate, useParams } from 'react-router-dom'
import useMountainCourse from '@/hooks/useMountainCourse.ts'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import HeaderWithDrawer from '@/pages/schedule/modify/components/HeaderWithDrawer.tsx'
import { format } from 'date-fns'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import { useDetailSchedule } from '@/hooks/useDetailSchedule.ts'

const ModifySchedule = () => {
  const navigate = useNavigate()
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const [mountainCourseValue, setMountainCourseValue] = useState({ key: '', value: '' })
  const [PersonnelValue, setPersonnelValue] = useState({ key: '', value: '' })
  const [hour, setHour] = useState<number | null>(null)
  const [minute, setMinute] = useState<number | null>(null)
  const [date, setDate] = useState<Date | undefined>()

  const { data: mountainsListOption, isError: mountainsListError } = useMountainsList()
  const { data, isFetching } = useDetailSchedule(scheduleId)
  const { data: mountainCourseOption, isError: mountainCourseError } = useMountainCourse(
    mountainsValue.value ? mountainsValue.value : data?.mountainId,
  )

  useEffect(() => {
    if (data) {
      setMountainsValue({ key: '', value: data.mountainId })
      setMountainCourseValue({ key: '', value: data.course.courseNo })
      setPersonnelValue({ key: '', value: data.memberCount })
      setDate(data.scheduleDate)

      const dateObj = new Date(data.scheduleDate)
      setHour(dateObj.getHours())
      setMinute(dateObj.getMinutes())
    }
  }, [data])

  const modifyScheduleMutation = useMutation({
    mutationFn: modifySchedule,
  })

  const handleModifySchedule = () => {
    const formattedDate = date ? format(date, 'yyyyMMdd') : ''
    const formattedHour = hour !== null ? hour.toString().padStart(2, '0') : '00'
    const formattedMinute = minute !== null ? minute.toString().padStart(2, '0') : '00'
    const scheduleDate = `${formattedDate}${formattedHour}${formattedMinute}`
    const payload = {
      scheduleId: scheduleId,
      mountainId: mountainsValue.value,
      memberCount: PersonnelValue.value,
      scheduleDate: scheduleDate,
      course: mountainCourseValue.value,
    }
    modifyScheduleMutation.mutate(payload, {
      onSuccess: () => navigate('/schedule'),
    })
  }

  return (
    <div className="flex h-full flex-col">
      {isFetching && <LoadingSpinner />}
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
          hour={hour}
          minute={minute}
        />
      </div>
      <div className="fixed bottom-5 w-[calc(100%-40px)] max-w-[460px] px-5">
        <FooterButton onClick={handleModifySchedule}>일정 수정하기</FooterButton>
      </div>
    </div>
  )
}

export default ModifySchedule
