import React, { useEffect, useRef, useState } from 'react'
import Flag from '@/assets/icons/flag.svg?react'

interface Props {
  writer: string
  title: string
  date: string
  time: number
  difficulty: string
  contents: string
  img: string
}

const ReviewCard = ({ writer, title, date, time, difficulty, contents, img }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverflowed, setIsOverflowed] = useState(false)
  const contentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentsRef.current) {
      const contentHeight = contentsRef.current.offsetHeight
      const maxHeight = contentsRef.current.style.maxHeight
      setIsOverflowed(contentHeight > parseInt(maxHeight))

      console.log(contentHeight, contentsRef.current.style)
    }
  }, [])

  return (
    <div className="mb-5 w-full rounded-[20px] bg-gray-100 p-5">
      <div className="flex w-full gap-[10px]">
        <img src={img} className="h-[88px] w-[88px] rounded-[10px]" />
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="text-c2 text-gray-700">{writer}</div>
            <div className="text-c2 text-gray-500">{date}</div>
          </div>
          <div className="flex items-center text-b1 text-gray-900">
            <Flag color="#0E9F59" />
            {title}
          </div>
          <div>
            <div className="flex gap-[15px]">
              <div className="flex w-[60px] items-center gap-1 text-b3 text-gray-900">소요시간</div>
              <div className="text-b3 text-gray-900">{`${time}분`}</div>
            </div>
            <div className="flex gap-[15px]">
              <div className="flex w-[60px] items-center gap-1 text-b3 text-gray-900">체감난이도</div>
              <div className="text-b3 text-gray-900">{difficulty}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 inline-flex h-[1px] w-full bg-gray-300" />
      <div className="line-clamp-4 max-h-[62px] text-c1 text-gray-900" ref={contentsRef}>
        {contents}
      </div>
      {!isExpanded && isOverflowed && (
        <div onClick={() => setIsExpanded(true)} className="mt-2">
          Unfold
        </div>
      )}
      {isExpanded && (
        <div onClick={() => setIsExpanded(false)} className="mt-2">
          Fold
        </div>
      )}
    </div>
  )
}

export default ReviewCard
