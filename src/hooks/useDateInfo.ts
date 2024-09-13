import { useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

const useDateInfo = (dateString: string) => {
  const dateInfo = useMemo(() => {
    if (!dateString) {
      return { formattedDate: '', formattedTime: '', dDayText: '' }
    }

    try {
      const targetDate = parseISO(dateString)
      const now = new Date()

      const formattedDate = format(targetDate, 'M월 d일(E)', { locale: ko })
      const formattedTime = format(targetDate, 'a h시 mm분', { locale: ko })

      const differenceInMs = targetDate.getTime() - now.getTime()
      const dDay = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24))

      const dDayText = dDay > 0 ? `D-${dDay}` : dDay === 0 ? 'D-day' : `D+${Math.abs(dDay)}`

      return { formattedDate, formattedTime, dDayText }
    } catch (error) {
      console.error(error)
      return { formattedDate: 'Invalid Date', formattedTime: 'Invalid Time', dDayText: 'Invalid D-day' }
    }
  }, [dateString])

  return dateInfo
}

export default useDateInfo
