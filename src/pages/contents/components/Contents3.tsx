import ContentsHeader from './ContentsHeader'
import Image1 from '@/assets/image/content3_1.png'
import Image2 from '@/assets/image/content3_2.png'
import Image3 from '@/assets/image/content3_3.png'
import Image4 from '@/assets/image/content3_4.png'
import Image5 from '@/assets/image/content3_5.png'
import Image6 from '@/assets/image/content3_6.png'

const data = [
  {
    title: '이온음료',
    description:
      '땀을 많이 흘린 후에는 이온음료!\n등산 중 땀을 많이 흘리게 되면 몸 속 전해질 균형이 깨지기 쉬워요. 이온음료는 전해질과 수분을 빠르게 보충해주어 체력을 유지하는 데 도움이 됩니다. 등산 중간중간 조금씩 마셔주면 좋아요.',
    img: Image1,
  },
  {
    title: '김밥과 유부초밥',
    description:
      '한국인의 대표 산행 간식!\n김밥과 유부초밥은 휴대가 간편하면서도 든든한 한 끼로 제격입니다. 다양한 재료가 들어 있어 영양가가 높고, 쉽게 먹을 수 있어 산행 중간에 에너지를 충전하기에 좋습니다.',
    img: Image2,
  },
  {
    title: '컵라면',
    description:
      '정상에서 먹는 컵라면의 기쁨!\n높은 산을 오를 때 정상에서 먹는 컵라면은 그야말로 꿀맛이죠!\n따뜻한 물을 보온병에 담아가면 언제 어디서나 뜨끈한 라면을 즐길 수 있어요. 정상에서 맛보는 컵라면 한 그릇은 피로를 싹 잊게 해준답니다.',
    img: Image3,
  },
  {
    title: '방울토마토와 오이',
    description:
      '상큼하고 수분 가득!\n방울토마토와 오이는 한 입에 쏙 들어가는 크기로 먹기 편리하고, 비타민과 수분을 보충할 수 있어요. 땀을 많이 흘리는 산행 중에 수분 보충이 중요하니, 상큼한 방울토마토와 오이를 챙겨보세요.',
    img: Image4,
  },
  {
    title: '과일 젤리',
    description:
      '달콤한 맛으로 기분 전환!\n과일 젤리는 달콤한 맛으로 기분을 전환시켜주며, 휴대가 간편합니다. 간단하게 먹을 수 있어 산행 중에도 부담 없이 즐길 수 있어요.',
    img: Image5,
  },
  {
    title: '에너지바',
    description:
      '작지만 강력한 에너지 공급원!\n에너지바는 다양한 견과류와 곡물이 들어 있어 영양가가 높고, 빠르게 에너지를 공급해줍니다. 간편하게 먹을 수 있어 산행 중 필수 간식으로 제격이에요.',
    img: Image6,
  },
]

const Contents3 = () => {
  return (
    <>
      <ContentsHeader />
      <main className="whitespace-pre-line px-5 pb-10 pt-2.5">
        <p className="mb-2.5 text-h3 text-gray-900">등산엔 어떤 간식을 챙겨갈까? 🍫</p>
        <p className="mb-10 text-b3 text-gray-700">
          {
            '등산은 멋진 풍경을 즐기면서 건강도 챙길 수 있는 좋은 활동이죠.\n하지만 긴 산행에는 에너지를 유지하기 위한 간식이 필수입니다.\n어떤 간식이 등산에 좋을까요?'
          }
        </p>
        <ul className="mb-10 space-y-[30px]">
          {data.map(({ title, description, img }) => (
            <li key={title}>
              <div className="relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute bottom-[14px] z-10 px-[14px] text-white">
                  <div className="mb-1.5 text-b1">{title}</div>
                  <div className="text-b3">{description}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mb-1.5 text-b1 text-gray-700">⛰️ 자연을 지키는 산행</p>

        <p className="text-b3 text-gray-700">
          산행을 즐기며 우리 강산을 오래 보존할 수 있도록, 가져간 쓰레기는 꼭 다시 가져오는 것을 잊지 마세요. 자연을
          사랑하는 마음으로 깨끗한 산행을 실천해 봅시다!
        </p>
      </main>
    </>
  )
}

export default Contents3
