import { wildfiremp4 } from '../../assets/index';

const AboutVideo = () => {

  return (
    <div className="flex-row items-center justify-between mt-10">
      <div className="mb-6 sm:mb-0">
        <video src={wildfiremp4} alt="Placeholder" className="h-auto rounded-lg object-cover object-center max-w-full" style={{ width: 'auto', height: 'auto' }} controls />
      </div>
  </div>
  );
};

export default AboutVideo;