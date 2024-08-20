import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import CustomTimePicker from '@/pages/schedule/components/CustomTimePicker.tsx'
import '@/pages/schedule/components/embla.css'
import { useState } from 'react'

interface TimePickerProps {
  title: string
  setHour: (hour: number | null) => void
  setMinute: (minute: number | null) => void
  hour: number | null
  minute: number | null
}

const TimePicker = ({ title, setHour, setMinute, hour, minute }: TimePickerProps) => {
  const [open, setOpen] = useState(false)
  const [isTimeSelected, setIsTimeSelected] = useState(false)

  const handleSelectClick = () => {
    setOpen(false)
    setIsTimeSelected(true)

    if (hour === null) setHour(0)
    if (minute === null) setMinute(0)
  }

  const formatTime = (hour: number, minute: number) => {
    const formattedHour = hour.toString().padStart(2, '0')
    const formattedMinute = minute.toString().padStart(2, '0')
    return `${formattedHour}시 ${formattedMinute}분`
  }

  const buttonText = isTimeSelected && hour !== null && minute !== null ? formatTime(hour, minute) : title
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="w-auto rounded-[20px]">
        <div className="flex items-center justify-center">
          <CustomTimePicker setHour={setHour} setMinute={setMinute} />
        </div>
        <DialogFooter className="gap-4">
          <DialogClose asChild>
            <FooterButton size="sm" variant="surface">
              취소
            </FooterButton>
          </DialogClose>
          <FooterButton size="sm" onClick={handleSelectClick}>
            선택
          </FooterButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TimePicker
