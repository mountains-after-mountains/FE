import { useNavigate } from 'react-router-dom'

type Props = { img: string; dday: number; time: number; people: number; date: string }

const ScheduleInfo = ({ img, dday, time, people, date }: Props) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <>
      <img src={img} className="h-[246px] w-full" onClick={goBack} />
      <div className="box-border p-5">
        <div className="mb-[6px] flex gap-1">
          <span className="rounded-[6px] bg-green-200 px-2 py-0.5 text-b2 font-semibold text-green-600">{`D-${dday === 0 ? 'day' : dday}`}</span>
          <span className="text-h5 text-gray-900">{date}</span>
        </div>
        <div className="mb-[6px] flex gap-1 text-b3 text-gray-900">
          <span className="text-gray-700">입산시간</span>
          <span>{time}</span>
        </div>
        <div className="mb-[6px] flex gap-1 text-b3 text-gray-900">
          <span className="text-gray-700">인원수</span>
          <span>{`${people}명`}</span>
        </div>
      </div>
    </>
  )
}

export default ScheduleInfo
