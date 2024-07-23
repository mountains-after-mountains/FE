import { useState } from 'react'
import Header from '@/components/layouts/header'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import DayBadgeWithTitle from '@/components/common/DayBadgeWithTitle.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'

const data = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg',
  },
  {
    id: 2,
    img: 'https://www.econovill.com/news/photo/201812/353683_236958_5647.jpg',
  },
  {
    id: 3,
    img: 'https://cdn.vdcm.co.kr/news/photo/201803/4538_13153_5736.jpg',
  },
  {
    id: 4,
    img: 'https://image.kr.canon/pds/editor/images/000013/20161006155152880_7UJF306Y.jpg',
  },
  {
    id: 5,
    img: 'https://www.walkerhillstory.com/wp-content/uploads/2020/09/2-1.jpg',
  },
  {
    id: 6,
    img: 'https://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
  },
  {
    id: 7,
    img: 'https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg',
  },
]

const OPTIONS: EmblaOptionsType = { loop: false }

const MakeInvitation = () => {
  const [emblaRef] = useEmblaCarousel(OPTIONS)
  const [selectedImage, setSelectedImage] = useState(data[0].img)

  const handleImageClick = (img: string) => {
    setSelectedImage(img)
  }

  return (
    <>
      <Header title="초대장 만들기" rightAction="삭제" />
      <div className="px-5 py-4">
        <img src={selectedImage} className="mb-4 aspect-square rounded-xl" alt="Selected" />
        <div className="mb-8 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {data.map(item => (
              <img
                key={item.id}
                src={item.img}
                className={`w-20 cursor-pointer ${selectedImage === item.img ? 'border-4 border-black' : ''}`}
                alt={`Carousel ${item.id}`}
                onClick={() => handleImageClick(item.img)}
              />
            ))}
          </div>
        </div>
        <DayBadgeWithTitle text="D-day " title="5월 26일 (수)" />
        <div className="mb-2 mt-1 flex gap-1">
          <div className="text-b2 font-semibold">북한산</div>
          <div className="text-b2">백운대코스</div>
        </div>
        <textarea
          className="w-full rounded-xl bg-gray-100 px-3 py-4 placeholder:text-b2 placeholder:text-border focus:outline-none"
          placeholder="초대장을 자유롭게 작성해주세요."
          rows={4}
        />
        <FooterButton>초대장 완성하기</FooterButton>
      </div>
    </>
  )
}

export default MakeInvitation
