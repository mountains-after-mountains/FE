import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Test from '@/pages/Test'
import Home from '@/pages/home'
import Mountain from '@/pages/mountain'
import RegisterSchedule from '@/pages/schedule/register'
import KakaoRedirect from '@/pages/login/components/KakaoRedirect'
import ModifySchedule from '@/pages/schedule/modify'
import ListSchedule from '@/pages/schedule/list'
import Login from '@/pages/login'
import Invitation from '@/pages/invitation'
import useAuthStore from '@/store/useAuthStore.ts'

const AppRoutes = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <Router>
      {!isAuthenticated && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mountain/:mountainId" element={<Mountain />} />
        <Route path="test" element={<Test />} />
        <Route path="home" element={<Home />} />
        <Route path="/schedule" element={<ListSchedule />} />
        <Route path="/schedule/register" element={<RegisterSchedule />} />
        <Route path="/schedule/modify" element={<ModifySchedule />} />
        <Route path="/auth" element={<KakaoRedirect />} />
        <Route path="invitation" element={<Invitation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
