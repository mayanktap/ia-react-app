import FileUpload from './FileUpload'

function UploadSection() {
  return (
    <section className="bg-gradient-to-l from-teal-400 via-teal-500 to-teal-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-8 py-20">
          <div>
            <div className="mt-8">
              <div className="flex-row">
                <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">To upload your data, simply follow these steps:</h2>
                <ul className="list-disc list-inside py-5 font-normal text-white font-bold">
                  <li>Sign up for our platform and create an account.</li>
                  <li>Upload your data file in a supported format (e.g. JPEG, MP4, MOV, CSV, JSON).</li>
                  <li>Add relevant tags that describe the data, such as industry, location, and type of data.</li>
                  <li>Write a brief description of the file content and its potential use cases.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UploadSection;
