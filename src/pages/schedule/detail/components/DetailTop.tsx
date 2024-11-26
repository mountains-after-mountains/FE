import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import useDateInfo from '@/hooks/useDateInfo.ts'
import { BackIcon } from '@/icons'
import { Schedule } from '@/types/schedule'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'
import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton.tsx'

interface DetailTopProps {
  data: Schedule
  isAuthenticated?: boolean
}

const DetailTop = ({ data, isAuthenticated }: DetailTopProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const navigate = useNavigate()
  const scheduleDate = data?.scheduleDate ?? ''
  const dateInfo = useDateInfo(scheduleDate)

  return (
    <div>
      <div className="relative h-[246px] w-full">
        {!imageLoaded && (
          <Skeleton className="flex h-full w-full items-center justify-center rounded-none">
            <div className="text-b2">이미지 로딩 중...</div>
          </Skeleton>
        )}

        <img
          src={data?.mountainImg}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          alt="Mountain"
          onLoad={() => setImageLoaded(true)}
          onError={e => {
            e.currentTarget.src = EmptyImg
            setImageLoaded(true)
          }}
        />

        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-start justify-between p-4">
          {isAuthenticated && (
            <button className="text-white" onClick={() => navigate('/schedule')}>
              <BackIcon color="#ffffff" />
            </button>
          )}
          {isAuthenticated && (
            <button className="text-white" onClick={() => navigate(`/schedule/modify/${scheduleId}`)}>
              수정
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[6px] bg-white p-5">
        <DayBadgeWithTitle text={dateInfo.dDayText} title={dateInfo.formattedDate} />
        <DetailRow label="입산시간" value={dateInfo.formattedTime} />
        <DetailRow
          label="인원수"
          value={
            parseInt(data?.memberCount) === 0
              ? '미정'
              : parseInt(data?.memberCount) >= 5
                ? `${data?.memberCount}명 이상`
                : `${data?.memberCount}명`
          }
        />
      </div>
    </div>
  )
}

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-1 text-b3">
    <div className="text-subtext">{label}</div>
    <div className="text-text">{value}</div>
  </div>
)

export default DetailTop
