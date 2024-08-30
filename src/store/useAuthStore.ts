import create from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  login: (token: string, nickname: string) => void
  logout: () => void
}

const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: !!localStorage.getItem('token'),
  login: (token, nickname) => {
    localStorage.setItem('token', token)
    localStorage.setItem('nickName', nickname)
    set({ isAuthenticated: true })
  },
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('nickName')
    set({ isAuthenticated: false })
  },
}))

export default useAuthStore
