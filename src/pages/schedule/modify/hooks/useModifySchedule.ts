// src/hooks/useModifySchedule.ts

import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { modifySchedule } from '@/services/api/schedule'
import { format } from 'date-fns'

interface UseModifyScheduleProps {
  scheduleId: string | undefined
  mountainsValue: { key: string; value: string }
  PersonnelValue: { key: string; value: string }
  date: Date | undefined
  hour: number | null
  minute: number | null
  mountainCourseValue: { key: string; value: string }
}

export const useModifySchedule = ({
  scheduleId,
  mountainsValue,
  PersonnelValue,
  date,
  hour,
  minute,
  mountainCourseValue,
}: UseModifyScheduleProps) => {
  const navigate = useNavigate()

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

  return {
    handleModifySchedule,
  }
}
