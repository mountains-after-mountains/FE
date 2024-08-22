import ListCard from '@/pages/schedule/components/ListCard.tsx'
import { useQuery } from '@tanstack/react-query'
import { getScheduleList } from '@/services/api/schedule'
import SuggestionPrompt from '@/pages/schedule/list/components/SuggestionPrompt.tsx'
import { ScheduleListResponse } from '@/types/schedule'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import Header from '@/components/common/Header.tsx'

const ListSchedule = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['scheduleList'],
    queryFn: getScheduleList,
    refetchOnWindowFocus: false,
  })
  return (
    <div className="flex h-full flex-col">
      {isFetching && <LoadingSpinner />}
      <Header selected="schedule" />
      <div className="flex flex-col gap-3 bg-background p-5">
        {data && data.length > 0 ? (
          data.map((schedule: ScheduleListResponse, index: number) => <ListCard key={index} schedule={schedule} />)
        ) : (
          <SuggestionPrompt />
        )}
      </div>
    </div>
  )
}

export default ListSchedule
