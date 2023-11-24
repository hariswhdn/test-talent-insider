import Field from '/src/_components/field'
import Button from '/src/_components/button'
import google from '/src/_assets/img/google.png'

export default function Login() {
  return (
    <div id="auth">
      <header>
        <p>LOGO</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </header>
      <main>
        <form action="?">
          <p>Login</p>
          <div>
            <div>
              <Field
                label="E-mail"
                type="email"
                name="email"
                placeholder="john@example.com"
                required={true}
                onChange={() => {}}
              />
              <Field
                label="Set Password"
                type="password"
                name="password"
                placeholder="********"
                required={true}
                onChange={() => {}}
              />
            </div>
          </div>
          <Button type="submit" onClick={() => {}}>
            Login
          </Button>
          <div>
            <p>
              New to Xplore?&nbsp;
              <a href="/signup">Sign up</a>
            </p>
            <a href="#">Forgot Password?</a>
          </div>
          <div>
            <span>Or</span>
          </div>
          <Button onClick={() => {}}>
            <img src={google} alt="img" />
            <p>Login with Google</p>
          </Button>
        </form>
      </main>
    </div>
  )
}
