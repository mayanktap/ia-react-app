const HomePageMachineLearning = () => {
  return (
    <section className="text-white">
      <div className="container px-4 py-12 mx-auto">
        <h2 className="text-3xl font-bold text-teal-500 mb-8">Products and Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">We Provide The Intelligence You Need</h3>
            <p className="mb-4">We provide high-quality, scalable, and maintanable ML/AI services that can help you train your business applications.</p>
            <ul className="list-disc ml-4 mb-4">
              <li>Intelligence services powered by advanced algorithms and machine learning models.</li>
              <li>Data storage, processing, and distribution for UAS sensor and visual data.</li>
              <li>Crowdsourcing capabilities to collect and process data from around the world.</li>
              <li>Real-time data streaming and visualization from in-field operations.</li>
            </ul>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-medium">Learn more</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Use Cases</h3>
            <p className="mb-4">We provides actionable intelligence by gathering, processing and distributing UAS sensor and visual data.</p>
            <ul className="list-disc ml-4 mb-4">
              <li>Environmental purposes, air or water quality monitoring, and landfill and waste management surveys can be conducted.</li>
              <li>In weather, data can be gathered in inhospitable or extreme locations.</li>
              <li>In agriculture, drones can be used to study irrigation systems, yield quantity, and soil analysis.</li>
              <li>In fire risk assessment, adjustor assistance, and post-damage assessment, drones can play an important role.</li>
              <li>Surveys of breakwaters and seawalls, coastal erosion mapping, wetland analysis, and flood detection for coasts, waterways, and marine or port areas.</li>
            </ul>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-medium">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageMachineLearning;
