import { useState } from 'react';

function CheckBox() {
  const [formData, setFormData] = useState({
    helpWithImagery: false,
    dataAnnotation: false,
    dataManagement: false,
    llmDeployment: false,
    modelEvaluation: false,
    readyMadeModels: false,
    industry: '',
    jobTitle: '',
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
            <label className='flex items-center'>
              <input
                type='checkbox'
                className='form-checkbox h-5 w-5 text-gray-600'
                name='helpWithImagery'
                checked={formData.helpWithImagery}
                onChange={handleInputChange}
              />
              <span className='ml-2 text-gray-700'>AI-Generated Imagery for Products & Ads</span>
            </label>
            <label className='flex items-center ml-6'>
              <input
                type='checkbox'
                className='form-checkbox h-5 w-5 text-gray-600'
                name='dataAnnotation'
                checked={formData.dataAnnotation}
                onChange={handleInputChange}
              />
              <span className="ml-2 text-gray-700">Data Annotation</span>
            </label>
            <label className="flex items-center ml-6">
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
      </form>
    </div>
   );
}

export default CheckBox; 