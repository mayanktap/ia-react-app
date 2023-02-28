import styles from '../style';
import { 
  BetterData, 
  UploadSection,
  MachineLearning,
  HowItWorks,
  Studio,
  WhySkyTL,
} from '../pages/source/index';

const Clients = () => (
  <section className={`${styles.flexCenter} bg-gradient-to-r from-gray-900 via-black to-gray-900 my-4`}>
    <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900'>
      <Studio />
      <HowItWorks />
      <UploadSection />
      <WhySkyTL />
      <MachineLearning />
      <BetterData />
    </div>  
  </section>
);

export default Clients;
