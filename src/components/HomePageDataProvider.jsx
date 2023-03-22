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
          <span className='text-gradient'>Join </span>
          <span className='text-gradient'>Our </span> 
          <span className='text-gradient'>Network</span>  
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our data providing community is made up of individuals who are passionate about data and technology. We believe that together, we can make a difference by providing high-quality data that can be used to improve businesses and communities.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We are looking to specialize in providing hyper-local data that can be captured by drones, catering to customers and applications that require more accurate and timely information than what is provided by forecast weather or satellite imagery.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Specifically, we are interested in identifying geospatial intelligence applications that necessitate this level of data granularity, and focusing our efforts on meeting those needs.
        </p>
        <Button styles={'mt-10'} />
      </div>
    </div>
  </section>
);

export default HomePageDataProvider;
