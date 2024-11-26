import { useNavigate } from 'react-router-dom'
import MountainInfo from '../common/MountainInfo'
import { MountainListResponse } from '@/types/schedule'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'
import Top100Badge from '@/components/common/Top100Badge.tsx'
import SeoulTrailBadge from '@/components/common/SeoulTrailBadge.tsx'
import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton.tsx'

const MountainCard = ({ mountain }: { mountain?: MountainListResponse }) => {
  const navigation = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const onClick = () => navigation(`/mountain/${mountain?.mntiListNo}`)

  return (
    <div className="my-[14px] box-border cursor-pointer px-5" onClick={onClick}>
      <div className="relative h-[200px]">
        <div className="absolute right-3 top-3 z-10 flex gap-2">
          {mountain?.seoulTrail && <SeoulTrailBadge />}
          {mountain?.famous100 && <Top100Badge />}
        </div>

        {!imageLoaded && (
          <Skeleton className="flex h-full w-full items-center justify-center rounded-[20px]">
            <div className="text-b2">이미지 로딩 중...</div>
          </Skeleton>
        )}

        <img
          src={mountain?.potoFile || EmptyImg}
          className={`h-full w-full rounded-[20px] object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          loading="lazy"
          alt={mountain?.mntiName}
        />

        {mountain?.photoSource && imageLoaded && (
          <div className="absolute bottom-2 right-3 text-c2 text-white">사진 출처 : {mountain?.photoSource}</div>
        )}
      </div>
      <MountainInfo mountain={mountain} row />
    </div>
  )
}

export default MountainCard
