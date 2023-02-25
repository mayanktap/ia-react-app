const FlowDiagram = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img src="https://via.placeholder.com/800x600" alt="Placeholder image" className="w-full h-full object-cover object-center absolute top-0 left-0" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <h3 className="text-3xl font-bold text-teal-500 text-center mb-4">End-to-End ML Lifecycle Management</h3>
                <p className="text-lg text-center mb-8">Scale provides a complete data-centric solution to manage the entire machine learning lifecycle, from data labeling to model deployment and beyond.</p>
                <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-full">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowDiagram;
