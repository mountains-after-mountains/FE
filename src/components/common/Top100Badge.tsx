import Badge from './Badge'

type Props = {
  className?: string
}

const Top100Badge = ({ className }: Props) => {
  return <Badge className={className}>100대 명산</Badge>
}

export default Top100Badge
