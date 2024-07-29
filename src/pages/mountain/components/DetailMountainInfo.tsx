import MountainInfo from '@/components/common/MountainInfo'
import Top100Badge from '@/components/common/Top100Badge'
import { useNavigate } from 'react-router-dom'

const mountain = {
  name: '북한산',
  address: '서울시 성북구 정릉동',
  altitude: 338,
  rates: 2,
  img: 'https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=56531&fileTy=MEDIA&fileNo=1',
  isTop100: true,
  park: {
    name: '북한산국립공원',
    link: 'https://www.knps.or.kr/',
  },
}

const DetailMountainInfo = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div>
      <img src={mountain.img} className="mb-5 h-[246px] w-full" onClick={goBack} />
      <div className="px-5">
        {mountain.isTop100 && <Top100Badge className="inline-flex" />}
        <MountainInfo mountain={mountain} />
        <a
          className="text-b3 text-gray-700 underline"
          href={mountain.park.link}
          target="_blank"
        >{`${mountain.park.name} >`}</a>
      </div>
    </div>
  )
}

export default DetailMountainInfo
