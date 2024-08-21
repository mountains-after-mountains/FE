import { useEffect, useState } from 'react'
import Header from '@/components/layouts/header'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import useDateInfo from '@/hooks/useDateInfo.ts'
import { createInvitation, getInvitationImgList } from '@/services/api/invitation'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import { useDetailSchedule } from '@/hooks/useDetailSchedule.ts'

const OPTIONS: EmblaOptionsType = { loop: false }

interface InvitationImage {
  img: string
  imgNumber: number
}

const MakeInvitation = () => {
  const navigate = useNavigate()
  const [emblaRef] = useEmblaCarousel(OPTIONS)
  const [selectedImage, setSelectedImage] = useState<InvitationImage | null>(null)
  const [text, setText] = useState('')
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const maxLength = 100

  const { data, isFetching } = useDetailSchedule(scheduleId)

  const { data: invitationImagList } = useQuery({
    queryKey: ['getInvitationImgList'],
    queryFn: getInvitationImgList,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (invitationImagList && invitationImagList.length > 0) {
      setSelectedImage({ img: invitationImagList[0].img, imgNumber: invitationImagList[0].imgNumber })
    }
  }, [invitationImagList])

  const createInvitationMutation = useMutation({
    mutationFn: createInvitation,
    onSuccess: data => {
      const invitationId = data.invitationId
      navigate(`/invitation/${invitationId}`)
    },
  })

  const scheduleDate = data?.scheduleDate ?? ''
  const dateInfo = useDateInfo(scheduleDate)

  const handleImageClick = (img: string, imgNumber: number) => {
    setSelectedImage({ img, imgNumber })
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const completeInvitation = () => {
    if (!selectedImage) return

    const payload = {
      scheduleId: scheduleId,
      imgNumber: selectedImage.imgNumber,
      text: text,
    }
    createInvitationMutation.mutate(payload)
  }

  return (
    <div className="flex flex-col">
      {isFetching && <LoadingSpinner />}
      <Header title="초대장 만들기" />
      <div className="px-5 py-4">
        <img
          src={`data:image/jpeg;base64,${selectedImage?.img}`}
          className="mb-4 aspect-square rounded-xl"
          alt="Selected"
        />
        <div className="mb-8 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {invitationImagList?.map((item: InvitationImage) => (
              <img
                key={item.imgNumber}
                src={`data:image/jpeg;base64,${item.img}`}
                className={`w-14 cursor-pointer rounded ${
                  selectedImage?.img === item.img ? 'border-2 border-black' : 'border-2 border-border'
                }`}
                alt={`Carousel ${item.imgNumber}`}
                onClick={() => handleImageClick(item.img, item.imgNumber)}
              />
            ))}
          </div>
        </div>
        <DayBadgeWithTitle text={dateInfo.dDayText} title={dateInfo.formattedDate} />
        <div className="mb-2 mt-1 flex gap-1">
          <div className="text-b2 font-semibold">{data?.mountainName}</div>
          <div className="text-b2">{data?.courseName}</div>
        </div>
        <div className="relative mb-4 pb-2">
          <textarea
            className="w-full rounded-xl bg-gray-100 px-3 py-4 placeholder:text-b2 placeholder:text-border focus:outline-none"
            placeholder="초대장을 자유롭게 작성해주세요."
            rows={4}
            value={text}
            onChange={handleTextChange}
            maxLength={100}
          />
          <div className="absolute bottom-4 right-3 text-b2 text-border">
            {text.length}/{maxLength}
          </div>
        </div>
        <FooterButton onClick={completeInvitation}>초대장 완성하기</FooterButton>
      </div>
    </div>
  )
}

export default MakeInvitation
