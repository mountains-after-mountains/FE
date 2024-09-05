import DeleteDrawer from '@/components/common/DeleteDrawer.tsx'
import BackDrawer from '@/pages/schedule/modify/components/BackDrawer.tsx'

interface HeaderWithDrawerProps {
  scheduleId?: string
  title: string
  backDrawerTitle?: string
  message?: string
  continueButtonLabel?: string
  onConfirmExit?: () => void
}

const HeaderWithDrawer = ({
  scheduleId,
  title,
  onConfirmExit,
  continueButtonLabel,
  message,
  backDrawerTitle,
}: HeaderWithDrawerProps) => {
  return (
    <div className="flex items-center px-4 py-3">
      <div className="w-1/3 p-2">
        <BackDrawer
          onConfirmExit={onConfirmExit}
          continueButtonLabel={continueButtonLabel}
          message={message}
          backDrawerTitle={backDrawerTitle}
        />
      </div>
      <div className="flex w-1/3 justify-center text-h5 text-gray-900">{title}</div>
      <div className="flex w-1/3 justify-end">{scheduleId && <DeleteDrawer scheduleId={scheduleId} />}</div>
    </div>
  )
}

export default HeaderWithDrawer
