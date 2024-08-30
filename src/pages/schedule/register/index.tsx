import FooterButton from '@/components/common/button/FooterButton'
import useMountainsList from '@/hooks/useMountainsList.ts'
import { useEffect, useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'
import useMountainCourse from '@/hooks/useMountainCourse.ts'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import { useRegisterSchedule } from '@/pages/schedule/register/hooks/useRegisterSchedule.ts'
import HeaderWithDrawer from '@/pages/schedule/modify/components/HeaderWithDrawer.tsx'

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
      <HeaderWithDrawer
        title="등산일정 등록"
        backDrawerTitle="등록하지 않고 나가시겠어요?"
        message="아직 등록되지 않았어요."
        continueButtonLabel="이어서 등록하기"
      />
      <div className="flex h-full flex-col p-5">
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
      </div>
      <div className="fixed bottom-5 w-[calc(100%-40px)] max-w-[460px] px-5">
        <div className="flex justify-center pb-[10px] text-b2 text-subtext">일정은 나중에 수정할 수 있어요.</div>
        <FooterButton onClick={handleSubmit} disabled={isSubmitDisabled}>
          일정 등록하기
        </FooterButton>
      </div>
    </div>
  )
}

export default RegisterSchedule
