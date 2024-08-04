import FooterButton from '@/components/common/button/FooterButton'
import HomeBanner from '@/components/home/HomeBanner'
import HomeToggleList from '@/components/home/HomeToggleList'
import MountainCard from '@/components/home/MountainCard'
import SearchInput from '@/components/home/SearchInput'
import useMountainsList from '@/hooks/useMountainsList'
import { useNavigate } from 'react-router-dom'

const mountain = {
  name: '북한산',
  address: '서울시 성북구 정릉동',
  altitude: 338,
  rates: 2,
  img: 'https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=56531&fileTy=MEDIA&fileNo=1',
  isTop100: true,
}

const Home = () => {
  const navigate = useNavigate()
  const { data } = useMountainsList()

  console.log(data)

  return (
    <section>
      <div className="sticky top-0 z-40 bg-white">
        <SearchInput />
        <HomeBanner />
        <HomeToggleList />
      </div>
      <main className="pb-[100px]">
        {data.map(mountain => (
          <MountainCard key={mountain.value} mountain={{ name: mountain.key, id: mountain.value }} />
        ))}
      </main>
      <div className="fixed bottom-5 mx-5 w-[calc(100%-40px)] max-w-[460px]">
        <FooterButton>일정 추가하기</FooterButton>
      </div>
    </section>
  )
}

export default Home
