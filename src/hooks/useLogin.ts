import { useEffect } from 'react'
import { login } from '@/services/api/authentication'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/store/useAuthStore'

const useLogin = (code: string | null) => {
  const navigate = useNavigate()
  const { login: setLogin } = useAuthStore()

  useEffect(() => {
    const fetchToken = async () => {
      if (!code) {
        console.error('No code provided')
        return
      }

      try {
        const data = await login(code)
        setLogin(data.token, data.nickname)
        navigate('/welcome')
      } catch (error) {
        console.error('Error during sign-in:', error)
      }
    }

    fetchToken()
  }, [code, navigate, setLogin])
}

export default useLogin
