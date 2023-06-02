import FileUpload from './FileUpload';

function UploadSection() {
  return (
    <section className="bg-gradient-to-l from-teal-400 via-teal-500 to-teal-600 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-white">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Follow these steps to upload your data:</h2>
            <ul className="list-disc list-inside mt-8 text-lg text-white">
              <li>Sign up for our platform and create an account.</li>
              <li>Upload your data file in a supported format (e.g. JPEG, MP4, MOV, CSV, JSON).</li>
              <li>Add relevant tags that describe the data, such as industry, location, and type of data.</li>
              <li>Write a brief description of the file content and its potential use cases.</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UploadSection;
