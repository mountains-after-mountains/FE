import { EmblaOptionsType } from 'embla-carousel'
import { TimePickerItem } from '@/pages/schedule/components/TimePickerItem.tsx'

type PropType = {
  loop?: EmblaOptionsType['loop']
  setHour: (hour: number | null) => void
  setMinute: (minute: number | null) => void
}

const CustomTimePicker = (props: PropType) => {
  const { loop, setHour, setMinute } = props

  return (
    <div className="embla">
      <TimePickerItem
        slideCount={24}
        perspective="left"
        loop={loop}
        label="시"
        isMinute={false}
        setHour={setHour}
        setMinute={setMinute}
      />
      <TimePickerItem
        slideCount={12}
        perspective="right"
        loop={loop}
        label="분"
        isMinute={true}
        setHour={setHour}
        setMinute={setMinute}
      />
    </div>
  )
}

export default CustomTimePicker
