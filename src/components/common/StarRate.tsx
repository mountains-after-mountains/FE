import Star from '@/assets/icons/star.svg?react'

type Props = {
  difficulty: number
  textNone?: boolean
}

const StarRate = ({ difficulty, textNone }: Props) => {
  const rateArray = new Array(3).fill(0)

  return (
    <div className="flex items-center">
      {!textNone && <div className="text-b3 text-gray-700">난이도</div>}
      {rateArray.map((_, index) => (
        <Star key={index} color={index < difficulty ? '#0E9F59' : '#B0B0B0'} width={18} height={18} />
      ))}
    </div>
  )
}

export default StarRate
