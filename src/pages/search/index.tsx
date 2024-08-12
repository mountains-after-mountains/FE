import Header from '@/components/common/Header'
import EmptyMntiList from '@/components/home/EmptyMntiList'
import MountainCard from '@/components/home/MountainCard'
import SearchInput from '@/components/home/SearchInput'
import useMountainsListHome from '@/hooks/useMountainsListHome'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Add from '@/assets/icons/add.svg?react'

type Props = {}

const Search = (_: Props) => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const keyword = queryParams.get('keyword')

  const { data } = useMountainsListHome()
  const navigate = useNavigate()

  const currentData = useMemo(
    () => (keyword ? data?.filter(mountain => mountain.mntiName.includes(keyword)) : []),
    [data, keyword],
  )

  const mntiNameList = useMemo(() => data?.map(mountain => mountain.mntiName), [data])

  return (
    <>
      <Header selected="home" />
      <div className="relative">
        <section className="relative mx-auto max-w-[500px]">
          <div className="sticky top-[68px] z-40 bg-white">
            <SearchInput mntiNameList={mntiNameList ?? []} defaultValue={keyword} />
          </div>
          <main className="relative pb-[100px]">
            {(currentData?.length ?? 0) > 0 ? (
              currentData?.map(mountain => <MountainCard key={mountain.mntiName} mountain={mountain} />)
            ) : (
              <EmptyMntiList />
            )}
            <button
              className="fixed bottom-[50px] right-5 flex items-center rounded-3xl bg-green-600 px-5 py-3 text-b1 text-white min-[500px]:right-[calc(50%-250px+20px)]"
              onClick={() => navigate('/schedule/register')}
            >
              <Add />
              일정 추가하기
            </button>
          </main>
        </section>
      </div>
    </>
  )
}

export default Search
