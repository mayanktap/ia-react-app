import styles from '../style';
import { drone1 } from '../assets';
import GetStarted from './GetStarted';
import { 
  Stats, 
  HomePageUploadRequest, 
  HomePageCrowdSourcing,
  HomePageFeatures,
  HomePageDataProvider,
} from './'

const Hero = () => {
  return (
    <div>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 border border-gray-200 rounded-lg shadow dark:bg-gray-1000 mb-6">
            <p className='ml-2'>
              <span className="text-gradient text-bold"> SkyTL </span>
              <span className="text-white"> - Providing Hyper-Local Data to Make Informed Decisions</span>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-semibold ss:text-[72px] text-white ss:leading-[100.8px] leading-[75px]">
              Cutting-Edge <br className="sm:block hidden" />{' '}
              <span className="text-gradient uppercase">Geospatial-</span>{' '}
              <span className="text-gradient uppercase">Technology</span>{' '}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-semibold ss:text-[68px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Powered By UAS Technology
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            <span className="text-gradient"> SkyTL </span> 
            delivers cost-effective geospatial analytics powered by AI and multi-sensor data. Get informed insights anytime, anywhere. 
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
      <HomePageCrowdSourcing />
      <HomePageUploadRequest />
      <HomePageFeatures />
      <HomePageDataProvider />
    </div>
  );
};

export default Hero;
