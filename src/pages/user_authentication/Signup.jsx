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
  const firstnameInput = useRef(null);
  const lastnameInput = useRef(null);
  const groupOptions = [
    { id: 0, value: 'None' },
    { id: 1, value: 'Improving Aviation' },
    { id: 2, value: 'Skytl' },
    { id: 3, value: 'Federal Aviation Administration' },
  ];
  const [groupValue, setGroupValue] = useState('');
  const handleChange = (event) => {
    setGroupValue(event.target.value);
  };
  const [errorType, setErrorType] = useState('');

  async function signupClick() {
    if (validateSignUpData()) {
      try {
        if (passwordInput.current.value === confirmPasswordInput.current.value) {
          const { user } = await Auth.signUp({
            username: emailInput.current.value,
            password: passwordInput.current.value,
            attributes: {
              given_name: firstnameInput.current.value,
              family_name: lastnameInput.current.value,
              email: emailInput.current.value,
              'custom:group': groupValue,
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
  }

  function validateSignUpData() {
    if (!firstnameInput.current.value) {
      setErrorType('firstname');
      return false;
    } else if (!lastnameInput.current.value) {
      setErrorType('lastname');
      return false;
    } else if (!emailInput.current.value || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.current.value))) {
      setErrorType('email');
      return false;
    } else if (!passwordInput.current.value || passwordInput.current.value !== confirmPasswordInput.current.value) {
      setErrorType('password');
      return false;
    } else {
      setErrorType('');
      return true;
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
        <div className="firstname-wrapper">
          <label className="firstname-label" htmlFor="firstname">First Name</label>
          <input
            ref={firstnameInput}
            className="firstname-input"
            type="text"
            id="firstname"
            name="firstname" />
        </div>
        { errorType == 'firstname' && <div className='error-msg'>Enter valid Firstname</div> }

        <div className="lastname-wrapper">
          <label className="lastname-label" htmlFor="lastname">Last Name</label>
          <input
            ref={lastnameInput}
            className="lastname-input"
            type="text"
            id="lastname"
            name="lastname" />
        </div>
        { errorType == 'lastname' && <div className='error-msg'>Enter valid Last Name</div> }

        <div className="email-wrapper">
          <label className="email-label" htmlFor="signupemail">Email</label>
          <input
            ref={emailInput}
            className="email-input"
            type="text"
            id="signupemail"
            name="signupemail" />
        </div>
        { errorType == 'email' && <div className='error-msg'>Enter valid Email ID</div> }

        <div className='group-select-wrapper'>
          <label className="group-label">Select Group</label>
          <select className='user-group-select' value={groupValue} onChange={handleChange}>
            {groupOptions.map((option) => (
              <option value={option.value} key={option.id}>{option.value}</option>
            ))}
          </select>
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
        { errorType == 'password' && <div className='error-msg'>Password does not match with Confirm Password</div> }

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
