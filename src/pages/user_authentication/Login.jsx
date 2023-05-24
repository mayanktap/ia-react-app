import './stylesheets/login.css';

const Login = () => {
  return (
    <div>
      <div className="email-wrapper">
        <label className="email-label" htmlFor="email">Email</label>
        <input className="email-input" type="text" id="email" name="email" />
      </div>

      <div className="password-wrapper">
        <label className="password-label" htmlFor="password">Password</label>
        <input className="password-input" type="text" id="password" name="password" />
      </div>

      <div className="login-btn-wrapper  u-pad-bottom">
        <button className='login-btn'>Login</button>
      </div>
    </div>
  );
};
  
export default Login;
