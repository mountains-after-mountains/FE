import CommonTabs from '@/components/common/CommonTabs'
import { useParams } from 'react-router-dom'

const Mountain = () => {
  const { mountainId } = useParams()
  const tab1 = {
    text: '상세 정보',
    value: 'details',
    content: <></>,
  }
  const tab2 = {
    text: '후기',
    value: 'review',
    content: <></>,
  }

  return (
    <div>
      <CommonTabs tab1={tab1} tab2={tab2} />
    </div>
  )
}

export default Mountain
