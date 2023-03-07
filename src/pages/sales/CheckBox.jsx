import { useState } from 'react';

function CheckBox() {
  const [formData, setFormData] = useState({
    helpWithImagery: false,
    dataAnnotation: false,
    dataManagement: false,
    llmDeployment: false,
    modelEvaluation: false,
    readyMadeModels: false,
    other: false,
    industry: '',
    jobTitle: '',
    describe: '',
    agreeToTerms: false,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can submit the form data to a backend or API here
  };

  return (
    <div className='max-w-lg mx-auto'>
      <form onSubmit={handleSubmit}>
        <div className='mt-4'>
          <p className='block text-gray-700 font-bold mb-2'>
            What can we help with? Select all that apply.*
          </p>
          <div className='mt-2'>
            <label className='inline-flex items-center'>
              <input
                type='checkbox'
                className='form-checkbox h-5 w-5 text-gray-600'
                name='helpWithImagery'
                checked={formData.helpWithImagery}
                onChange={handleInputChange}
              />
              <span className='ml-2 text-gray-700'>AI-Generated Imagery for Products & Ads</span>
            </label>
            <label className='inline-flex items-center ml-6'>
              <input
                type='checkbox'
                className='form-checkbox h-5 w-5 text-gray-600'
                name='dataAnnotation'
                checked={formData.dataAnnotation}
                onChange={handleInputChange}
              />
              <span className="ml-2 text-gray-700">Data Annotation</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="dataManagement"
                checked={formData.dataManagement}
                onChange={handleInputChange}
              />
              <span className="ml-2 text-gray-700">Data Management & Curation</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="llmDeployment"
                checked={formData.llmDeployment}
                onChange={handleInputChange}
              />
              <span className="ml-2 text-gray-700">LLM App Deployment, Experimentation & Fine-Tuning</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="modelEvaluation"
                checked={formData.modelEvaluation}
                onChange={handleInputChange}
              />
              <span className="ml-2 text-gray-700">Model Evaluation & Deployment</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name={formData.other}
                checked={formData.other}
                onChange={handleInputChange}
              />
              <span className="ml-2 text-gray-700">Other</span>
            </label>
          </div>
        </div>
    
        {/* Description */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              name="description"
              rows="3"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Please provide a brief description of your project and how Scale can assist you."
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </div>
    
        {/* Checkbox */}
        <div className="mt-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
              required
            />
            <span className="ml-2 text-gray-700">
              I agree to receive communications from Scale, and I understand
              Scale will process my personal information in accordance with
              Scale&apos;s Privacy Policy.
            </span>
          </label>
        </div>
    
        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
   );
}

export default CheckBox; 