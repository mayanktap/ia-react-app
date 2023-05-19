import Slider from 'react-touch-drag-slider';
import { useState, useEffect } from 'react';
import { wildfire_forest_blaze, drone_6021114_1280, Red_flag_Sleeper } from '../assets';

const HomeSlider = () => {
  const slides = [
    {
      image: drone_6021114_1280,
      heading: 'Teaming of Manned and Unmanned Multi-Aircraft Missions Made Possible​', 
      paragraph: 'The DoD is looking for new ways to deploy robotic platforms for intelligence, surveillance and reconnaissance (ISR) and other missions, however, for aerial robotic platforms, the lack of domain awareness has become an issue. Airspace management of unmanned operations is not currently integrated with manned or ground operations.​ Through SkyTL, we are supporting the Air Force to enable aerial manned-unmanned teaming operations using dynamic airspace deconfliction algorithms.​',
    },
    {
      image: wildfire_forest_blaze,
      heading: 'Using High Resolution Local Data to Predict Fire Risk',
      paragraph: 'Satellite data is used today to provide fire risk information due to factors such as vegetation patterns, topography, and weather conditions. However, localized droughts, heat waves, and wind events can create ideal conditions for fires to start and spread that are not detectable by satellite imagery. Working with NASA and NOAA, we are combining high-resolution data from UAS with ground observations and expert knowledge to help emergency managers develop effective strategies for fire prevention and management.',
    },
    {
      image: Red_flag_Sleeper,
      heading: 'Early-detection water quality monitoring system from crowdsourced UAS data​',
      paragraph: 'Red tide outbreaks in Florida have become more frequent and severe, leading to concerns about the long-term health of marine ecosystems and the local economy, and North Carolina has started to see unprecedented red tide outbreaks. Unmanned Aircraft Systems (UAS) offer an opportunity to integrate low-cost sensors in rapidly deployable, highly flexible, and multi-purpose platforms, allowing data collection over different areas. Using UAS data combined with artificial intelligence processes and analysis tools, SkyTL can generate heatmaps of red tide and turbidity estimates that are available to municipalities and general users.​',
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideComplete = (index) => {
    setDropdownOpen(false); // Reset dropdownOpen state when transitioning to a new slide
    setActiveSlide(index);
  };

  useEffect(() => {
    setDropdownOpen(false); // Close the dropdown when the active slide changes
  }, [activeSlide]);

  return (
    <div className="slider-container h-[700px] overflow-hidden rounded-lg">
      <Slider onSlideComplete={handleSlideComplete}>
        {slides.map(({ image, heading, paragraph }, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full h-full bg-gradient-to-b from-transparent via-black to-transparent bg-opacity-60"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="px-8 text-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg m-20 p-10">
              <h1 className="text-3xl md:text-2xl lg:text-2xl xl:text-3xl uppercase mb-2 text-teal-500 font-semi-bold font-sans">
                {heading}
              </h1>
              <div className="w-full border-b-2 border-teal-500 mx-auto my-2"></div> {/* Divider Line */}
              <div className="relative">
                <div
                  className="cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <p className={`mx-0 font-poppins font-normal md:mx-auto mt-6 text-base md:text-lg lg:text-xl font-sans ${
                    dropdownOpen ? 'mb-6' : ''
                  }`}>
                    {dropdownOpen ? paragraph : 'Click for more information'}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );  
};

export default HomeSlider;