import ContentsHeader from './ContentsHeader'
import Image1 from '@/assets/image/content2_1.png'
import Image2 from '@/assets/image/content2_2.png'
import Image3 from '@/assets/image/content2_3.png'
import Image4 from '@/assets/image/content2_4.png'
import Image5 from '@/assets/image/content2_5.png'

const data = [
  {
    title: '1. 남산 - 101번지남산돈까스 남산본점',
    address: '서울특별시 중구 소파로 101',
    contents:
      '남산에서 등산을 마친 후 든든한 한 끼를 원한다면 이곳입니다! 두툼한 돈까스와 함께 나오는 샐러드와 밥, 그리고 소스가 일품인 곳. 국내산 통 등심을 수제빵가루에 묻혀 바삭한 식감과 남산만의 특제 소스가 어우러진 돈까스 한입으로 만족스러운 식사를 완성해보세요.',
    recommend: '남산왕돈까스, 치즈돈까스, 매운돈까스',
    img: Image1,
  },
  {
    title: '2. 인왕산 - 잘빠진메밀 서촌 본점',
    address: '서울특별시 종로구 자하문로11길 4',
    contents:
      '인왕산 등산으로 땀 빼고 제대로된 한식 한상을 원한다면 이 곳! 새콤하면서 고소한 막국수, 넉넉한 양의 배작한 감자전이 일품입니다. 마지막까지 따뜻하게 부드러운 보쌈에 부추와 유자를 함께 먹으면 오늘의 보상은 더 필요없죠.',
    recommend: '순메밀막국수, 유자수육, 메밀새싹 감자전',
    img: Image2,
  },
  {
    title: '3. 아차산 - 순삼이네미나리삼겹살 아차산본점',
    address: '서울특별시 광진구 자양로43길 18 1층',
    contents:
      '여기 오려고 아차산, 용마산 등산한다는데 맞죠? 시골 생삼겹살은 탱글하면서 부드럽고, 향긋한 미나리가 부드러워서 고기와 함께 먹기 좋아요. 고기부터 파김치, 묵은지, 얼무국수, 볶음밥까지 제대로 된 한식 한끼로 등산 피로가 싹 가시는 곳. 미나리 추가는 필수입니다!',
    recommend: '미나리삼겹, 수제 양념 비빔국수, 차돌 된장찌개',
    img: Image3,
  },
  {
    title: '4. 관악산 - 참오리전문점',
    address: '서울특별시 동작구 사당로 307-10',
    contents:
      '더워지는 날씨에 보양식으로 최고! 국물에 한약재료를 아끼지 않아 더욱 깊은 맛을 자랑합니다. 크고 실한 오리를 부드럽고 넉넉하게 먹을 수 있습니다. 친절한 사장님과 맛있는 밑반찬은 덤!',
    recommend: '한방오리백숙, 오리주물럭, 부추전',
    img: Image4,
  },
  {
    title: '5. 청계산 - 청계산 곤드레집',
    address: '서울특별시 서초구 청룡마을1길 11 2층',
    contents:
      '청계산 등산 후 고소하고 향긋한 곤드레밥에 짭조름한 된장찌개 한스푼 어떠세요? 입맛을 돋우는 완벽한 조연, 무장아찌와 고추장아찌까지! 두부는 부드럽고 곤드레밥은 찰지고 고소해요. 밥 리필까지 가능한 인심은 덤!',
    recommend: '곤드레 나물밥, 육개장, 참숯석쇠 불고기',
    img: Image5,
  },
]

const Contents2 = () => {
  return (
    <>
      <ContentsHeader />
      <main className="whitespace-pre-line px-5 pb-2 pt-2.5">
        <p className="mb-2.5 text-h3 text-gray-900">{'먹으러 등산 가는 사람?\n저요.🙋🏻‍♀️'}</p>
        <p className="mb-10 text-b3 text-gray-700">
          {
            '서울에서 등산을 즐긴 후 배고픈 배를 달래줄 맛집을 찾고 계신가요?\n등산 후의 피로를 잊게 해줄 맛집들을 소개합니다!'
          }
        </p>
        <ul className="mb-10 space-y-[30px]">
          {data.map(({ title, address, contents, recommend, img }) => (
            <li key={title} className="space-y-2.5">
              <div className="relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute bottom-[14px] left-[14px] z-10 text-white">
                  <div className="mb-1.5 text-b1">{title}</div>
                  <div className="text-b3">{address}</div>
                </div>
              </div>
              <p className="text-b3 text-gray-700">{contents}</p>
              <div>
                <p className="mb-0.5 text-b3 font-bold text-gray-700">추천메뉴</p>
                <p className="text-b3 text-gray-700">{recommend}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Contents2
