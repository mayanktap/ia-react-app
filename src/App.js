import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import styles from './style';
import awsExports from './aws-exports';
import {
  AboutUs,
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Industry,
  Navbar,
  Testimonials,
  Platform,
  UasOperator,
  UserAuthentication,
} from './components';
import UploadMedia from './pages/upload_media/UploadMedia';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

Amplify.configure(awsExports);

const App = () => {

  useEffect(() => {
    document.title = 'SkyTL Cloud';
  }, []);

  if (['/login', '/login/'].includes(window.location.pathname)) {
    return (
      <>
        <div>
          <Routes>
            <Route path="/login" element={<UserAuthentication />} />
          </Routes>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Routes>
            <Route path="/login" element={<UserAuthentication />} />
          </Routes>
        </div>
        <div className='bg-primary w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <Navbar />
          </div>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/industries" element={<Industry />} />
                <Route path="/uas-operators" element={<UasOperator />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/features" element={<Business />} />
                <Route path="/product" element={<Billing />} />
                <Route path="/carddeal" element={<CardDeal />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/cta" element={<CTA />} />
                <Route path="/upload_media" element={<UploadMedia />} />
                <Route path="/platform" element={<Platform />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default App;
