import Mountains from '@/assets/icons/mountains.svg?react'
import SearchCommandList from './SearchCommandList'
import { ChangeEvent, useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { useLocation, useNavigate } from 'react-router-dom'

const SearchInput = ({ mntiNameList, defaultValue }: { mntiNameList: string[]; defaultValue?: string | null }) => {
  const [value, setValue] = useState<string>(defaultValue ?? '')
  const [filteredData, setFilteredData] = useState<string[] | []>([])
  const [showCommand, setShowCommand] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

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
    setShowCommand(true)

    return () => {
      debouncedFilter.cancel()
    }
  }, [value, mntiNameList])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (value == '') {
      navigate(`/`)
    } else {
      e.preventDefault()
      setShowCommand(false)
      navigate(`/search?keyword=${value}`)
    }
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const keyword = queryParams.get('keyword')
    if (keyword) {
      setValue(keyword)
      setShowCommand(false)
    }
  }, [location.search])

  return (
    <form className="relative p-5 pt-0" onSubmit={handleSubmit}>
      <div className="box-border flex gap-3 rounded-[40px] px-3 py-[5px] align-middle shadow-[0_1px_10px_rgba(0,0,0,0.1)]">
        <Mountains width={34} height={34} />
        <input
          placeholder="산 이름으로 검색해주세요."
          className="w-full text-b2 focus:outline-none"
          value={value}
          onChange={onChange}
        />
      </div>
      {showCommand && (
        <SearchCommandList
          data={filteredData}
          onClick={(keyword: string) => {
            setValue(keyword)
            navigate(`/search?keyword=${keyword}`)
          }}
        />
      )}
    </form>
  )
}

export default SearchInput
