import MountainInfo from '@/components/common/MountainInfo'
import Top100Badge from '@/components/common/Top100Badge'
import { useNavigate } from 'react-router-dom'
import Clip from '@/assets/icons/clip.svg?react'
import { MountainResponse } from '@/types/mountain'
import clsx from 'clsx'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'
import Arrow from '@/assets/icons/arrow_left.svg?react'
import SeoulTrailBadge from '@/components/common/SeoulTrailBadge'

const DetailMountainInfo = ({ mountain, className }: { mountain?: MountainResponse; className?: string }) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className={clsx(className)}>
      <div className="relative">
        <div className="absolute left-4 top-3 cursor-pointer" onClick={goBack}>
          <Arrow color={mountain?.photoFile ? 'white' : 'black'} />
        </div>
        <img
          src={mountain?.photoFile ? `${mountain?.photoFile}` : EmptyImg}
          className="mb-5 h-[246px] w-full object-cover"
        />
        {mountain?.photoSource && (
          <div className="absolute bottom-2 right-3 text-c2 text-white">사진 출처 : {mountain?.photoSource}</div>
        )}
      </div>
      <div className="px-5">
        <div className="flex gap-1">
          {mountain?.seoulTrail && <SeoulTrailBadge />}
          {mountain?.famous100 && <Top100Badge className="inline-flex" />}
        </div>
        <MountainInfo mountain={mountain} />
        <a
          className="flex items-center gap-0.5 text-b3 text-gray-700 underline"
          href={mountain?.website}
          target="_blank"
        >
          {`${mountain?.mntiName ?? ''} 공원`}
          <Clip />
        </a>
      </div>
    </div>
  )
}

export default DetailMountainInfo
