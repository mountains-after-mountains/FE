import useLogin from '@/hooks/useLogin.ts'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const KakaoRedirect = () => {
  const code = new URL(window.location.href).searchParams.get('code')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (!code) {
      setRedirect(true)
    }
  }, [code])

  useLogin(code)

  if (redirect) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center text-h2 text-primary">로그인 중입니다...</div>
    </div>
  )
}

export default KakaoRedirect
