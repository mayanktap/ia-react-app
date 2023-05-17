const HomePageMachineLearning = () => {
  return (
    <section className="text-white">
      <div className="container px-4 py-12 mx-auto">
        <h2 className="text-3xl font-bold text-teal-500 mb-8">Products and Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">For the Data Consumers</h3>
            <p className="mb-4">Did we spark your interest? Check our use cases and industry applications or take a sneak peek of the <a href="#" className="text-teal-400 hover:text-teal-500 font-bold">platform</a>!</p>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-medium">Learn more</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For the UAS Pilots</h3>
            <p className="mb-4">Are you a <a href="#" className="text-teal-400 hover:text-teal-500 font-bold">UAS pilot</a> and would like to collaborate? You can now monetize your UAS by sharing your flights with us!</p>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-medium">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageMachineLearning;
