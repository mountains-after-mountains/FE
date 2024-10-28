import create from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  login: (token: string, nickname: string, kakaoRefreshToken: string) => void
  logout: () => void
}

const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: !!localStorage.getItem('token'),
  login: (token, nickname, kakaoRefreshToken) => {
    localStorage.setItem('token', token)
    localStorage.setItem('nickName', nickname)
    localStorage.setItem('kakaoRefreshToken', kakaoRefreshToken)
    set({ isAuthenticated: true })
  },
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('nickName')
    localStorage.removeItem('scheduleId')
    localStorage.removeItem('kakaoRefreshToken')
    set({ isAuthenticated: false })
  },
}))

export default useAuthStore
