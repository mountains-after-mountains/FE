import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { registerSchedule } from '@/services/api/schedule'

interface UseRegisterScheduleParams {
  date: Date | undefined
  hour: number | null
  minute: number | null
  mountainsValue: { key: string; value: string }
  mountainCourseValue: { key: string; value: string }
  PersonnelValue: { key: string; value: string }
}

export const useRegisterSchedule = ({
  date,
  hour,
  minute,
  mountainsValue,
  mountainCourseValue,
  PersonnelValue,
}: UseRegisterScheduleParams) => {
  const navigate = useNavigate()

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

  return {
    handleSubmit,
    isSubmitDisabled: !(mountainsValue.value && date),
  }
}
