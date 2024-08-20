import DeleteDrawer from '@/components/common/DeleteDrawer.tsx'
import BackDrawer from '@/pages/schedule/modify/components/BackDrawer.tsx'

const HeaderWithDrawer = ({ scheduleId }: { scheduleId: string }) => {
  return (
    <div className="flex items-center px-4 py-3">
      <button className="w-1/3 p-2">
        <BackDrawer />
      </button>
      <div className="flex w-1/3 justify-center text-h5 text-gray-900">등산일정 수정</div>
      <div className="flex w-1/3 justify-end">
        <DeleteDrawer scheduleId={scheduleId} />
      </div>
    </div>
  )
}

export default HeaderWithDrawer
