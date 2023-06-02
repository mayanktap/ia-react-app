import { Auth } from 'aws-amplify';
import { useRef } from 'react';
import './stylesheets/login.css';

const Login = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  async function signIn() {
    try {
      const user = await Auth.signIn(emailInput.current.value, passwordInput.current.value);
      console.log(user);
      window.location.replace(window.location.origin + '/');
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  return (
    <div>
      <div className="email-wrapper">
        <label className="email-label" htmlFor="email">Email</label>
        <input
          ref={emailInput}
          className="email-input"
          type="text"
          id="email"
          name="email" />
      </div>

      <div className="password-wrapper">
        <label className="password-label" htmlFor="password">Password</label>
        <input
          ref={passwordInput}
          className="password-input"
          type="password"
          id="password"
          name="password" />
      </div>

      <div className="login-btn-wrapper  u-pad-bottom">
        <button
          onClick={signIn}
          className='login-btn'>Login</button>
      </div>
    </div>
  );
};
  
export default Login;
