import { lidar_of_london } from '../assets';
import {
  HomePageCustomer,
  HyperLocalData,
  HomeSlider,
  HomePageMachineLearning,
} from './';

const Hero = () => {
  return (
    <div>
      <section style={{ backgroundImage: `url(${lidar_of_london})`, backgroundSize: 'cover' }}>
        <div className="py-32 flex justify-start">
          <div className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-opacity-80">
            <div className="text-white px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
                Actionable <br className="sm:block hidden" />
                <span className="text-gradient">Geospatial Intelligence</span>
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase mb-4">
                Powered By UAS Technology
              </h1>
              <p className="mx-0 text-gradient font-poppins font-semibold md:mx-auto mt-4 text-lg md:text-xl lg:text-2xl text-left">
                Informed decisions are now possible through data that is unique to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="mb-8 mt-8">
          <HyperLocalData />
        </div>
      </section>
      {/* <Stats /> */}
      <HomePageMachineLearning />
      <div className="slider-container">
        <HomeSlider />
      </div>
      <HomePageCustomer />
    </div>
  );
};

export default Hero;
