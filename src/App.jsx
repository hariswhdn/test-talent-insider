import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Home from '/src/pages/home'
import SignUp from '/src/pages/signup'
import Login from '/src/pages/login'
import Profile from '/src/pages/profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
