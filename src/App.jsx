import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Auth from '/src/_components/Auth'
import Home from '/src/pages/home'
import SignUp from '/src/pages/SignUp'
import Login from '/src/pages/Login'
import Profile from '/src/pages/profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Auth>
              <Home />
            </Auth>
          }
        />
        <Route
          path="/profile"
          element={
            <Auth>
              <Profile />
            </Auth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
