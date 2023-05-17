import Slider from 'react-touch-drag-slider';
import { wildfire_forest_blaze, drone_6021114_1280, Red_flag_Sleeper } from '../assets';

const HomeSlider = () => {
  const slides = [
    {
      image: wildfire_forest_blaze,
      heading: 'Using High Resolution Local Data to Predict Fire Risk',
      paragraph: 'Satellite data is used today to provide fire risk information due to factors such as vegetation patterns, topography, and weather conditions. However, localized droughts, heat waves, and wind events can create ideal conditions for fires to start and spread that are not detectable by satellite imagery. Working with NASA and NOAA, we are combining high-resolution data from UAS with ground observations and expert knowledge to help emergency managers develop effective strategies for fire prevention and management.',
    },
    {
      image: drone_6021114_1280,
      heading: 'Teaming of Manned and Unmanned Multi-Aircraft Missions Made Possible​',
      paragraph: 'The DoD is looking for new ways to deploy robotic platforms for intelligence, surveillance and reconnaissance (ISR) and other missions, however, for aerial robotic platforms, the lack of domain awareness has become an issue. Airspace management of unmanned operations is not currently integrated with manned or ground operations.​ Through SkyTL, we are supporting the Air Force to enable aerial manned-unmanned teaming operations using dynamic airspace deconfliction algorithms.​',
    },
    {
      image: Red_flag_Sleeper,
      heading: 'Early-detection water quality monitoring system from crowdsourced UAS data​',
      paragraph: 'Red tide outbreaks in Florida have become more frequent and severe, leading to concerns about the long-term health of marine ecosystems and the local economy, and North Carolina has started to see unprecedented red tide outbreaks. Unmanned Aircraft Systems (UAS) offer an opportunity to integrate low-cost sensors in rapidly deployable, highly flexible, and multi-purpose platforms, allowing data collection over different areas. Using UAS data combined with artificial intelligence processes and analysis tools, SkyTL can generate heatmaps of red tide and turbidity estimates that are available to municipalities and general users.​',
    },
  ];

  return (
    <div className="slider-container" style={{ height: '700px' }}>
      <Slider
        onSlideComplete={(i) => {
          console.log('finished dragging, current slide is', i);
        }}
        onSlideStart={(i) => {
          console.log('started dragging on slide', i);
        }}
        activeIndex={0}
        threshHold={100}
        transition={0.5}
        scaleOnDrag={true}
      >
        {slides.map(({ image, heading, paragraph }, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full h-full bg-gray-900"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-opacity-80 px-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase mb-4 text-white text-center">
                {heading}
              </h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase mb-4 text-white text-center">
                Powered By UAS Technology
              </h1>
              <p className="mx-0 text-gradient font-poppins font-normal md:mx-auto mt-4 text-base md:text-lg lg:text-xl text-center">
                {paragraph}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;