import Slider from 'react-touch-drag-slider';
import { wildfire_forest_blaze, drone_6021114_1280, Red_flag_Sleeper } from '../assets';

const HomeSlider = () => {
  const slides = [
    {
      image: wildfire_forest_blaze,
      heading: 'Using High Resolution Local Data to Predict Fire Risk​',
      paragraph: 'Satellite data is used today to provide fire risk information due to factors such as vegetation patterns, topography, and weather conditions.​ However, localized droughts, heat waves, and wind events can create ideal conditions for fires to start and spread that are not detectable by satellite imagery.​ Working with NASA and NOAA, we are combining high resolution data from UAS with ground observations and expert knowledge to help emergency managers to develop effective strategies for fire prevention and management. ​',
    },
    {
      image: drone_6021114_1280,
      heading: 'Slide 2 Heading',
      paragraph: 'Slide 2 Description',
    },
    {
      image: Red_flag_Sleeper,
      heading: 'Slide 3 Heading',
      paragraph: 'Slide 3 Description',
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-4 text-white">
                {heading}
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase mb-4 text-white">
                Powered By UAS Technology
              </h1>
              <p className="mx-0 text-gradient font-poppins font-semibold md:mx-auto mt-4 text-lg md:text-xl lg:text-2xl text-left">
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
