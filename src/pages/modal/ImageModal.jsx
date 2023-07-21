import PropTypes from 'prop-types';
import './modal.css';
import { close } from './../../assets';

const ImageModal = ({ closeModalFunc, data }) => {
  return (
    <div className='modal-block'>
      <div className='modal-block__box' role='dialog'>
        <button onClick={closeModalFunc} className='modal-block__close-button'>
          <img
            src={close}
            alt="menu"
            className="w-[20px] h-[30px] object-contain"
          />
        </button>
        <div role='document'>
          <div className='panel'>
            <div className='panel-header'>
            </div>
            <div className='panel__body'>
              <img className='image-body' src={data} width="300" height="300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  closeModalFunc: PropTypes.func,
  data: PropTypes.string,
};

export default ImageModal;
