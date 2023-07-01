import Modal from './../modal/Modal';
import { useEffect, useState } from 'react';
import { Storage, API, Auth } from 'aws-amplify';

const DroneDataUpload = () => {
  const [state, setState] = useState(0);
  const [objState, setObjState] = useState(0);
  const [postSuccessMessage, setPostSuccessMessage] = useState('');
  const [postErrorMessage, setPostErrorMessage] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const closeModalHandler = () => {
    setShowModal(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  async function onUpload(e) {
    Auth.currentAuthenticatedUser({ bypassCache: false }).then(async (user) => {
      console.log(`Logged in user: ${user}`);
      const file = e.target.files[0];
      if (state) {
        try {
          await Storage.remove(state.key);
        } catch (error) {
          console.error(error);
        }
      }
      Storage.put(`${user.attributes.sub}/${file.name}`, file, {
        contentType: 'text/csv',
      }).then(async (result) => {
        setState({
          file: URL.createObjectURL(file),
          key: `${file.name}`,
        });
        console.log(result);
      });
    }).catch((err) => {
      setShowModal(true);
      console.log(err);
    });
  }

  async function handleDelete(imageKey) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Storage.remove(`${user.attributes.sub}/${imageKey}`);
      alert('Image deleted successfully');
      setObjState(0);
      document.querySelector('.js-upload-input').value = '';
    } catch (error) {
      console.error(error);
      alert('Failed to delete image.');
    }
  }

  const handleSubmit = async () => {
    console.log(`Description: ${description}`);
  
    Auth.currentAuthenticatedUser({ bypassCache: false }).then((user) => {
      API.post('useruploadedmediainfo', '/media-info', {
        body: {
          description: description,
          mediaFile: state.key,
        },
        headers: { Authorization: user.signInUserSession.idToken.jwtToken },
      }).then(response => {
        console.log(response);
        if (response === 'Record Successfully created') {
          setDescription('');
          setObjState(0);
          setState(0);
          document.querySelector('.js-upload-input').value = '';
          setPostSuccessMessage('Relevant Data is successfully created.');
        }
      }).catch(err => {
        console.log(err);
        setPostErrorMessage('Relevant Data failed to get created.');
      });
    }).catch((err) => {
      setShowModal(true);
      console.log(err);
    });
  };

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

  useEffect(() => {
    document.querySelector('.js-upload-input').addEventListener('click', function(evt) {
      Auth.currentAuthenticatedUser({ bypassCache: false }).then((user) => {
        console.log(user);
      }).catch((err) => {
        evt.preventDefault();
        setShowModal(true);
        console.log(err);
      });
    });
    if(state) {
      handleShowMedia(state.key);
    }
  }, [state]);

  return (
    <div>
      { showModal && <Modal closeModalFunc={closeModalHandler} /> }
      <div className='flex flex-col gap-6 py-10'>
        <div className='flex flex-col gap-3'>
          <label htmlFor='file_input' className='text-lg font-semibold text-gray-700'>
            Upload Drone Data
          </label>
          <input
            type='file'
            id="file_input"
            className="js-upload-input w-full px-4 py-2 border border-gray-300 rounded-lg"
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
          className="js-submit-form-btn px-6 py-3 text-lg text-white font-semibold bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
    </div>
  );
};

export default DroneDataUpload;