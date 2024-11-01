import ListCard from '@/pages/schedule/components/ListCard.tsx'
import SuggestionPrompt from '@/pages/schedule/list/components/SuggestionPrompt.tsx'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import Header from '@/components/common/Header.tsx'
import { useScheduleList } from '@/hooks/useScheduleList'
import ErrorPage from '@/components/common/ErrorPage.tsx'

const ListSchedule = () => {
  const { data, isFetching, isError, refetch } = useScheduleList()

  return (
    <div className="flex min-h-screen flex-col">
      {isFetching && <LoadingSpinner />}
      <Header selected="schedule" />
      {isError ? (
        <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
          <ErrorPage refetch={refetch} />
        </div>
      ) : (
        <div className="flex flex-grow flex-col gap-3 bg-background p-5">
          {data && data.length > 0 ? (
            data.map((schedule, index) => <ListCard key={index} schedule={schedule} />)
          ) : (
            <SuggestionPrompt />
          )}
        </div>
      )}
    </div>
  )
}

export default ListSchedule
