import { FAA } from '../../assets/index';
import { useState } from 'react';

function TestimonialFAA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`py-5 rounded-lg mt-10 bg-gray-800 text-white ${isHovered ? 'opacity-20' : 'opacity-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base font-semibold tracking-wide uppercase'>faa</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'>
            See what our customers have to say
          </p>
        </div>

        <div className='mt-10'>
          <div className={`relative ${isHovered ? 'opacity-100' : 'opacity-100'}`}>
            <img src={FAA} alt='Toyota logo' className='h-16 w-auto sm:h-20' />
            <p className='mt-2 text-red'>
              "Quote From Client"
            </p>
            <div className='mt-4'>
              <p className='text-base font-semibold'>Adrien Gaidon</p>
              <p className='text-base'>Machine Learning Lead, TRI</p>
            </div>
            {isHovered && (
              <div className='absolute inset-0 flex justify-center items-center'>
                <button className='text-white 
                text-extrabold
                bg-gradient-to-r from-orange-400 via-orang-500 to-orange-600
                hover:bg-gradient-to-br
                focus:ring-4 focus:outline-none focus:ring-teal-300
                dark:focus:ring-teal-800
                font-medium rounded-lg text-sm
                px-5 py-2.5
                text-center'>
                  Read More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialFAA;