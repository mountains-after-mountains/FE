import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectOptionType {
  key: string
  value: string
}

interface SelectBoxProps {
  items: SelectOptionType[]
  placeholder: string
  setSelectedValue: (selection: { key: string; value: string }) => void
  isError?: boolean
  ariaLabel: string
  modifyData?: string
}

const CommonSelect = ({ modifyData, items, placeholder, setSelectedValue, isError, ariaLabel }: SelectBoxProps) => {
  const [selectedValue, setSelectedValueState] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (modifyData) {
      setSelectedValueState(modifyData.toString())
    }
  }, [modifyData])

  const handleValueChange = (value: string) => {
    const item = items.find(item => item.value === value)
    if (item) {
      setSelectedValue({ key: item.key, value: item.value })
      setSelectedValueState(value)
    }
  }

  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className="rounded-xl bg-white" aria-label={ariaLabel}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {isError ? (
          <>불러오지 못했습니다.</>
        ) : Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => (
            <SelectItem key={item.key} value={item.value || `invalid-${index}`}>
              {item.key}
            </SelectItem>
          ))
        ) : (
          <>선택 옵션이 없습니다.</>
        )}
      </SelectContent>
    </Select>
  )
}

export default CommonSelect
