import PropTypes from 'prop-types';
import { features } from '../../constants';
import styles, { layout } from '../../style';
import Button from '../../components/Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex-row p-6 ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card border border-gray-200 rounded-lg shadow dark:bg-gray-800`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue ${styles.paragraph}`}>
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

const BusinessStart = () =>  (
  <div id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        Powerful Image Processing,
        <br className="sm:block hidden text-gradient" /> for Various Applications.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our image processing capabilities go beyond simple image storage. 
        We use machine learning to turn raw drone footage into meaningful data that businesses can use for a wide range of applications. 
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        From improving situational awareness during disaster response operations to creating more accurate weather forecasts, SkyTL is the solution you need.
      </p>
      <Button styles={'mt-10'} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </div>
);

export default BusinessStart;
