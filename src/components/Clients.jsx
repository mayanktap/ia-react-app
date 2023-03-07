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
  <section className={`${styles.flexCenter} ${styles.paddingY}`}>
    <div className=''>
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
