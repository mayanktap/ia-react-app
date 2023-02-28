import UseCasesSection from './UseCasesSection';
import { 
  wildfiremp4,
  agriculturemp4,
} from '../../assets/index';

const UseCasesPage = () => {
  const customerSuccessStories = [
    {
      coverImage: wildfiremp4,
      title: 'Enhancing Emergency Response Efforts for Wildfires',
      subtitle:
        'Advanced networking and situational awareness can play a crucial role in coordinating emergency response efforts during wildfires. Drones equipped with sensors can provide real-time data on the location, size, and intensity of the wildfire, allowing for more effective decision-making and deployment of resources. This technology can also aid in identifying areas of highest risk, as well as potential escape routes for those in danger. By leveraging the power of advanced networking and situational awareness, emergency response teams can better understand and respond to wildfires, ultimately reducing the impact of these disasters on communities and the environment.',
    },
    {
      coverImage: agriculturemp4,
      title: 'Boosting Crop Yield and Efficiencys',
      subtitle:
        'Drones have transformed the agricultural industry by enabling farmers to gather valuable insights and data on their crops, irrigation systems, and soil health. With the ability to conduct aerial surveys and capture high-resolution imagery, drones allow farmers to quickly identify water drainage issues, detect crop diseases or pests, and monitor livestock or forage conditions. These powerful tools also provide accurate inventory management and crop yield data, enabling farmers to make informed decisions and optimize their operations for maximum efficiency and profitability. By leveraging the capabilities of drones in agriculture, farmers can revolutionize the way they manage their land, improve crop yields, and drive sustainable growth for their business.',
    },
    {
      coverImage: wildfiremp4,
      title: 'Air and Water Quality Monitoring, Landfill and Waste Management Surveys',
      subtitle:
        'Drone technology is revolutionizing environmental sustainability efforts by providing real-time data on air and water quality, as well as enhancing landfill and waste management practices. Drones equipped with sensors can be deployed to monitor air and water quality in hard-to-reach areas, such as industrial sites or remote locations. This enables early detection and mitigation of environmental hazards, improving the overall health and safety of communities. In addition, drones can assist in landfill and waste management surveys by mapping out waste disposal sites, identifying areas of highest risk, and streamlining waste management operations. By leveraging the power of drone technology, we can enhance our understanding of the environment and implement more effective sustainability practices.',
    },
    {
      coverImage: wildfiremp4,
      title: 'Transforming Coasts, Waterways, and Marine Ports with Drone Technology',
      subtitle:
        'Drone technology is reshaping how we approach coasts, waterways, and marine ports by enabling detailed surveys of breakwaters, seawalls, and coastal erosion mapping. Drones equipped with high-resolution cameras and sensors can capture precise data on these structures, helping engineers and port authorities to identify areas of risk and prioritize maintenance and repair. Furthermore, drones can assist in wetland analysis and volume assessments, providing vital information for environmental flow planning and restoration efforts. In addition, drones can help detect flood risks, providing early warning systems to protect communities from potential disasters. By leveraging drone technology, we can better understand and manage our coasts, waterways, and marine ports, ensuring sustainable and efficient use of these vital resources.',
    },
  ];

  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gradient border border-gray-400 rounded-lg shadow dark:bg-gray-1000 mb-6 py-[10px]">
            Solving Real-World Problems
          </h2>
        </div>
        <div className="flex-wrap sm:flex justify-left">
          {customerSuccessStories.map((story) => (
            <div className="mx-4" key={story.title}>
              <UseCasesSection {...story} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage;
