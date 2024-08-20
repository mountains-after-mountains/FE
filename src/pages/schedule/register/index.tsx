import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'
import useMountainsList from '@/hooks/useMountainsList.ts'
import { useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'
import useMountainCourse from '@/hooks/useMountainCourse.ts'
import { useMutation } from '@tanstack/react-query'
import { registerSchedule } from '@/services/api/schedule'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const RegisterSchedule = () => {
  const [date, setDate] = useState<Date | undefined>()
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const [mountainCourseValue, setMountainCourseValue] = useState({ key: '', value: '' })
  const [PersonnelValue, setPersonnelValue] = useState({ key: '', value: '' })
  const [hour, setHour] = useState<number | null>(null)
  const [minute, setMinute] = useState<number | null>(null)
  const navigate = useNavigate()
  const { data: mountainsListOption, isError: mountainsListError } = useMountainsList()
  const { data: mountainCourseOption, isError: mountainCourseError } = useMountainCourse(
    mountainsValue.value ? mountainsValue.value : null,
  )
  const registerScheduleMutation = useMutation({
    mutationFn: registerSchedule,
    onSuccess: response => {
      if (response && response.id) {
        navigate(`/schedule/detail/${response.id}`)
      } else {
        console.error('No ID found in response')
      }
    },
  })
  console.log(date)

  const handleSubmit = () => {
    const formattedDate = date ? format(date, 'yyyyMMdd') : ''
    const formattedHour = hour !== null ? hour.toString().padStart(2, '0') : '00'
    const formattedMinute = minute !== null ? minute.toString().padStart(2, '0') : '00'
    const scheduleDate = `${formattedDate}${formattedHour}${formattedMinute}`
    const scheduleData = {
      mountainId: mountainsValue.value,
      courseNo: mountainCourseValue.value,
      scheduleDate,
      memberCount: PersonnelValue.value,
    }

    registerScheduleMutation.mutate(scheduleData)
  }
  const isSubmitDisabled = !(mountainsValue.value && date)

  return (
    <div className="flex h-full flex-col">
      <Header title="등산일정 등록" />
      <div className="flex h-[calc(100vh-52px)] flex-col justify-between p-5">
        <ScheduleFormSection
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
        <div>
          <div className="flex justify-center pb-[10px] text-b2 text-subtext">일정은 나중에 수정할 수 있어요.</div>
          <FooterButton onClick={handleSubmit} disabled={isSubmitDisabled}>
            일정 등록하기
          </FooterButton>
        </div>
      </div>
    </div>
  )
}

export default RegisterSchedule
