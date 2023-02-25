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
  <section className={`${styles.flexCenter} my-4`}>
    <div >
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
