import ListCard from '@/pages/schedule/components/ListCard.tsx'
import SuggestionPrompt from '@/pages/schedule/list/components/SuggestionPrompt.tsx'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import Header from '@/components/common/Header.tsx'
import { useScheduleList } from '@/hooks/useScheduleList'

const ListSchedule = () => {
  const { data, isFetching } = useScheduleList()

  return (
    <div className="flex min-h-screen flex-col">
      {isFetching && <LoadingSpinner />}
      <Header selected="schedule" />
      <div className="flex flex-grow flex-col gap-3 bg-background p-5">
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
