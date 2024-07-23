import CommonCard from '@/components/common/CommonCard.tsx'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import { NextIcon } from '@/icons'

const ListCard = () => {
  return (
    <CommonCard>
      <div className="flex flex-col gap-1">
        <DayBadgeWithTitle
          text="D-day "
          title="5월 26일 (수)"
          rightAction={
            <button className="flex items-center gap-[7px] text-b2">
              자세히
              <NextIcon />
            </button>
          }
        />
        <div className="flex gap-1">
          <div className="text-b2 font-semibold">북한산</div>
          <div className="text-b2">백운대코스</div>
        </div>
      </div>
      <div className="pt-5">날씨</div>
    </CommonCard>
  )
}

export default ListCard
