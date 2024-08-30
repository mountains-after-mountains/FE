import React, { useEffect, useRef, useState } from 'react'

interface CarouselProps {
  onTimeChange: (hour: number, minute: number) => void
  initialTime: { hour: number; minute: number }
}

const hours = Array.from({ length: 24 }, (_, i) => i)
const minutes = Array.from({ length: 60 }, (_, i) => i)

const CustomCarousel: React.FC<CarouselProps> = ({ onTimeChange, initialTime }) => {
  const [selectedHour, setSelectedHour] = useState(initialTime.hour)
  const [selectedMinute, setSelectedMinute] = useState(initialTime.minute)

  const hourRef = useRef<HTMLDivElement>(null)
  const minuteRef = useRef<HTMLDivElement>(null)

  const centerItem = (element: HTMLDivElement) => {
    const scrollTop = element.scrollTop
    const itemHeight = element.firstChild ? (element.firstChild as HTMLDivElement).offsetHeight : 0
    const selectedIndex = Math.round(scrollTop / itemHeight)
    return selectedIndex
  }

  useEffect(() => {
    if (hourRef.current) {
      hourRef.current.scrollTop = selectedHour * (hourRef.current.firstChild as HTMLDivElement).offsetHeight
    }
    if (minuteRef.current) {
      minuteRef.current.scrollTop = selectedMinute * (minuteRef.current.firstChild as HTMLDivElement).offsetHeight
    }
  }, [selectedHour, selectedMinute])

  const handleHourScroll = () => {
    if (hourRef.current) {
      const index = centerItem(hourRef.current)
      setSelectedHour(index)
      onTimeChange(index, selectedMinute)
    }
  }

  const handleMinuteScroll = () => {
    if (minuteRef.current) {
      const index = centerItem(minuteRef.current)
      setSelectedMinute(index)
      onTimeChange(selectedHour, index)
    }
  }

  return (
    <div className="flex h-[218px]">
      <div
        ref={hourRef}
        onScroll={handleHourScroll}
        className="scrollbar-hide flex flex-col items-center gap-[2px] overflow-y-auto scroll-smooth p-[5px]"
      >
        {hours.map(hour => (
          <div key={hour} className={`px-9 py-1 text-b2 ${hour === selectedHour ? 'rounded-[20px] bg-gray-200' : ''}`}>
            {hour}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-b2">시</div>
      <div
        ref={minuteRef}
        onScroll={handleMinuteScroll}
        className="scrollbar-hide flex flex-col items-center gap-[2px] overflow-y-auto scroll-smooth p-[5px]"
      >
        {minutes.map(minute => (
          <div
            key={minute}
            className={`px-9 py-1 text-b2 ${minute === selectedMinute ? 'rounded-[20px] bg-gray-200' : ''}`}
          >
            {minute}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-b2">분</div>
    </div>
  )
}

export default CustomCarousel
