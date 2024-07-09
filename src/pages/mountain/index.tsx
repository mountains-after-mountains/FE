import CommonTabs from '@/components/common/CommonTabs'
import { useParams } from 'react-router-dom'
import DetailMountainInfo from './components/DetailMountainInfo'
import DetailTab from './components/DetailTab'
import ReviewTab from './components/ReviewTab'

const Mountain = () => {
  const { mountainId } = useParams()
  const tab1 = {
    text: '상세 정보',
    value: 'details',
    content: <DetailTab />,
  }
  const tab2 = {
    text: '후기',
    value: 'review',
    content: <ReviewTab />,
  }

  return (
    <div>
      <DetailMountainInfo />
      <div className="mt-5 h-2 w-full bg-gray-100" />
      <CommonTabs tab1={tab1} tab2={tab2} />
    </div>
  )
}

export default Mountain
