import {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signup} from '/src/_stores/authSlice'

import Field from '/src/_components/Field'
import Button from '/src/_components/Button'
import google from '/src/_assets/img/google.png'

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {loading, auth, error} = useSelector((state) => state.auth)

  const [init, setInit] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signup({email: email, password: password, phoneNumber: phone, firstName: firstName, lastName: lastName}))
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
          <p>Sign up</p>
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
              <Field
                label="Phone Number"
                type="number"
                placeholder="+628123456789"
                min="0"
                disabled={loading}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Field
                label="First Name"
                placeholder="John"
                required={true}
                disabled={loading}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Field
                label="Last Name"
                placeholder="Doe"
                disabled={loading}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          {error && <p>{error}</p>}
          <Button type="submit" disabled={loading}>
            Sign up
          </Button>
          <div>
            <p>
              Already Have An Account?&nbsp;
              <Link to="/login">Login</Link>
            </p>
          </div>
          <div>
            <span>Or</span>
          </div>
          <Button disabled={loading} onClick={() => {}}>
            <img src={google} alt="img" />
            <p>Sign up with Google</p>
          </Button>
        </form>
      </main>
    </div>
  )
}
