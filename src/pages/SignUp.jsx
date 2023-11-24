import Field from '/src/_components/field'
import Button from '/src/_components/button'
import google from '/src/_assets/img/google.png'

export default function SignUp() {
  return (
    <div id="auth">
      <header>
        <p>LOGO</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </header>
      <main>
        <form action="?">
          <p>Sign up</p>
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
              <Field
                label="Phone Number"
                type="number"
                name="phone"
                placeholder="+628123456789"
                min="0"
                onChange={() => {}}
              />
            </div>
            <div>
              <Field label="First Name" name="first_name" placeholder="John" required={true} onChange={() => {}} />
              <Field label="Last Name" name="last_name" placeholder="Doe" onChange={() => {}} />
            </div>
          </div>
          <Button type="submit" onClick={() => {}}>
            Sign up
          </Button>
          <div>
            <p>
              Already Have An Account?&nbsp;
              <a href="/login">Login</a>
            </p>
          </div>
          <div>
            <span>Or</span>
          </div>
          <Button onClick={() => {}}>
            <img src={google} alt="img" />
            <p>Sign up with Google</p>
          </Button>
        </form>
      </main>
    </div>
  )
}
