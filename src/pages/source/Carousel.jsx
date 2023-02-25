import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const images = [
  {
    id: 1,
    alt: 'image1',
    src: 'https://via.placeholder.com/500x250/000000/FFFFFF/?text=Image+1',
  },
  {
    id: 2,
    alt: 'image2',
    src: 'https://via.placeholder.com/500x250/000000/FFFFFF/?text=Image+2',
  },
  {
    id: 3,
    alt: 'image3',
    src: 'https://via.placeholder.com/500x250/000000/FFFFFF/?text=Image+3',
  },
  {
    id: 4,
    alt: 'image4',
    src: 'https://via.placeholder.com/500x250/000000/FFFFFF/?text=Image+4',
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative w-full max-w-xl">
        <div className="relative">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                activeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 p-4 text-white transform -translate-y-1/2 focus:outline-none"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
        <button
          className="absolute top-1/2 right-0 p-4 text-white transform -translate-y-1/2 focus:outline-none"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
