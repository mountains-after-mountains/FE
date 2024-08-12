import Mountains from '@/assets/icons/mountains.svg?react'
import SearchCommandList from './SearchCommandList'
import { ChangeEvent, useEffect, useState } from 'react'
import { debounce } from 'lodash'

const SearchInput = ({ mntiNameList }: { mntiNameList: string[] }) => {
  const [value, setValue] = useState<string>('')
  const [filteredData, setFilteredData] = useState<string[] | []>([])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  useEffect(() => {
    const debouncedFilter = debounce((inputValue: string) => {
      if (inputValue.length) {
        const temp = mntiNameList.filter(item => item.includes(inputValue)).slice(0, 3)
        setFilteredData(temp)
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
