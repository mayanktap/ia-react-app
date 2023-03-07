const HomePageCrowdSourcing = () => {
  return (
    <section className="text-white">
      <div className="container px-4 py-12 mx-auto">
        <h2 className="text-3xl font-bold text-teal-500 mb-8">ML DEVELOPMENT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Machine Learning Models</h3>
            <p className="mb-4">We specialize in building and deploying machine learning models that can help you make better decisions, faster.</p>
            <ul className="list-disc ml-4 mb-4">
              <li>Model development and training</li>
              <li>Feature engineering and selection</li>
              <li>Model evaluation and validation</li>
            </ul>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-medium">Learn more</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Data Labeling Services</h3>
            <p className="mb-4">We provide high-quality data labeling services that can help you train your machine learning models faster and more accurately.</p>
            <ul className="list-disc ml-4 mb-4">
              <li>Image labeling</li>
              <li>Text and audio transcription</li>
              <li>Data categorization and annotation</li>
            </ul>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-medium">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageCrowdSourcing;
