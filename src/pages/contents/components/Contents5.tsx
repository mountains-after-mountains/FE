import ContentsHeader from './ContentsHeader'
import Image1 from '@/assets/image/content5_1.png'
import Image2 from '@/assets/image/content5_2.png'
import Image3 from '@/assets/image/content5_3.png'
import Image4 from '@/assets/image/content5_4.png'
import Image5 from '@/assets/image/content5_5.png'

const hikingData = [
  {
    title: '1. 남산',
    description: '서울특별시 중구 남산공원길 105\n고도 : 262m',
    contents:
      '남산은 서울의 중심에 위치해 접근성이 좋고, 산책로가 잘 정비되어 있어 초보자도 쉽게 오를 수 있습니다. 서울 타워에서 바라보는 야경 또한 일품입니다.',
    character: {
      title: '남산 순환도로 코스',
      description: '초보자에게 적합하며, 약 1시간 30분 정도 소요',
    },
    caution: '주말에는 방문객이 많아 혼잡할 수 있으니 평일이나 이른 아침에 방문하는 것이 좋습니다.',
    image: Image1,
  },
  {
    title: '2. 인왕산',
    description: '서울특별시 종로구 옥인동 인왕산길\n고도 : 338m',
    contents:
      '인왕산은 비교적 낮은 고도로 초보자에게 적합하며, 산 정상에서 서울 시내를 한눈에 내려다볼 수 있습니다. 돌계단이 많아 등산로가 안전하게 마련되어 있습니다.',
    character: {
      title: '사직단에서 시작해 인왕산 정상까지 오르는 코스',
      description: '약 2시간 정도 소요',
    },
    caution: '돌계단이 많아 미끄러지지 않도록 주의가 필요합니다. 등산화 착용을 권장합니다.',
    image: Image2,
  },
  {
    title: '3. 아차산',
    description: '서울특별시 광진구 워커힐로 177\n고도 : 287m',
    contents:
      '아차산은 낮은 고도와 완만한 경사로 등산 초보자에게 적합합니다. 서울 동부 지역에서 쉽게 접근할 수 있으며, 산책로가 잘 정비되어 있어 가족 단위로도 많이 찾습니다.',
    character: {
      title: '아차산역에서 시작해 아차산 정상까지 오르는 코스',
      description: '약 1시간 30분 정도 소요',
    },
    caution: '산책로가 잘 정비되어 있지만, 중간중간 경사가 있는 구간이 있어 천천히 오르는 것이 좋습니다.',
    image: Image3,
  },
  {
    title: '4. 관악산 서울대 입구 코스',
    description: '서울특별시 관악구 신림동 관악산 공원\n고도 : 632m',
    contents:
      '관악산은 다양한 코스가 있지만, 서울대 입구 코스는 초보자도 도전할 수 있습니다. 등산로가 잘 정비되어 있고, 중간중간 멋진 풍경을 감상할 수 있습니다. 정상에 오르면 서울의 전경이 한눈에 들어옵니다.',
    character: {
      title: '서울대 정문에서 시작해 관악산 정상까지 오르는 코스',
      description: '약 3시간 정도 소요',
    },
    caution: '경사가 있는 구간이 많아 체력 소모가 크므로, 중간중간 휴식을 취하며 오르는 것이 좋습니다.',
    image: Image4,
  },
  {
    title: '5. 청계산',
    description: '서울특별시 서초구 청계산로 10길\n고도 : 620m',
    contents:
      '청계산은 비교적 낮은 고도와 다양한 코스로 초보자에게 적합합니다. 서울 남부 지역에서 접근이 용이하며, 산책로가 잘 정비되어 있습니다.',
    character: {
      title: '원터골 입구에서 시작해 청계산 정상까지 오르는 코스',
      description: '약 2시간 30분 정도 소요',
    },
    caution: '등산로가 비교적 완만하지만, 중간중간 돌계단이 있어 발목을 조심해야 합니다. 등산화 착용을 권장합니다.',
    image: Image5,
  },
]

const Contents5 = () => {
  return (
    <div className="flex flex-col">
      <ContentsHeader />
      <main className="whitespace-pre-line px-5 pb-10 pt-2.5">
        <p className="mb-2.5 text-h3 text-gray-900">{'등린이가 오르기 좋은\n서울 산은 어디? 🏃🏻‍♀‍'}</p>
        <p className="mb-10 text-b3 text-gray-700">
          {
            '등산을 처음 시작하는 "등린이"라면, 서울에는 다양한 난이도의\n산들이 있어 쉽게 도전할 수 있습니다.\n이번 글에서는 초보자가 오르기 좋은 서울의 산 5곳을 소개합니다.'
          }
        </p>
        <ul className="space-y-[30px]">
          {hikingData.map(({ contents, title, image, description, character, caution }) => (
            <li key={title} className="space-y-2.5">
              <div className="relative w-full">
                <img src={image} className="w-full" />
                <div className="absolute bottom-[14px] left-[14px] z-10 text-white">
                  <div className="mb-1.5 text-b1">{title}</div>
                  <div className="whitespace-pre-line text-b3">{description}</div>
                </div>
              </div>
              <p className="text-b3 text-gray-700">{contents}</p>
              <div>
                <p className="mb-0.5 text-b3 font-bold text-gray-700">{character.title}</p>
                <p className="text-b3 text-gray-700">{character.description}</p>
              </div>
              <div>
                <p className="mb-0.5 text-b3 font-bold text-gray-700">주의할 점</p>
                <p className="text-b3 text-gray-700">{caution}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <div className="mb-[30px] h-2 w-full bg-gray-100" />
        <p className="mb-10 whitespace-pre-line px-5 text-b3 text-gray-700">
          {
            '등산 초보자라면 위의 산들을 선택해 도전해보세요.\n각각의 산은 접근성이 좋고, 초보자도 무리 없이 오를 수 있는 코스들이 마련되어 있습니다. 안전한 등산을 위해 준비물과 체력을 잘 챙기고, 자연 속에서의 즐거움을 만끽해보세요.'
          }
        </p>
      </footer>
    </div>
  )
}

export default Contents5
