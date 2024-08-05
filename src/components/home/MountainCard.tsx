import { useNavigate } from 'react-router-dom'
import MountainInfo from '../common/MountainInfo'
import Top100Badge from '../common/Top100Badge'
import { MountainResponse } from '@/types/mountain'

const MountainCard = ({ mountain }: { mountain?: MountainResponse }) => {
  const navigation = useNavigate()
  const onClick = () => navigation(`/mountain/${mountain.id}`)

  return (
    <div className="my-[14px] box-border cursor-pointer px-5" onClick={onClick}>
      <div className="relative h-[200px]">
        {mountain?.famous100 && <Top100Badge className="absolute right-3 top-[12px]" />}
        <img src={`data:image/jpeg;base64,${mountain?.photoFile}`} className="h-full w-full rounded-[20px]" />
      </div>
      <MountainInfo mountain={mountain} />
    </div>
  )
}

export default MountainCard
