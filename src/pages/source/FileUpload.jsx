import { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';

const FileUpload = () => {
  const [selectedTag, setSelectedTag] = useState('Select a tag');
  const [description, setDescription] = useState('');
  const [state, setState] = useState(0);
  const [objState, setObjState] = useState(0);

  async function onUpload(e) {
    const file = e.target.files[0];
    if (state) {
      try {
        await Storage.remove(state.key);
      } catch (error) {
        console.error(error);
      }
    }
    Storage.put(file.name, file, {
      contentType: 'image/png',
    }).then(async (result) => {
      setState({
        file: URL.createObjectURL(file),
        key: file.name,
      });
      console.log(result);
    });
  }

  async function handleShowMedia(imageKey) {
    try {
      const signedURL = await Storage.get(imageKey, { level: 'public' });
      setObjState({
        file: signedURL,
        key: imageKey,
      });
    } catch (error) {
      console.error(error);
      alert('Failed to show images');
    }
  }

  async function handleDelete(imageKey) {
    try {
      await Storage.remove(imageKey);
      alert('Image deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to delete image');
    }
  }

  useEffect(() => {
    if(state) {
      handleShowMedia(state.key);
    }
  }, [state])

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
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
          onChange={onUpload}
        />
      </div>
      {
        !!objState &&
        <div className='flex'>
          <a href={objState.file}>{objState.key}</a>
          <a href="#" onClick={() => handleDelete(objState.key)}>
            <i className="material-icons">delete</i>
          </a>
        </div>
      }

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
