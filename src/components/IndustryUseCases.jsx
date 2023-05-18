import { Link } from 'react-router-dom';
import {
  fire,
  F22,
  teaming_aircraft,
  wildfire_close,
  wildfire_wui,
  water_pollution,
} from '../assets/index';

export default function IndustryUseCases() {
  const images = [
    { src: fire, alt: 'Fire', title: 'Wildfire', text: 'Using High Resolution Local Data to Predict Fire Risk.' },
    { src: F22, alt: 'UAS Platform', title: 'UAS Platform', text: 'the integration of UAS​ operations during emergency response operations.​' },
    { src: teaming_aircraft, alt: 'Teaming Aircraft', title: 'Teaming Aircraft', text: 'Teaming of Manned and Unmanned Multi-Aircraft Missions​.' },
    { src: wildfire_close, alt: 'Wildfire Close', title: 'Enterprise Data Applications', text: 'ISR Data Management and AI-applications that are Securely Available​.' },
    { src: wildfire_wui, alt: 'Ember Spread Forecasting', title: 'Ember Spread Forecasting', text: 'Accurate forecasting of ember spread in the Wildland Urban Interface​.' }, 
    { src: water_pollution, alt: 'Water Pollution', title: 'Water Pollution', text: 'Early-detection water quality monitoring system from crowdsourced UAS data​.' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        <span>Industry </span>
        <span>Use </span>
        <span>Cases </span>  
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden transition-all duration-200 hover:opacity-80">
            <Link to="#">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </Link>
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 p-4 transition-opacity duration-200 hover:opacity-90">
              <div className="flex flex-col justify-center items-center h-full">
                <h3 className="text-lg font-bold text-white">{image.title}</h3>
                <p className="text-gray-300 mt-2">{image.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
