import useEmblaCarousel from 'embla-carousel-react'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import LoadingSpinner from '@/components/common/Spinner.tsx'
import useInvitation from '@/pages/invitation/make/hooks/useInvitation.ts'
import { InvitationImage } from '@/types/invitation'
import HeaderWithDrawer from '@/pages/schedule/modify/components/HeaderWithDrawer.tsx'
import EmptyImg from '@/assets/image/empty_mnti_img_card.png'

const OPTIONS = { loop: false }

const MakeInvitation = () => {
  const [emblaRef] = useEmblaCarousel(OPTIONS)
  const {
    invitationImgListLoading,
    isFetching,
    selectedImage,
    invitationImgList,
    text,
    dateInfo,
    data,
    handleImageClick,
    handleTextChange,
    completeInvitation,
  } = useInvitation()

  return (
    <div className="flex flex-col">
      {(isFetching || invitationImgListLoading) && <LoadingSpinner />}
      <HeaderWithDrawer
        title="초대장 만들기"
        backDrawerTitle="완성하지 않고 나가시겠어요?"
        message="아직 완성되지 않았어요."
        continueButtonLabel="이어서 완성하기"
      />
      <div className="px-5 py-4">
        <img
          src={selectedImage?.img ? `data:image/jpeg;base64,${selectedImage.img}` : EmptyImg}
          className="mb-4 aspect-square rounded-xl"
          alt="Selected"
        />
        <div className="mb-8 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {invitationImgList?.map((item: InvitationImage) => (
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
          <div className="absolute bottom-4 right-3 text-b2 text-border">{text.length}/100</div>
        </div>
        <FooterButton onClick={completeInvitation}>초대장 완성하기</FooterButton>
      </div>
    </div>
  )
}

export default MakeInvitation
