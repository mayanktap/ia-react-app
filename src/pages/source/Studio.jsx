import saltlakecity from '../../assets/saltlakecity.mp4';

const Studio = () => {
  return (
    <div className="bg-gray">
      <div className="container mx-auto flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-bold text-gradient uppercase  mb-6">
          SUPPERCHARGE YOUR DRONE&#180;S EARNINGS
        </h2>
        <p className="text-white text-center max-w-lg mb-10">
          With SkyTL, you can easily upload your data and monetize it when 
          it is consumed by our customers. Our platform allows you to manage 
          and monitor your data, ensuring that you are in control of your monetization
          strategy.
        </p>
        <div className="flex-row items-center justify-between">
          <div className="mb-6 sm:mb-0">
            <video src={saltlakecity} alt="Placeholder" className="h-auto rounded-lg object-cover object-center max-w-full" style={{ width: 'auto', height: 'auto' }} controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
