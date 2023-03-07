import { FaMapMarkerAlt } from 'react-icons/fa';

const Stats = () => (
  <section className="bg-gradient-to-r from-pink-800 to-blue-800 py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl text-white font-bold text-center p-2 mb-8">
        Tampa - Headquarters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-l from-blue-500 to-pink-500 rounded-full p-8 mb-4">
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <p className="text-lg font-bold text-gray-900 mb-2">
            Location
          </p>
          <p className="text-lg font-medium text-gray-800">
            Tampa, FL
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-l from-blue-500 to-pink-500 rounded-full p-8 mb-4">
            <p className="text-white text-3xl">$603M</p>
          </div>
          <p className="text-lg font-bold text-gray-900 mb-2">
            Investment
          </p>
          <p className="text-lg font-medium text-gray-800">
            Total raised
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-l from-blue-500 to-pink-500 rounded-full p-8 mb-4">
            <p className="text-white text-3xl">600</p>
          </div>
          <p className="text-lg font-bold text-gray-900 mb-2">
            Employees
          </p>
          <p className="text-lg font-medium text-gray-800">
            Across all locations
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-l from-blue-500 to-pink-500 rounded-full p-8 mb-4">
            <p className="text-white text-3xl">2016</p>
          </div>
          <p className="text-lg font-bold text-gray-900 mb-2">
            Founded
          </p>
          <p className="text-lg font-medium text-gray-800">
            Year of establishment
          </p>
        </div>
      </div>
      <div className="mt-12 flex justify-center items-center">
        <img
          src=''
          alt="San Francisco skyline"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
);

export default Stats;
