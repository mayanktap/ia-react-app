import './stylesheets/login.css';
import { Auth } from 'aws-amplify';
import { useRef, useState } from 'react';

const Signup = () => {
  const [showConfirmationCode, setShowConfirmationCode] = useState(false);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);
  const confirmationemailInput = useRef(null);
  const confirmationCodeInput = useRef(null);

  async function signupClick() {
    try {
      if (passwordInput.current.value === confirmPasswordInput.current.value) {
        const { user } = await Auth.signUp({
          username: emailInput.current.value,
          password: passwordInput.current.value,
          attributes: {
            email: emailInput.current.value,
          },
          autoSignIn: { // optional - enables auto sign in after user is confirmed
            enabled: true,
          },
        });
        console.log(user);
        setShowConfirmationCode(true);
      }
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(confirmationemailInput.current.value, confirmationCodeInput.current.value);
      window.location.replace(window.location.origin + '/login');
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  if (showConfirmationCode) {
    return (
      <div>
        <h3 className='account-confirmation'>Account Confirmation</h3>
        <div className="confirmation-email-wrapper">
          <label className="confirmation-email-label" htmlFor="confirmationemail">Email</label>
          <input
            ref={confirmationemailInput}
            className="confirmation-email-input"
            type="text"
            id="confirmationemail"
            name="confirmationemail" />
        </div>
  
        <div className="code-wrapper">
          <label className="code-label" htmlFor="confirmationcode">code</label>
          <input
            ref={confirmationCodeInput}
            className="code-input"
            type="text"
            id="confirmationcode"
            name="confirmationcode" />
        </div>

        <div className="code-btn-wrapper  u-pad-bottom">
          <button
            onClick={confirmSignUp}
            className='submit-code-btn'>Submit</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="email-wrapper">
          <label className="email-label" htmlFor="signupemail">Email</label>
          <input
            ref={emailInput}
            className="email-input"
            type="text"
            id="signupemail"
            name="signupemail" />
        </div>
  
        <div className="password-wrapper">
          <label className="password-label" htmlFor="signuppassword">Password</label>
          <input
            ref={passwordInput}
            className="password-input"
            type="password"
            id="signuppassword"
            name="signuppassword" />
        </div>
  
        <div className="confirm-password-wrapper">
          <label className="confirm-password-label" htmlFor="signupconfirmpassword">Confirm Password</label>
          <input
            ref={confirmPasswordInput}
            className="confirm-password-input" 
            type="password"
            id="signupconfirmpassword"
            name="signupconfirmpassword" />
        </div>
  
        <div className="signup-btn-wrapper  u-pad-bottom">
          <button
            className='signup-btn'
            onClick={signupClick}>Sign Up</button>
        </div>
      </div>
    );
  }
};
  
export default Signup;
