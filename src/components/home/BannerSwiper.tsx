import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { useState } from 'react'

const banners = [
  {
    id: 1,
    title: '산너머산과 함께하는 서울둘레길 21코스',
    description:
      '둘레길 걸으면 인증받고 완주 증명서도 받을 수 있다!?\n서울의 역사, 문화, 자연을 체험할 수 있는\n서울둘레길 21코스 자세한 내용 보러가기! >',
  },
  {
    id: 2,
    title: '먹으러 등산 가는 사람? 저요.🙋🏻‍♀️',
    description:
      '서울에서 등산을 즐긴 후 배고픈 배를 달래줄 맛집을 찾고 계신가요?\n등산 후의 피로를 잊게 해줄 맛집들을 소개합니다!\n등산 코스와 가까운 맛집정보 보러가기! >',
  },
  {
    id: 3,
    title: '등산엔 어떤 간식을 챙겨갈까?',
    description:
      '등산은 멋진 풍경을 즐기면서 건강도 챙길 수 있는 좋은 활동이죠.\n하지만 긴 산행에는 에너지를 유지하기 위한 간식이 필수입니다.\n어떤 간식이 등산에 좋을까요? >',
  },
  {
    id: 4,
    title: '등산객의 약속 : 안전하고 즐거운 산행을 위해',
    description:
      '안전하고 즐거운 산행을 위한 모두의 약속!\n잘 숙지해서 진정한 등산인이 되어봐요.\n내가 모르는 등산수칙 보러가기! >',
  },
  {
    id: 5,
    title: '등린이가 오르기 좋은 서울 산은 어디?',
    description:
      '등산을 처음 시작하는 "등린이"에게!\n서울에는 다양한 난이도의 산들이 있어 쉽게 도전할 수 있습니다.\n이번 글에서는 초보자가 오르기 좋은 서울의 산 5곳을 소개합니다.',
  },
]

const BannerSwiper = ({ className }: { className?: string }) => {
  const [slideNumber, setSlideNumber] = useState(1)
  const navigate = useNavigate()

  return (
    <Swiper
      spaceBetween={0}
      pagination={{ clickable: true }}
      onSlideChange={swiper => setSlideNumber(swiper.realIndex)}
      navigation={false}
      loop={true}
      className={clsx('relative -z-10', className)}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
    >
      {banners.map(({ id, title, description }) => (
        <SwiperSlide key={id}>
          <div
            className={clsx('box-border flex cursor-pointer flex-col justify-center gap-1.5 bg-cover bg-center p-5', {
              'bg-home-banner': id === 1,
              'bg-green-100': id === 2,
              'bg-green-600': id === 3,
              'bg-green-800': id === 4,
              'bg-green-200': id === 5,
            })}
            onClick={() => navigate(`/contents/${id}`)}
          >
            <div
              className={clsx('text-b1', {
                'text-white': id !== 2 && id !== 5,
                'text-green-800': id === 5,
                'text-green-700': id === 2,
              })}
            >
              {title}
            </div>
            <div
              className={clsx('whitespace-pre text-b3', {
                'text-white': id !== 2 && id !== 5,
                'text-gray-900': id === 2,
                'text-green-700': id === 5,
              })}
            >
              {description}
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-[2px] rounded-[30px] bg-black bg-opacity-25 px-2.5 py-1 text-c2 text-gray-200">
        <span className="text-white">{slideNumber + 1}</span>
        <span>/</span>
        <span>5</span>
      </div>
    </Swiper>
  )
}

export default BannerSwiper
