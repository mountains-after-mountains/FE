import Header from '@/components/common/Header'
import EmptyMntiList from '@/components/home/EmptyMntiList'
import HomeToggleList from '@/components/home/HomeToggleList'
import MountainCard from '@/components/home/MountainCard'
import SearchInput from '@/components/home/SearchInput'
import useMountainsListHome from '@/hooks/useMountainsListHome'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Add from '@/assets/icons/add.svg?react'
import BannerSwiper from '@/components/home/BannerSwiper'

const Home = () => {
  const { data } = useMountainsListHome()
  const [mntiLevel, setMntiLevel] = useState<'1' | '2' | '3'>()
  const navigate = useNavigate()

  const currentData = useMemo(
    () => data?.filter(mountain => (mntiLevel ? mountain.mntiLevel === mntiLevel : true)),
    [mntiLevel, data],
  )

  const mntiNameList = useMemo(() => data?.map(mountain => mountain.mntiName), [data])

  return (
    <>
      <Header selected="home" />
      <div className="relative">
        <section className="relative mx-auto max-w-[500px]">
          <div className="sticky top-[68px] z-40 bg-white">
            <SearchInput mntiNameList={mntiNameList ?? []} />
            <BannerSwiper />
            <HomeToggleList onClickOuter={(level: '1' | '2' | '3' | undefined) => setMntiLevel(level)} />
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

export default Home
