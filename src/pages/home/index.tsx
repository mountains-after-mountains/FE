import FooterButton from '@/components/common/button/FooterButton'
import EmptyMntiList from '@/components/home/EmptyMntiList'
import HomeBanner from '@/components/home/HomeBanner'
import HomeToggleList from '@/components/home/HomeToggleList'
import MountainCard from '@/components/home/MountainCard'
import SearchInput from '@/components/home/SearchInput'
import useMountainsListHome from '@/hooks/useMountainsListHome'
import { useMemo, useState } from 'react'

const Home = () => {
  const [mntiLevel, setMntiLevel] = useState<'1' | '2' | '3'>()
  const { data } = useMountainsListHome()

  const currentData = useMemo(
    () => data?.filter(mountain => (mntiLevel ? mountain.mntiLevel === mntiLevel : true)),
    [mntiLevel, data],
  )

  return (
    <section>
      <div className="sticky top-0 z-40 bg-white">
        <SearchInput />
        <HomeBanner />
        <HomeToggleList onClickOuter={(level: '1' | '2' | '3' | undefined) => setMntiLevel(level)} />
      </div>
      <main className="pb-[100px]">
        {(currentData?.length ?? 0) > 0 ? (
          currentData?.map(mountain => <MountainCard key={mountain.mntiName} mountain={mountain} />)
        ) : (
          <EmptyMntiList />
        )}
      </main>
      <div className="fixed bottom-5 mx-5 w-[calc(100%-40px)] max-w-[460px]">
        <FooterButton>일정 추가하기</FooterButton>
      </div>
    </section>
  )
}

export default Home
