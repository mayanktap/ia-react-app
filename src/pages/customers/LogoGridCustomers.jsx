const LogoGridCustomers = (logos) => {

  return (
    <div className="bg-black container mx-auto py-10 pb-20">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-white pb-20">Federal Customers</h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center bg-gradient-to-r from-gray-200 to-blue-800 rounded-lg">
              <img src={logo.image} alt={logo.alt} className="max-h-16 sm:max-h-24 md:max-h-32 lg:max-h-48" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGridCustomers;
