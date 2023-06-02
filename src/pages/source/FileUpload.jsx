import { useEffect, useState } from 'react';
import { Storage, API, Auth } from 'aws-amplify';

const FileUpload = () => {
  const [selectedTag, setSelectedTag] = useState('Select a tag');
  const [description, setDescription] = useState('');
  const [state, setState] = useState(0);
  const [objState, setObjState] = useState(0);
  const [postSuccessMessage, setPostSuccessMessage] = useState('');
  const [postErrorMessage, setPostErrorMessage] = useState('');
  const [flightId, setFlightId] = useState('');
  const [vehicleId, setVehicleId] = useState('');

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
      alert('Failed to delete image.');
    }
  }

  useEffect(() => {
    if(state) {
      handleShowMedia(state.key);
    }
  }, [state]);

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFlightIdChange = (event) => {
    setFlightId(event.target.value);
  };

  const handleVehicleIdChange = (event) => {
    setVehicleId(event.target.value);
  };

  const handleSubmit = async () => {
    console.log(`Selected tag: ${selectedTag}`);
    console.log(`Description: ${description}`);
    let user = await Auth.currentAuthenticatedUser();

    API.post('useruploadedmediainfo', '/media-info', {
      body: {
        description: description,
        selectedTag: selectedTag,
        mediaFile: state.key,
        flightId: flightId, 
        vehicleId: vehicleId,
      },
      headers: {
        Authorization: user.signInUserSession.idToken.jwtToken,
      },
    }).then(response => {
      console.log(response);
      if (response === 'Record Successfully created') {
        setSelectedTag('Select a tag');
        setDescription('');
        setObjState(0);
        setState(0);
        setPostSuccessMessage('Relevant Data is successfully created.');
      }
    }).catch(err => {
      console.log(err);
      setPostErrorMessage('Relevant Data failed to get created.');
    });
  };

  return (
    <div className='flex flex-col gap-6 py-10'>
      <div className='flex flex-col gap-3'>
        <label htmlFor='file_input' className='text-lg font-semibold text-gray-700'>
          Upload File
        </label>
        <input
          type='file'
          id="file_input"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          onChange={onUpload}
        />
      </div>
      {
        !!objState &&
        <div className='flex items-center gap-2'>
          <a href={objState.file} className='text-blue-600 hover:underline'>{objState.key}</a>
          <button onClick={() => handleDelete(objState.key)} className='text-red-600 hover:text-red-800'>
            Delete
          </button>
        </div>
      }

      <div className="flex flex-col gap-3">
        <label htmlFor="tag_select" className="text-lg font-semibold text-gray-700">
          Tag
        </label>
        <div className="relative">
          <select
            id="tag_select"
            className="block appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white"
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
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="flightId_input" className="text-lg font-semibold text-gray-700">
            Flight ID
          </label>
          <input
            id="flightId_input"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter Flight ID"
            value={flightId}
            onChange={handleFlightIdChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="vehicleId_input" className="text-lg font-semibold text-gray-700">
            Vehicle ID
          </label>
          <input
            id="vehicleId_input"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter Vehicle ID"
            value={vehicleId}
            onChange={handleVehicleIdChange}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="description_input" className="text-lg font-semibold text-gray-700">
          Description
        </label>
        <textarea
          id="description_input"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          rows="4"
          placeholder="Enter a description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <button
        className="px-6 py-3 text-lg text-white font-semibold bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {
        !!postSuccessMessage &&
        <div className='p-2 text-white bg-green-600 rounded-lg'>
          {postSuccessMessage}
        </div>
      }
      {
        !!postErrorMessage &&
        <div className='p-2 text-white bg-red-600 rounded-lg'>
          {postErrorMessage}
        </div>
      }
    </div>
  );
};

export default FileUpload;