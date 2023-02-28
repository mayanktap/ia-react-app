const CustomersHero = () => {
  return (
    <div className="bg-gradient-to-r from-pink-800 to-blue-800 text-white py-12 px-8 sm:px-16 md:px-24 lg:px-32">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Customers</h2>
        <p className="text-lg leading-7 mb-8">
            SkyTL&#180;s platform and products were created by data 
            science experts, to impact real-life applications. 
            Our goal is to provide fast, reliable, and highly 
            precise data transfer, processing, and predictions in scalable volumes.
        </p>
        <button className="bg-teal-400 text-white px-8 py-4 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50">
          Talk to Us
        </button>
      </div>
    </div>
  );
};

export default CustomersHero;
