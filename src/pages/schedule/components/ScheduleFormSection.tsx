import TextWithSubtext from '@/pages/schedule/components/TextWithSubtext.tsx'
import CommonSelect from '@/components/common/CommonSelect.tsx'
import DatePicker from '@/components/common/DatePicker.tsx'
import TimePicker from '@/components/common/TimePicker.tsx'
import { PersonnelOption } from '@/constants/SelectOptions.ts'
import { useState } from 'react'
import { MountainListResponse } from '@/types/schedule'

interface ScheduleFormSectionProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  setMountainsValue: (value: { key: string; value: string }) => void
  mountainCourseOption: Array<{ key: string; value: string }>
  mountainCourseError: boolean
  setMountainCourseValue: (value: { key: string; value: string }) => void
  setPersonnelValue: (value: { key: string; value: string }) => void
  setHour: (hour: number | null) => void
  setMinute: (minute: number | null) => void
  minute: number | null
  hour: number | null
  searchValue: string
  setSearchValue: (value: string) => void
  mountainsList: MountainListResponse[]
  mountainCourseValue: { key: string; value: string } // 배열이 아닌 단일 값
  PersonnelValue: { key: string; value: string } // 배열이 아닌 단일 값
}

const ScheduleFormSection = ({
  date,
  setDate,
  setMountainsValue,
  mountainCourseOption,
  mountainCourseError,
  mountainCourseValue,
  setMountainCourseValue,
  PersonnelValue,
  setPersonnelValue,
  setHour,
  setMinute,
  minute,
  hour,
  searchValue,
  setSearchValue,
  mountainsList,
}: ScheduleFormSectionProps) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleMountainSelect = (mntiListNo: string, mntiName: string) => {
    setMountainsValue({ key: mntiName, value: mntiListNo })
    setSearchValue(mntiName)
    setShowDropdown(false)
  }
  return (
    <div className="flex flex-col gap-[30px]">
      <TextWithSubtext title="어떤 산에 가시나요?" asteriskIcon={true}>
        <div>
          <input
            className="h-10 w-full rounded-md border border-input px-3 py-2 text-sm focus:border-primary focus:outline-none"
            value={searchValue}
            onChange={e => {
              setSearchValue(e.target.value)
              setShowDropdown(true)
            }}
            placeholder="산 이름을 입력하세요"
          />
          {showDropdown && mountainsList && (
            <ul className="mt-1 max-h-52 overflow-y-auto rounded-md border border-input bg-popover bg-white text-popover-foreground shadow-md">
              {mountainsList.length > 0 ? (
                mountainsList.map((mountain: { mntiListNo: string; mntiName: string }) => (
                  <li
                    key={mountain.mntiListNo}
                    className="cursor-pointer px-4 py-2 text-sm text-popover-foreground hover:bg-accent"
                    onClick={() => handleMountainSelect(mountain.mntiListNo, mountain.mntiName)}
                  >
                    {mountain.mntiName}
                  </li>
                ))
              ) : (
                <li className="p-2">검색 결과가 없습니다.</li>
              )}
            </ul>
          )}
        </div>
      </TextWithSubtext>
      <TextWithSubtext
        title="언제 입산하시나요?"
        subtext="일몰시간을 확인하고 늦지 않게 입산해주세요!"
        asteriskIcon={true}
      >
        <div className="flex gap-2">
          <DatePicker date={date} setDate={setDate} title="날짜" />
          <TimePicker title="시간" hour={hour} minute={minute} setHour={setHour} setMinute={setMinute} />
        </div>
      </TextWithSubtext>
      <TextWithSubtext title="어떤 코스로 가시나요?">
        <CommonSelect
          selectedValue={mountainCourseValue}
          items={mountainCourseOption}
          placeholder={'코스를 골라주세요'}
          setSelectedValue={setMountainCourseValue}
          ariaLabel={'코스 선택'}
          isError={mountainCourseError}
        />
      </TextWithSubtext>
      <TextWithSubtext title="몇 명의 일행으로 같이 가시나요?">
        <CommonSelect
          selectedValue={PersonnelValue}
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
