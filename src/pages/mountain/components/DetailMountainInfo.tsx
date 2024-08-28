import MountainInfo from '@/components/common/MountainInfo'
import Top100Badge from '@/components/common/Top100Badge'
import { useNavigate } from 'react-router-dom'
import Clip from '@/assets/icons/clip.svg?react'
import { MountainResponse } from '@/types/mountain'
import clsx from 'clsx'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'
import Arrow from '@/assets/icons/arrow_left.svg?react'

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
          src={mountain?.photoFile ? `data:image/jpeg;base64,${mountain?.photoFile}` : EmptyImg}
          className="mb-5 h-[246px] w-full object-cover"
        />
      </div>
      <div className="px-5">
        {mountain?.famous100 && <Top100Badge className="inline-flex" />}
        <MountainInfo mountain={mountain} />
        <a className="flex items-center gap-0.5 text-b3 text-gray-700 underline" href="" target="_blank">
          {`${mountain?.mntiName ?? ''} 공원`}
          <Clip />
        </a>
      </div>
    </div>
  )
}

export default DetailMountainInfo
