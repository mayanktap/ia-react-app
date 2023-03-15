import { useState } from 'react';
import CheckBox from './CheckBox'

function SalesForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    jobTitle: '',
    describe: '',
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit the form data to your backend or API
  };

  return (
    <section className='bg-gradient-to-l from-teal-400 via-teal-500 to-teal-600 py-5 rounded-lg'>
        <div className='text-center text-gray-700 font-bold mb-2'>Fill Out The Form Below</div>
    <div className='max-w-3xl mx-auto p-10'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="industry"
          >
            Industry
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="jobTitle"
          >
            Job Title
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="describe"
          >
            Please Describe Your Use Case or Request*
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="describe"
            rows="5"
            value={formData.describe}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
            <CheckBox />
        </div>

        <div className="mt-8">
          <button
            className="text-white 
            text-extrabold
            bg-gradient-to-r from-orange-400 via-orang-500 to-orange-600
            hover:bg-gradient-to-br
            focus:ring-4 focus:outline-none focus:ring-teal-300
            dark:focus:ring-teal-800
            font-medium rounded-lg text-sm
            px-5 py-2.5
            text-center"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </section>
  );
}

export default SalesForm;