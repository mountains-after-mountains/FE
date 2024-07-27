export const formatTimestampToMMDD = (timestamp: string): string => {
  const date = new Date(timestamp)

  let month = date.getMonth() + 1
  let day = date.getDate()

  // month와 day가 10보다 작으면 앞에 0을 붙이지 않고 그대로 반환합니다.
  const formattedMonth = month.toString()
  const formattedDay = day.toString()

  return `${formattedMonth}.${formattedDay}`
}
