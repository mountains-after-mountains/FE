import Mountains from '@/assets/icons/mountains.svg?react'
import SearchCommandList from './SearchCommandList'
import { ChangeEvent, useEffect, useState } from 'react'
import { debounce } from 'lodash'

// 임시 데이터, 타입은 추후에 api에 적혀있는 대로 수정
const data = [
  { id: 0, name: '청계산' },
  { id: 1, name: '북한산' },
  { id: 2, name: '청운산' },
  { id: 3, name: '청산' },
]

const SearchInput = () => {
  const [value, setValue] = useState<string>('')
  const [filteredData, setFilteredData] = useState<{ id: number; name: string }[] | []>([])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  useEffect(() => {
    const debouncedFilter = debounce((inputValue: string) => {
      if (inputValue.length) {
        setFilteredData(data.filter(item => item.name.includes(inputValue)))
      } else {
        setFilteredData([])
      }
    }, 500)

    debouncedFilter(value)

    return () => {
      debouncedFilter.cancel()
    }
  }, [value])

  return (
    <div className="relative p-5 pt-0">
      <div className="box-border flex gap-3 rounded-[40px] px-3 py-[5px] align-middle shadow-[0_1px_10px_rgba(0,0,0,0.1)]">
        <Mountains width={34} height={34} />
        <input className="w-full text-b2 focus:outline-none" value={value} onChange={onChange} />
      </div>
      <SearchCommandList data={filteredData} />
    </div>
  )
}

export default SearchInput
