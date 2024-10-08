import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthPage from "./pages/auth/AuthPage"
import PageLayout from "./layouts/pageLayouts/PageLayout"
import ProfilePage from "./pages/profile/ProfilePage"
import useAuthStore from "./store/authStore"


function App() {
  const authUser = useAuthStore((state) => state.user);

  return (
    <PageLayout>
    <Routes>
      <Route path="/" element={authUser ? <HomePage/> : <Navigate to={'/auth'}/>} />
      <Route path="/auth" element={!authUser ? <AuthPage/> : <Navigate to={'/'}/>}/>
      <Route path="/:username" element={<ProfilePage/> }/>
    </Routes>
    </PageLayout>
  )
}

export default App
