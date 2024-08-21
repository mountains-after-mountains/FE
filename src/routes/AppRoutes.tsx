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
import MakeInvitation from '@/pages/invitation/make'
import AcceptInvitation from '@/pages/invitation/accept'
import DetailSchedule from '@/pages/schedule/detail'
import WelcomePage from '@/pages/login/WelcomePage.tsx'
import Search from '@/pages/search'
import Contents from '@/pages/contents'
import Layout from '@/components/layouts/Layout'

const AppRoutes = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <Layout>
      <Router>
        {!isAuthenticated && <Login />}
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/" element={<Home />} />
          <Route path="mountain/:mountainId" element={<Mountain />} />
          <Route path="contents/:contentsId" element={<Contents />} />
          <Route path="test" element={<Test />} />
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="/schedule" element={<ListSchedule />} />
          <Route path="/schedule/register" element={<RegisterSchedule />} />
          <Route path="/schedule/modify/:scheduleId" element={<ModifySchedule />} />
          <Route path="/schedule/detail/:scheduleId" element={<DetailSchedule />} />
          <Route path="/auth" element={<KakaoRedirect />} />
          <Route path="invitation/:invitationId" element={<Invitation />} />
          <Route path="/invitation/make/:scheduleId" element={<MakeInvitation />} />
          <Route path="/invitation/accept" element={<AcceptInvitation />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Layout>
  )
}

export default AppRoutes
