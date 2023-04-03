import {
  agriculture_drone,
  pollution,
  crane,
  wildfire_close,
} from '../assets/index';

const features = [
  { name: 'Wildfire Mitigation', description: 'Provide real-time data on wildfires for better decision-making and resource deployment.' },
  { name: 'Emergency Response', description: 'Transform emergency response with rapid information and supply delivery.' },
  { name: 'Water Quality', description: 'Equipping UAS with water quality sensors, hyper-local data on water quality can be obtained, enhancing environmental monitoring and management.' },
  { name: 'Agriculture', description: 'Revolutionize farming by providing valuable insights on crops, soil health, and irrigation systems.' },
  { name: 'Air Quality', description: 'Monitor precise pollution data for targeted control, public health management, and urban planning decisions.' },
  { name: 'Project Mangement', description: 'Facilitate improved situational awareness, facilitate progress tracking, and enhance communication among team members.' },
];
    
export default function HomePageFeatures() {
  return (
    <div className="bg-none">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient">Industry </span>
            <span className="text-gradient">Applications</span>
          </h2> 
          <p className="mt-4 text-white">
              We provide the platform and resources to collect, analyze, and make predictions for hyper-local applications with data collected by UAS.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={wildfire_close}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={agriculture_drone}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={pollution}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={crane}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  ); 
}