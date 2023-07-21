import '@aws-amplify/ui-react/styles.css';
import PropTypes from 'prop-types';
import './object_detection.css';
import { API, Auth } from 'aws-amplify';
import ImageModal from './../modal/ImageModal';
import { useState } from 'react';

function ObjectDetection({ data }) {
  const [s3Url, setS3Url] = useState('');
  const [showModal, setShowModal] = useState(false);
  const closeModalHandler = () => {
    setShowModal(false);
  };

  async function viewS3Image(s3Url) {
    let user = await Auth.currentAuthenticatedUser();
    console.log(`user: ${JSON.stringify(user)} and s3Url: ${s3Url}`);

    if(user['username']) {
      API.get('useruploadedmediainfo', `/object-detection-url/${s3Url.replace('https://', '')}`, {
        headers: { Authorization: user.signInUserSession.idToken.jwtToken },
      }).then((response) => {
        console.log(`response from object detection url: ${JSON.stringify(response)}`);
        setShowModal(true);
        setS3Url(response['signedUrl']);
      }).catch((error) => {
        console.log(JSON.stringify(error));
      });
    }
  }

  if (data) {
    const fields = [
      'Email', 'S3 url', 'S3 etag', 'Object Type', 'Bounding Box X',
      'Bounding Box Y', 'Bounding Box Width', 'Bounding Box Height', 'Confidence',
      'Operation ID', 'Video ID', 'Frame ID', 'Location', 'Image Width',
      'Image Height', 'Model Version', 'Timestamp',
    ];

    return (
      <div className='table-container text-white'>
        { showModal && <ImageModal closeModalFunc={closeModalHandler} data={s3Url} /> }
        <table className="table">
          <thead>
            <tr>
              {fields.map((item, index) => (
                <th className='table-header' key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='td'>{item['email']}</td>
                <td className='td'>
                  <button className='view-image' onClick={() => viewS3Image(item['s3_url'])}>
                    View Image
                  </button>
                </td>
                <td className='td'>{item['s3_etag']}</td>
                <td className='td'>{item['object_type']}</td>
                <td className='td'>{item['bounding_box_x']}</td>
                <td className='td'>{item['bounding_box_y']}</td>
                <td className='td'>{item['bounding_box_width']}</td>
                <td className='td'>{item['bounding_box_height']}</td>
                <td className='td'>{item['confidence']}</td>
                <td className='td'>{item['camera_id']}</td>
                <td className='td'>{item['operation_id']}</td>
                <td className='td'>{item['video_id']}</td>
                <td className='td'>{item['frame_id']}</td>
                <td className='td'>{item['location']}</td>
                <td className='td'>{item['image_width']}</td>
                <td className='td'>{item['image_height']}</td>
                <td className='td'>{item['model_version']}</td>
                <td className='td'>{item['timestamp']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ObjectDetection.propTypes = {
  data: PropTypes.array,
};

ObjectDetection.defaultProps = {
  data: {},
};

export default ObjectDetection;
