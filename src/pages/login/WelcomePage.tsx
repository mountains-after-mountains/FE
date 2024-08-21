import { useNavigate } from 'react-router-dom'
import Mountains from '@/assets/icons/mountains.svg?react'
import { useEffect, useState } from 'react'

const WelcomePage = () => {
  const navigate = useNavigate()
  const name = localStorage.getItem('nickName')
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible(false)
    }, 2300)

    const timer2 = setTimeout(() => {
      navigate('/home')
    }, 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [navigate])

  return (
    <div
      className={`flex h-screen flex-col items-center justify-center gap-6 text-h3 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Mountains width={132} height={100} />
      <div className="text-center">
        환영합니다! <br /> {name}님
      </div>
    </div>
  )
}

export default WelcomePage
