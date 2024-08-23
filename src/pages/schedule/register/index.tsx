import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'
import useMountainsList from '@/hooks/useMountainsList.ts'
import { useEffect, useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'
import useMountainCourse from '@/hooks/useMountainCourse.ts'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import { useRegisterSchedule } from '@/pages/schedule/register/hooks/useRegisterSchedule.ts'

const RegisterSchedule = () => {
  const { mountainId } = useParams()
  const [date, setDate] = useState<Date | undefined>()
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const [mountainCourseValue, setMountainCourseValue] = useState({ key: '', value: '' })
  const [PersonnelValue, setPersonnelValue] = useState({ key: '', value: '' })
  const [hour, setHour] = useState<number | null>(null)
  const [minute, setMinute] = useState<number | null>(null)
  const {
    data: mountainsListOption,
    isError: mountainsListError,
    isFetching: mountainsListLoading,
  } = useMountainsList()

  const { data: mountainCourseOption, isError: mountainCourseError } = useMountainCourse(
    mountainsValue.value ? mountainsValue.value : null,
  )

  const { handleSubmit, isSubmitDisabled } = useRegisterSchedule({
    date,
    hour,
    minute,
    mountainsValue,
    mountainCourseValue,
    PersonnelValue,
  })

  useEffect(() => {
    if (mountainId) {
      setMountainsValue({ key: '', value: mountainId })
    }
  }, [mountainId])

  return (
    <div className="flex h-full flex-col">
      {mountainsListLoading && <LoadingSpinner />}
      <Header title="등산일정 등록" />
      <div className="flex h-[calc(100vh-52px)] flex-col justify-between p-5">
        <ScheduleFormSection
          mountainId={mountainId}
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
