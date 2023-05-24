// import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { Tabs, TabItem } from '@aws-amplify/ui-react';
import Login from './../pages/user_authentication/Login';
import Signup from './../pages/user_authentication/Signup';
import { useEffect, useState } from 'react';

import './stylesheets/user_authentication.css';

const UserAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: false }).then((user) => {
      console.log(user);
      setIsLoggedIn(true);
      window.location.replace(window.location.origin + '/');
    }).catch((err) => {
      setIsLoggedIn(false);
      console.log(err);
    });
  }, []);

  if (!isLoggedIn) {
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
  }
};

export default UserAuthentication;
