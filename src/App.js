import PropTypes from 'prop-types';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import styles from './style';
import awsExports from './aws-exports';
import { useEffect } from 'react';
// AWS Geo Map Services

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Testimonials,
} from './components';
import UploadMedia from './pages/upload_media/UploadMedia';
import GeoMap from './pages/geo_map/GeoMap';
import { Routes, Route } from 'react-router-dom';

Amplify.configure(awsExports);

const App = ({ signOut, user }) => {

  useEffect(() => {
    async function createTodoItem() {
      const todo = { name: 'My second todo', description: 'Hello world!' };

      /* create a todo */
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    }

    async function ListTodoItems() {
      const todos = await API.graphql(graphqlOperation(listTodos));
      console.log(30, todos);
    }

    ListTodoItems();
    createTodoItem();
  }, []);

  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/features" element={<Business />} />
              <Route path="/product" element={<Billing />} />
              <Route path="/carddeal" element={<CardDeal />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/cta" element={<CTA />} />
              <Route path="/upload_media" element={<UploadMedia />} />
              <Route path="/geo_map" element={<GeoMap />} />
            </Routes>
            <Footer />
          </div>
        </div>
        <div>
          <div className='bg-white'>
          </div>
          <h1 className='container mx-auto bg-gray-200'>
            Hello {user.username}
          </h1>
          <button className='text-dimWhite' onClick={signOut}>Sign out</button>
        </div>
      </div>
    </>
  );
};

App.propTypes = {
  signOut: PropTypes.func,
  user: PropTypes.object,
};

export default withAuthenticator(App);
