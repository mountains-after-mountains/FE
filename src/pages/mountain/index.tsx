import { useParams } from 'react-router-dom'
import DetailMountainInfo from './components/DetailMountainInfo'
import DetailTab from './components/DetailTab'
import Divider from '@/components/common/Divider'

const Mountain = () => {
  const { mountainId } = useParams()

  return (
    <div>
      <DetailMountainInfo />
      <Divider />
      <DetailTab />
    </div>
  )
}

export default Mountain
