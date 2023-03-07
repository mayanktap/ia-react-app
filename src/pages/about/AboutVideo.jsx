import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';

import {
  wildfiremp4,
} from '../../assets/index';

const AboutVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className='relative py-10'>
      {/* Placeholder for the video */}
      <img src={wildfiremp4} alt='video placeholder' />

      {/* Play button */}
      {!isPlaying && (
        <button onClick={handlePlay} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none'>
          <FiPlay className='text-white text-6xl' />
        </button>
      )}

      {/* Video */}
      {isPlaying && (
        <video
          src={wildfiremp4}
          className='w-full h-full object-cover object-center absolute top-0 left-0 z-10'
          autoPlay
          controls
          onEnded={handlePause}
        />
      )}
    </div>
  );
};

export default AboutVideo;
