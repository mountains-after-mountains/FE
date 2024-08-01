import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Calendar } from '@/components/ui/calendar.tsx'
import { useState } from 'react'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { format } from 'date-fns'

interface DatePickerProps {
  title: string
  date: Date | undefined
  setDate: (date: Date | undefined) => void
}

const DatePicker = ({ title, date, setDate }: DatePickerProps) => {
  const [open, setOpen] = useState(false)
  const [isDateSelected, setIsDateSelected] = useState(false)

  const handleSelectClick = () => {
    setOpen(false)
    setIsDateSelected(true)
  }

  const buttonText = isDateSelected && date ? format(date, 'MM월 dd일') : title

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="w-auto rounded-[20px]">
        <Calendar mode="single" selected={date} onSelect={setDate} />
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

export default DatePicker
