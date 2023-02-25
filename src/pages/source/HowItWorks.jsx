import earthDataImage from '../../assets/icon_cloud_upload.png';

const HowItWorks = () => {
  return (
    <section className="text-white mb-20">
      <div className="mx-auto text-white text-centre py-6 mb-4">
        <h3 className="text-4xl font-bold mb-4 uppercase text-gradient">Enhancing your earning potential</h3>
        <p className="text-lg mb-4">Three simple steps to monetizing your data:</p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="text-center">
            <img
              src={earthDataImage} 
              alt="Earth Data" 
              className="mx-auto mb-6"
              style={{ width: '200px', height: '200px' }}
            />
            <h3 className="text-teal-400 text-xl font-bold mb-3">
                1. DATA UPLOAD
            </h3>
            <p className="text-sm">
            Easily equip your UAS vehicle with cameras and sensors 
            and submit your data to our platform.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder"
              className="mx-auto mb-6"
              style={{ width: '300px', height: '200px' }}
            />
            <h3 className="text-teal-400 text-xl font-bold mb-3">
                2. PROCESSING AND MACHINE LEARNING
            </h3>
            <p className="text-sm">
                We transform, store, and build AI models from your data. 
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder"
              className="mx-auto mb-6"
              style={{ width: '300px', height: '200px' }}
            />
            <h3 className="text-teal-400 text-xl font-bold mb-3 uppercase">
              3. GET PAID
            </h3>
            <p className="text-sm">
                Your data is made accessible to  
                consumers across a wide range of industries available for purchase. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
