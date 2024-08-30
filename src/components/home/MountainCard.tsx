import { useNavigate } from 'react-router-dom'
import MountainInfo from '../common/MountainInfo'
import { MountainListResponse } from '@/types/schedule'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'

const MountainCard = ({ mountain }: { mountain?: MountainListResponse }) => {
  const navigation = useNavigate()
  const onClick = () => navigation(`/mountain/${mountain?.mntiListNo}`)

  return (
    <div className="my-[14px] box-border cursor-pointer px-5" onClick={onClick}>
      <div className="relative h-[200px]">
        {/* {mountain?.famous100 && <Top100Badge className="absolute right-3 top-[12px]" />} */}
        <img
          src={mountain?.potoFile ? `data:image/jpeg;base64,${mountain?.potoFile}` : EmptyImg}
          className="h-full w-full rounded-[20px] object-cover"
        />
      </div>
      <MountainInfo mountain={mountain} row />
    </div>
  )
}

export default MountainCard
