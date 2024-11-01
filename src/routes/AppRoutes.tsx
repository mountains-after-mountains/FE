import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Test from '@/pages/Test'
import Home from '@/pages/home'
import Mountain from '@/pages/mountain'
import RegisterSchedule from '@/pages/schedule/register'
import KakaoRedirect from '@/pages/login/components/KakaoRedirect'
import ModifySchedule from '@/pages/schedule/modify'
import ListSchedule from '@/pages/schedule/list'
import Invitation from '@/pages/invitation'
import useAuthStore from '@/store/useAuthStore.ts'
import MakeInvitation from '@/pages/invitation/make'
import AcceptInvitation from '@/pages/invitation/accept'
import DetailSchedule from '@/pages/schedule/detail'
import WelcomePage from '@/pages/login/WelcomePage.tsx'
import Search from '@/pages/search'
import Contents from '@/pages/contents'
import Layout from '@/components/layouts/Layout'
import Withdraw from '@/pages/withdraw'
import Login from '@/pages/login'

const AppRoutes = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <Layout>
      <Router>
        <AppRoutesWithLocation isAuthenticated={isAuthenticated} />
      </Router>
    </Layout>
  )
}

const AppRoutesWithLocation = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const location = useLocation()

  const noAuthPaths = ['/schedule/detail', '/invitation/accept', '/auth']
  const shouldShowLoginModal = !isAuthenticated && !noAuthPaths.some(path => location.pathname.startsWith(path))

  return (
    <>
      {shouldShowLoginModal && <Login />}
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/:id?" element={<Home />} />
        <Route path="mountain/:mountainId" element={<Mountain />} />
        <Route path="contents/:contentsId" element={<Contents />} />
        <Route path="test" element={<Test />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="/schedule" element={<ListSchedule />} />
        <Route path="/schedule/register/:mountainId?" element={<RegisterSchedule />} />
        <Route path="/schedule/modify/:scheduleId" element={<ModifySchedule />} />
        <Route path="/schedule/detail/:scheduleId" element={<DetailSchedule />} />
        <Route path="/auth" element={<KakaoRedirect />} />
        <Route path="invitation/:invitationId" element={<Invitation />} />
        <Route path="/invitation/make/:scheduleId" element={<MakeInvitation />} />
        <Route path="/invitation/accept/:invitationId" element={<AcceptInvitation />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default AppRoutes
