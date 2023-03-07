import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  nasalogo,
  noaalogo,
  FAA,
} from '../../assets/index';

const customerLogos = [
  nasalogo,
  noaalogo,
  FAA,
  'https://cdn.scale.com/file/scale-production/misc/Zoox-logo.png',
  'https://cdn.scale.com/file/scale-production/misc/Zoox-logo.png',
  'https://cdn.scale.com/file/scale-production/misc/Zoox-logo.png',
  'https://cdn.scale.com/file/scale-production/misc/Zoox-logo.png',
];

const CustomerChevron = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customerLogos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + customerLogos.length) % customerLogos.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customerLogos.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='bg-gradient-to-r from-pink-800 to-blue-800 text-white py-12'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>Customers</h2>
        <div className='relative'>
          <div className='absolute top-1/2 transform -translate-y-1/2 left-0'>
            <button onClick={prevSlide} className='text-white text-2xl focus:outline-none'>
              <FiChevronLeft />
            </button>
          </div>
          <div className='absolute top-1/2 transform -translate-y-1/2 right-0'>
            <button onClick={nextSlide} className='text-white text-2xl focus:outline-none'>
              <FiChevronRight />
            </button>
          </div>
          <div className='flex justify-between h-40 overflow-hidden'>
            <TransitionGroup className='flex'>
              {customerLogos.map((logo, index) => (
                <CSSTransition
                  key={index}
                  classNames='fade'
                  timeout={1000}
                >
                  <div
                    className='w-1/5 md:w-1/6 flex-shrink-0'
                    style={{
                      opacity: currentIndex === index ? 1 : 0,
                      transition: 'opacity 1s ease-out',
                    }}
                  >
                    <img src={logo} alt='customer logo' className='w-full h-full object-contain' />
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerChevron;
