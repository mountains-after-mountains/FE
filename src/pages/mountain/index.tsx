import { useNavigate, useParams } from 'react-router-dom'
import DetailMountainInfo from './components/DetailMountainInfo'
import DetailTab from './components/DetailTab'
import Divider from '@/components/common/Divider'
import { WeatherGroup } from '@/components/common/Weather'
import FooterButton from '@/components/common/button/FooterButton'
import useMountainDetails from '@/hooks/useMoutainDetails'
import LoadingSpinner from '@/components/common/Spinner'

const Mountain = () => {
  const { mountainId } = useParams()
  const navigate = useNavigate()
  const onClick = () => navigate(`/schedule/register/${mountainId}`)

  const { data, isFetching } = useMountainDetails({ mountainId: mountainId })

  return (
    <div>
      {isFetching && <LoadingSpinner />}
      <DetailMountainInfo mountain={data} className="pb-6" />
      <Divider />
      <DetailTab courseList={data?.course} />
      <Divider />
      <div className="p-5 pb-[100px]">
        <span className="text-h5 text-gray-900">날씨</span>
        <WeatherGroup weathers={data?.weatherList} className="mt-[10px]" />
      </div>
      <div className="fixed bottom-5 w-[calc(100%-40px)] max-w-[460px] px-5">
        <FooterButton onClick={onClick}>일정 등록하기</FooterButton>
      </div>
    </div>
  )
}

export default Mountain
