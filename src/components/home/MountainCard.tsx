import { useNavigate } from 'react-router-dom'
import MountainInfo from '../common/MountainInfo'
import { MountainListResponse } from '@/types/schedule'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'
import Top100Badge from '@/components/common/Top100Badge.tsx'
import SeoulTrailBadge from '@/components/common/SeoulTrailBadge.tsx'

const MountainCard = ({ mountain }: { mountain?: MountainListResponse }) => {
  const navigation = useNavigate()
  const onClick = () => navigation(`/mountain/${mountain?.mntiListNo}`)

  return (
    <div className="my-[14px] box-border cursor-pointer px-5" onClick={onClick}>
      <div className="relative h-[200px]">
        <div className="absolute right-3 top-3 flex gap-2">
          {mountain?.seoulTrail && <SeoulTrailBadge />}
          {mountain?.famous100 && <Top100Badge />}
        </div>
        <img
          src={mountain?.potoFile ? mountain?.potoFile : EmptyImg}
          className="h-full w-full rounded-[20px] object-cover"
        />
        {mountain?.photoSource && (
          <div className="absolute bottom-2 right-3 text-c2 text-white">사진 출처 : {mountain?.photoSource}</div>
        )}
      </div>
      <MountainInfo mountain={mountain} row />
    </div>
  )
}

export default MountainCard
