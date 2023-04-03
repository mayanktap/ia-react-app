import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './style.css';
import { 
  FAA, 
  nasalogo,
} from '../../assets/index';

const animation = { duration: 20000, easing: (t) => t };

export default function KeenSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 p-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 font-bold text-white">FAA 1</h1>
          <img src={FAA} className="max-w-full max-h-full" alt="FAA Logo"/>
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 font-bold text-white">NASA 2</h1>
          <img src={nasalogo} className="max-w-full max-h-full" alt="FAA Logo"/>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 font-bold text-white">FAA 3</h1>
          <img src={FAA} className="max-w-full max-h-full" alt="FAA Logo"/>
        </div>
      </div>
      <div className="keen-slider__slide number-slide4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 font-bold text-white">FAA 4</h1>
          <img src={FAA} className="max-w-full max-h-full" alt="FAA Logo"/>
        </div>
      </div>
      <div className="keen-slider__slide number-slide5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 font-bold text-white">FAA 5</h1>
          <img src={FAA} className="max-w-full max-h-full" alt="FAA Logo"/>
        </div>
      </div>
      <div className="keen-slider__slide number-slide6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 font-bold text-white">FAA 6</h1>
          <img src={FAA} className="max-w-full max-h-full" alt="FAA Logo"/>
        </div>
      </div>
    </div>
  );
}
