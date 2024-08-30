import TextWithSubtext from '@/pages/schedule/components/TextWithSubtext.tsx'
import CommonSelect from '@/components/common/CommonSelect.tsx'
import DatePicker from '@/components/common/DatePicker.tsx'
import TimePicker from '@/components/common/TimePicker.tsx'
import { PersonnelOption } from '@/constants/SelectOptions.ts'

interface ScheduleFormSectionProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  setMountainsValue: (value: { key: string; value: string }) => void
  mountainsListOption: Array<{ key: string; value: string }>
  mountainsListError: boolean
  mountainCourseOption: Array<{ key: string; value: string }>
  mountainCourseError: boolean
  setMountainCourseValue: (value: { key: string; value: string }) => void
  setPersonnelValue: (value: { key: string; value: string }) => void
  setHour: (hour: number | null) => void
  setMinute: (minute: number | null) => void
  minute: number | null
  hour: number | null
  modifyData?: any
  mountainId?: string
}

const ScheduleFormSection = ({
  modifyData,
  date,
  setDate,
  setMountainsValue,
  mountainsListOption,
  mountainsListError,
  mountainCourseOption,
  mountainCourseError,
  setMountainCourseValue,
  setPersonnelValue,
  setHour,
  setMinute,
  minute,
  hour,
  mountainId,
}: ScheduleFormSectionProps) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <TextWithSubtext title="어떤 산에 가시나요?" asteriskIcon={true}>
        <CommonSelect
          items={mountainsListOption}
          placeholder={'산을 골라주세요'}
          setSelectedValue={setMountainsValue}
          ariaLabel={'산 선택'}
          isError={mountainsListError}
          modifyData={modifyData?.mountainId || mountainId}
        />
      </TextWithSubtext>
      <TextWithSubtext title="언제 입산하시나요?" subtext="일몰시간을 확인하고 늦지 않게 입산해주세요!">
        <div className="flex gap-2">
          <DatePicker date={date} setDate={setDate} title="날짜" />
          <TimePicker title="시간" hour={hour} minute={minute} setHour={setHour} setMinute={setMinute} />
        </div>
      </TextWithSubtext>
      <TextWithSubtext title="어떤 코스로 가시나요?">
        <CommonSelect
          modifyData={modifyData?.course?.courseNo}
          items={mountainCourseOption}
          placeholder={'코스를 골라주세요'}
          setSelectedValue={setMountainCourseValue}
          ariaLabel={'코스 선택'}
          isError={mountainCourseError}
        />
      </TextWithSubtext>
      <TextWithSubtext title="몇 명의 일행으로 같이 가시나요?">
        <CommonSelect
          modifyData={modifyData?.memberCount}
          items={PersonnelOption}
          placeholder={'인원 수를 선택해주세요'}
          setSelectedValue={setPersonnelValue}
          ariaLabel={'일행 선택'}
        />
      </TextWithSubtext>
    </div>
  )
}

export default ScheduleFormSection
