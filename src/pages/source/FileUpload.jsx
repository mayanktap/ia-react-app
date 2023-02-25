import { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedTag, setSelectedTag] = useState('Select a tag');
  const [description, setDescription] = useState('');

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`Selected file: ${selectedFile.name}`);
    console.log(`Selected tag: ${selectedTag}`);
    console.log(`Description: ${description}`);
  };

  return (
    <div className='flex flex-col gap-4 py-10'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='file_input' className='block text-black-700 font-bold mb-2'>
          Upload File
        </label>
        <input
          type='file'
          id="file_input"
          className="w-full px-3 py-2 text-black-700 border rounded-lg"
          onChange={handleFileInputChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="tag_select" className="block text-black-700 font-bold mb-2">
          Tag
        </label>
        <div className="relative">
          <select
            id="tag_select"
            className="block appearance-none w-full px-3 py-2 border rounded-lg text-black-700 bg-white"
            value={selectedTag}
            onChange={handleTagChange}
          >
            <option>Select a tag</option>
            <option>Wild Fire</option>
            <option>Agriculture</option>
            <option>Atmospheric</option>
            <option>Water Quality</option>
            <option>Flooding</option>

          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description_input" className="block text-black-700 font-bold mb-2">
          Description
        </label>
        <textarea
          id="description_input"
          className="w-full px-3 py-2 text-black-700 border rounded-lg"
          rows="4"
          placeholder="Enter a description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <button
        className=" text-white 
        bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600
        hover:bg-gradient-to-br
        focus:ring-4 focus:outline-none focus:ring-teal-300
        dark:focus:ring-teal-800
        font-medium rounded-lg text-sm
        px-5 py-2.5
        text-center"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default FileUpload;
