import ContentsHeader from './ContentsHeader'

const guidelines = [
  {
    title: '1. 준비는 철저히!',
    description:
      '등산은 날씨의 영향을 많이 받는 액티비티 중 하나입니다. 날씨뿐만 아니라 통제 정보 등 중요한 정보는 미리 홈페이지에서 확인해보세요. 시간, 거리, 주변 볼거리를 체크하세요. 휴대폰, 지도, 음용수 등 필요한 물품을 꼼꼼히 챙기는 것도 잊지 마세요.',
  },
  {
    title: '2. 함께 가면 더 즐거워요',
    description:
      '가능하면 두 명 이상 함께 다니는 것이 좋아요. 혼자 여행할 경우에는 행선지를 꼭 알려주세요. 너무 많은 인원은 주변 주민에게 불편을 줄 수 있으니 가족이나 친구 등 5명 이내로 가는 것이 좋습니다.',
  },
  {
    title: '3. 새벽과 야간 걷기는 피해주세요',
    description:
      '새벽 걷기는 주변 주민에게 피해를 줄 수 있어요. 너무 이른 시간이나 야간 걷기는 위험할 수 있으니 일출과 일몰 시간에 맞춰 걷는 것이 안전합니다.',
  },
  {
    title: '4. 환경을 생각하며 걷기',
    description:
      '정해진 노선만 이용해 주세요. 무분별한 샛길은 자연을 훼손할 수 있어요. 주변 농작물과 열매는 눈으로만 즐기고, 쓰레기는 반드시 되가져 가세요. 약수터, 화장실, 대피소 등 공공시설은 깨끗하게 사용합시다.',
  },
  {
    title: '5. 대중교통 이용하기',
    description:
      '대중교통은 도보 여행의 일부입니다. 더 자유로운 걷기를 위해 대중교통을 이용해보세요. 각 노선별로 대중교통 접근 방법이 홈페이지에 자세히 나와 있으니 참고하세요.',
  },
  {
    title: '6. 불씨 조심, 자연 보호',
    description:
      '작은 불씨 하나가 숲 전체를 사라지게 할 수 있어요. 도보 여행 시 화기 반입이나 흡연은 금지되어 있으며, 실화는 처벌 대상임을 명심하세요. 산불로 훼손된 자연을 복원하는 데는 100년이 넘게 걸립니다.',
  },
  {
    title: '7. 안전사고 주의하기',
    description: '항상 주의하며 산행하고, 노선에 위험 요소가 있으면 홈페이지에 글을 남기거나 대표 번호로 전화 주세요!',
  },
]

const Contents4 = () => {
  return (
    <>
      <ContentsHeader />
      <main className="whitespace-pre-line px-5 pb-10 pt-2.5">
        <p className="mb-2.5 text-h3 text-gray-900">{'등산객의 약속\n안전하고 즐거운 산행을 위해 🦺'}</p>
        <p className="mb-10 text-b3 text-gray-700">
          {'안전하고 즐거운 산행을 위한 모두의 약속!\n잘 숙지해서 진정한 등산인이 되어봐요.'}
        </p>
        <ul className="mb-10 space-y-6">
          {guidelines.map(({ title, description }) => (
            <li key={title}>
              <p className="mb-1.5 text-b1">{title}</p>
              <p className="text-b3 text-gray-700">{description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Contents4
