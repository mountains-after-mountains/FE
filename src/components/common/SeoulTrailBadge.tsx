import clsx from 'clsx'
import Badge from './Badge'

type Props = {
  className?: string
}

const SeoulTrailBadge = ({ className }: Props) => {
  return <Badge className={clsx('bg-green-700', className)}>서울둘레길</Badge>
}

export default SeoulTrailBadge
