import PropTypes from 'prop-types';
import { home_features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex-row p-6 ${index !== home_features.length - 1 ? 'mb-6' : 'mb-0'} feature-card border border-gray-200 rounded-lg shadow dark:bg-gray-800`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
};

const HomePageDataProvider = () => (
  <section id="features" className={layout.section}>
    <div className="flex flex-row-reverse justify-between">
      <div className={`${layout.sectionImg} flex-row flex-wrap justify-center`}>
        {home_features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Join 
          <br className="sm:block hidden" /> Our Network
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Gain access to valuable insights derived from crowd-sourced data, processed through our advanced algorithms and machine learning models.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          These insights can help you make more informed decisions and minimize risk. SkyTL&#39;s intelligence services provide valuable insights to global insurance and commercial clients. 
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From improving situational awareness during disaster response operations to creating more accurate weather forecasts, SkyTL is the solution you need.
        </p>
        <Button styles={'mt-10'} />
      </div>
    </div>
  </section>
);

export default HomePageDataProvider;
