import { useNavigate } from 'react-router-dom'

const HomeBanner = () => {
  const title = '산너머산과 함께하는 서울둘레길 21코스'
  const description =
    '둘레길 걸으면 인증받고 완주 증명서도 받을 수 있다!?\n서울의 역사, 문화, 자연을 체험할 수 있는\n서울둘레길 21코스 자세한 내용 보러가기! >'

  const navigate = useNavigate()
  const onClick = () => navigate('/') // TODO 추후 이동할 페이지 링크

  return (
    <div
      className="bg-home-banner1 box-border flex cursor-pointer flex-col justify-center gap-1.5 bg-cover bg-center p-5"
      onClick={onClick}
    >
      <div className="text-b1 text-white">{title}</div>
      <div className="whitespace-pre text-b3 text-white">{description} </div>
    </div>
  )
}

export default HomeBanner
