import './stylesheets/login.css';

const Signup = () => {
  return (
    <div>
      <div className="email-wrapper">
        <label className="email-label" htmlFor="username">Email</label>
        <input className="email-input" type="text" id="email" name="email" />
      </div>

      <div className="password-wrapper">
        <label className="password-label" htmlFor="password">Password</label>
        <input className="password-input" type="text" id="password" name="password" />
      </div>

      <div className="confirm-password-wrapper">
        <label className="confirm-password-label" htmlFor="confirmpassword">Confirm Password</label>
        <input className="confirm-password-input" type="text" id="confirmpassword" name="confirmpassword" />
      </div>

      <div className="signup-btn-wrapper  u-pad-bottom">
        <button className='signup-btn'>Sign Up</button>
      </div>
    </div>
  );
};
  
export default Signup;
