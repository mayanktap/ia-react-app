import {
  nasalogo,
  noaalogo,
  FAA,
  us_air_force,
} from '../assets';
    
const features = [
  { name: 'NASA', logo: nasalogo, description: 'Conduct cutting-edge research and exploration of space.' },
  { name: 'FAA', logo: FAA, description: 'Ensure the safety and efficiency of civil aviation.' },
  { name: 'NOAA', logo: noaalogo, description: 'Monitor and predict changes in the environment and climate.' },
  { name: 'US Air Force', logo: us_air_force, description: 'Defend the United States through control and exploitation of air and space.' },
];
    
export default function HomePageCustomer() {
  return (
    <div className="bg-none">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient">Our </span>
            <span className="text-gradient">Customers</span>
          </h2> 
          <p className="mt-4 text-white">
            We provide the platform and resources to collect, analyze, and make predictions for hyper-local applications with data collected by UAS.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">{feature.name}</dt>
                <div className="flex items-center mt-2">
                  <img
                    src={feature.logo}
                    alt={feature.name}
                    className="object-contain rounded-lg w-1/4 h-1/4 mr-4"
                  />
                  <dd className="text-sm text-gray-400">{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
