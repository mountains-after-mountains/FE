import MountainInfo from '@/components/common/MountainInfo'
import Top100Badge from '@/components/common/Top100Badge'
import { useNavigate } from 'react-router-dom'
import Clip from '@/assets/icons/clip.svg?react'
import { MountainResponse } from '@/types/mountain'
import clsx from 'clsx'

const DetailMountainInfo = ({ mountain, className }: { mountain?: MountainResponse; className?: string }) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className={clsx(className)}>
      <img src={`data:image/jpeg;base64,${mountain?.photoFile}`} className="mb-5 h-[246px] w-full" onClick={goBack} />
      <div className="px-5">
        {mountain?.famous100 && <Top100Badge className="inline-flex" />}
        <MountainInfo mountain={mountain} />
        <a className="flex items-center gap-0.5 text-b3 text-gray-700 underline" href="" target="_blank">
          산 공원 이름{/* {mountain.park.name} */}
          <Clip />
        </a>
      </div>
    </div>
  )
}

export default DetailMountainInfo
