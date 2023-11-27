import {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '/src/_stores/authSlice'

import Field from '/src/_components/Field'
import Button from '/src/_components/Button'
import google from '/src/_assets/img/google.png'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {loading, auth, error} = useSelector((state) => state.auth)

  const [init, setInit] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login({email: email, password: password}))
  }

  useEffect(() => {
    setInit(true)
  }, [])

  useEffect(() => {
    if (init && Object.keys(auth).length > 0) {
      navigate('/')
    }
  }, [auth, init])

  return (
    <div id="auth">
      <header>
        <p>LOGO</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </header>
      <main>
        <form onSubmit={(e) => onSubmit(e)}>
          <p>Login</p>
          <div>
            <div>
              <Field
                label="E-mail"
                type="email"
                placeholder="john@example.com"
                required={true}
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Field
                label="Set Password"
                type="password"
                placeholder="********"
                required={true}
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p>{error}</p>}
          <Button type="submit">Login</Button>
          <div>
            <p>
              New to Xplore?&nbsp;
              <Link to="/signup">Sign up</Link>
            </p>
            <a href="#">Forgot Password?</a>
          </div>
          <div>
            <span>Or</span>
          </div>
          <Button disabled={loading} onClick={() => {}}>
            <img src={google} alt="img" />
            <p>Login with Google</p>
          </Button>
        </form>
      </main>
    </div>
  )
}
