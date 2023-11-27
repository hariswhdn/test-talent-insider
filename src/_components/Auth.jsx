import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Auth({children}) {
  const navigate = useNavigate()

  const {auth} = useSelector((state) => state.auth)

  useEffect(() => {
    if (Object.keys(auth).length === 0) {
      navigate('/login')
    }
  }, [auth])

  return children
}
