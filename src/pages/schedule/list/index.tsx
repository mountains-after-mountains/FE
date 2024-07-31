import Header from '@/components/layouts/header'
import ListCard from '@/pages/schedule/components/ListCard.tsx'
import { useQuery } from '@tanstack/react-query'
import { getScheduleList } from '@/services/api/schedule'
import SuggestionPrompt from '@/pages/schedule/list/components/SuggestionPrompt.tsx'

const ListSchedule = () => {
  const { data, isError } = useQuery({
    queryKey: ['scheduleList'],
    queryFn: getScheduleList,
    refetchOnWindowFocus: false,
  })
  return (
    <div className="flex flex-col">
      <Header title="등산 일정" rightAction={<button className="text-b2 text-primary">추가</button>} />
      <div className="flex flex-col gap-3 bg-background p-5">
        {data && data.length > 0 ? (
          data.map((schedule, index) => <ListCard key={index} schedule={schedule} />)
        ) : (
          <SuggestionPrompt />
        )}
      </div>
    </div>
  )
}

export default ListSchedule
