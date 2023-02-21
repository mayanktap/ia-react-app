import styles from '../style';
import { drone1 } from '../assets';
import GetStarted from './GetStarted';
import Stats from './stats'

const Hero = () => {
  return (
    <div>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 border border-gray-200 rounded-lg shadow dark:bg-gray-1000">
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white"></span> SkyTL{' '}
              <span className="text-white"> - The Ultimate Solution for Drone Data Management</span>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-semibold ss:text-[72px] text-white ss:leading-[100.8px] leading-[75px]">
              Cutting-Edge <br className="sm:block hidden" />{' '}
              <span className="text-gradient">UAS TECHNOLOGY</span>{' '}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-semibold ss:text-[68px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              TO POWER YOUR BUSINESS.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Do not let data management be a hindrance to your operations. Let SkyTL make your data homogeneous and accessible,
            giving you the information you need, when you need it.
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 relative`}>
          <img src={drone1} alt="billing" className="lg:w-[80%] lg:h-[80%] w-[100%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
      <Stats />
    </div>
  );
};

export default Hero;
