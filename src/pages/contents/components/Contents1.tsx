import ContentsHeader from './ContentsHeader'
import Image from '@/assets/image/mnti_course.png'
import Stamp from '@/assets/image/contents1_stamp_tour.png'

const data = [
  {
    title: '️‍‍🗺️ 서울둘레길: 서울을 걷다',
    contents:
      '서울둘레길은 서울을 한 바퀴 도는 156.5km 길이의 도보길이에요. 총 21개의 코스로 나뉘어 있어요. 이 길은 서울의 역사, 문화, 자연을 체험할 수 있는 멋진 길입니다.',
  },
  {
    title: '🌱 휴식과 힐링이 가득한 곳',
    contents:
      '서울둘레길 곳곳에는 휴게시설과 북카페, 쉼터가 있어서 걷다가 쉬기 좋아요. 전통 사찰과 유적지를 연결해 서울의 역사와 문화를 직접 체험할 수 있어요.',
  },
  {
    title: '🏃🏻‍♂ 편안하게 걸을 수 있는 길',
    contents:
      '이 길은 대중교통으로 접근하기 쉬워요. 경사가 심하지 않은 흙길이라 누구나 안전하고 편하게 걸을 수 있습니다.',
  },

  {
    title: '📍 새롭게 개편된 코스',
    contents:
      '서울둘레길은 원래 8코스였지만, 이제는 21코스로 개편되었어요. 각자의 능력과 방문 목적에 맞춰 코스 완주할 수 있도록 구성되었습니다. 또한, 일상 속에서 건강과 여가를 즐길 수 있도록 코스를 2~4시간 정도로 나누어 세분화했어요.',
  },
  {
    title: '💮 서울둘레길 : 스탬프 투어',
    image: Stamp,
    contents:
      '서울둘레길에는 우체통을 재활용해 만든 스탬프 시설이 28곳 있어요. 서울둘레길 스탬프에는 역사, 문화, 자연생태의 이야기가 담겨 있어요. 스탬프를 찍으면서 내가 걸은 코스를 기록하고, 서울의 다양한 이야기를 떠올릴 수 있어요. 스탬프와 함께 걷다 보면 서울 곳곳의 숨겨진 이야기를 직접 느낄 수 있답니다.',
  },
  {
    title: '⛳ ️완주 증명서 받기',
    contents: (
      <>
        28개의 스탬프를 모두 모으면, 스탬프북이나 앱을 통해 서울둘레길 완주 증명서를 받을 수 있어요.{' '}
        <a className="underline">이곳(링크)</a>에서 스탬프와 완주 증명서 내용에 대해 알아보세요!
      </>
    ),
  },
]

const Contents1 = () => {
  return (
    <>
      <ContentsHeader />
      <main className="whitespace-pre-line px-5 pb-10 pt-2.5">
        <p className="mb-2.5 text-h3 text-gray-900">{'산너머산과 함께하는\n서울둘레길 21코스'}</p>
        <p className="mb-10 text-b3 text-gray-700">
          {
            '둘레길 걸으면 인증받고 완주 증명서도 받을 수 있다!?\n서울의 역사, 문화, 자연을 체험할 수 있는 서울둘레길 21코스'
          }
        </p>
        <p className="mb-1.5 text-b1 text-gray-700">서울둘레길 인증까지 받을 수 있는 산은 어디?</p>
        <a className="mb-2.5 text-b3 text-gray-700 underline">코스 자세히 보러가기</a>
        <img src={Image} className="mb-10 w-full" />
        <ul className="space-y-[30px]">
          {data.map(({ contents, title, image }) => (
            <li key={title}>
              <p className="mb-1.5 text-b1 text-gray-700">{title}</p>
              {image && <img src={image} className="w-full" />}
              <p className="text-b3 text-gray-700">{contents}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Contents1
