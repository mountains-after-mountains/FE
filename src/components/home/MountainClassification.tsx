const MountainClassification = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <p className="mb-2 text-b1">산은 어떤 기준으로 분류되나요?</p>
      <p className="mb-3.5 whitespace-pre-line text-b2">
        {'서울에 25개 산을 3개의 고도로 나누었어요.\n산의 높이로 난이도를 유추할 수 있어요.'}
      </p>
      <table className="mb-[26px] w-full border-collapse border-spacing-0 border text-center [&>*>tr>td]:border [&>*>tr>td]:px-2.5 [&>*>tr>td]:py-1.5 [&>*>tr>th]:border [&>*>tr>th]:px-2.5 [&>*>tr>th]:py-1.5">
        <thead>
          <tr>
            <th className="py-1.5 text-center text-b3 text-gray-900"></th>
            <th className="py-1.5 text-center text-b3 font-bold text-gray-900">고도 (m)</th>
            <th className="py-1.5 text-center text-b3 font-bold text-gray-900">구간별 산 개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2.5 py-1.5">
              <span className="mr-1.5 text-b3 font-bold text-green-700">산 너머 산</span>
              <span className="text-c1 text-gray-900">높은 고도</span>
            </td>
            <td className="text-b3 text-gray-900">500m 이상</td>
            <td className="text-b3 text-gray-900">7</td>
          </tr>
          <tr>
            <td className="px-2.5 py-1.5">
              <span className="mr-1.5 text-b3 font-bold text-green-700">산 너머 산</span>
              <span className="text-c1 text-gray-900">중간 고도</span>
            </td>
            <td className="text-b3 text-gray-900">300m ~ 499m</td>
            <td className="text-b3 text-gray-900">7</td>
          </tr>
          <tr>
            <td className="px-2.5 py-1.5">
              <span className="mr-1.5 text-b3 font-bold text-green-700">산 너머 산</span>
              <span className="text-c1 text-gray-900">낮은 고도</span>
            </td>
            <td className="text-b3 text-gray-900">300m 미만</td>
            <td className="text-b3 text-gray-900">11</td>
          </tr>
        </tbody>
      </table>
      <button
        className="mt-auto h-[60px] w-full rounded-2xl bg-green-600 text-center text-b1 text-white"
        onClick={onClick}
      >
        확인했어요
      </button>
    </div>
  )
}

export default MountainClassification
