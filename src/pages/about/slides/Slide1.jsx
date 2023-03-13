import { FAA } from '../../../assets/index';

const Slide1 = () => {
  return (
    <div className="number-slide1">
      <div className="slide-content flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Title of Slide 1</h1>
        <img src={FAA} alt="Slide 1" className="w-1/2 sm:w-2/5 object-contain" />
      </div>
    </div>
  );
};

export default Slide1;
