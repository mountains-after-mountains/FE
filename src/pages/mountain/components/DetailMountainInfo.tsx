import MountainInfo from '@/components/common/MountainInfo'
import Top100Badge from '@/components/common/Top100Badge'
import { useNavigate } from 'react-router-dom'
import Clip from '@/assets/icons/clip.svg?react'
import { MountainResponse } from '@/types/mountain'
import clsx from 'clsx'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'
import Arrow from '@/assets/icons/arrow_left.svg?react'
import SeoulTrailBadge from '@/components/common/SeoulTrailBadge'
import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton.tsx'

const DetailMountainInfo = ({ mountain, className }: { mountain?: MountainResponse; className?: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className={clsx(className)}>
      <div className="relative h-[246px]">
        <div className="absolute left-4 top-3 z-10 cursor-pointer" onClick={goBack}>
          <Arrow color={imageLoaded && mountain?.photoFile ? 'white' : 'black'} />
        </div>

        {!imageLoaded && (
          <Skeleton className="flex h-full w-full items-center justify-center rounded-none">
            <div className="text-b2">이미지 로딩 중...</div>
          </Skeleton>
        )}

        <img
          alt={mountain?.mntiName}
          src={mountain?.photoFile}
          loading="lazy"
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={e => {
            e.currentTarget.src = EmptyImg
            setImageLoaded(true)
          }}
        />

        {mountain?.photoSource && imageLoaded && (
          <div className="absolute bottom-2 right-3 z-10 text-c2 text-white">사진 출처 : {mountain?.photoSource}</div>
        )}
      </div>

      <div className="mt-5 px-5">
        <div className="flex gap-1">
          {mountain?.seoulTrail && <SeoulTrailBadge />}
          {mountain?.famous100 && <Top100Badge className="inline-flex" />}
        </div>
        <MountainInfo mountain={mountain} />
        {mountain?.website && (
          <a
            className="flex items-center gap-0.5 text-b3 text-gray-700 underline"
            href={mountain?.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${mountain?.mntiName ?? ''} 공원`}
            <Clip />
          </a>
        )}
      </div>
    </div>
  )
}

export default DetailMountainInfo
