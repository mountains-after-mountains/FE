import Header from '@/components/common/Header'
import EmptyMntiList from '@/components/home/EmptyMntiList'
import HomeToggleList from '@/components/home/HomeToggleList'
import MountainCard from '@/components/home/MountainCard'
import SearchInput from '@/components/home/SearchInput'
import useMountainsListHome from '@/hooks/useMountainsListHome'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Add from '@/assets/icons/add.svg?react'
import BannerSwiper from '@/components/home/BannerSwiper'
import useScrollStore from '@/store/useScrollStore'
import clsx from 'clsx'
import LoadingSpinner from '@/components/common/Spinner.tsx'

const Home = () => {
  const { data, isLoading } = useMountainsListHome()
  const navigate = useNavigate()
  const params = useParams()

  const { scrollToTop, scrollY } = useScrollStore()

  const currentData = useMemo(
    () => data?.filter(mountain => (params.id ? mountain.mntiLevel == params.id : true)),
    [params?.id, data],
  )
  const mntiNameList = useMemo(() => data?.map(mountain => mountain.mntiName), [data])

  return (
    <>
      <Header selected="home" />
      <div className="relative">
        {isLoading && <LoadingSpinner />}
        <section className="relative mx-auto max-w-[550px]">
          <div className="sticky top-[68px] z-40 bg-white">
            <SearchInput mntiNameList={mntiNameList ?? []} />
            <BannerSwiper
              className={clsx(
                'overflow-hidden transition-all duration-500 ease-linear',
                scrollY > 0 ? 'max-h-0 opacity-0' : 'max-h-[500px] opacity-100',
              )}
            />
            <HomeToggleList scrollToTop={scrollToTop} id={params.id} />
          </div>
          <div className="relative pb-[100px]">
            {(currentData?.length ?? 0) > 0 ? (
              currentData?.map(mountain => <MountainCard key={mountain.mntiName} mountain={mountain} />)
            ) : (
              <EmptyMntiList />
            )}
            <button
              className="fixed bottom-[50px] right-5 flex items-center rounded-3xl bg-green-600 px-5 py-3 text-b1 text-white min-[550px]:right-[calc(50%-275px+20px)] min-[1024px]:right-[calc((100%-550px)*0.21+20px)]"
              onClick={() => navigate('/schedule/register')}
            >
              <Add />
              일정 추가하기
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
