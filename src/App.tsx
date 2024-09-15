import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react' // useEffect 추가
import AppRoutes from '@/routes/AppRoutes.tsx'

const queryClient = new QueryClient()

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    setScreenSize()

    // 윈도우 크기 변경 시 setScreenSize를 다시 호출
    window.addEventListener('resize', setScreenSize)

    // 컴포넌트 언마운트 시 이벤트 리스너를 제거
    return () => {
      window.removeEventListener('resize', setScreenSize)
    }
  }, []) // 빈 배열로 처음에만 실행

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
