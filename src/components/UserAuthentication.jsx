// import { withAuthenticator } from '@aws-amplify/ui-react';
import { Tabs, TabItem } from '@aws-amplify/ui-react';
import Login from './../pages/user_authentication/Login';
import Signup from './../pages/user_authentication/Signup';
import './stylesheets/user_authentication.css';

const UserAuthentication = () => {
  return (
    <div className="user-auth-wrapper">
      <Tabs className='user-tabs'>
        <TabItem
          className='js-login'
          title="Login">
          <Login />
        </TabItem>
        <TabItem
          className='js-signup'
          title="Signup">
          <Signup />
        </TabItem>
      </Tabs>
    </div>
  );
};

export default UserAuthentication;
