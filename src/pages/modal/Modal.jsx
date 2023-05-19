import PropTypes from 'prop-types';
import './modal.css';
import { close } from './../../assets';

const Modal = ({ closeModalFunc }) => {
  const clickCreateAccountLink = () => {
    window.location.replace(window.location.origin + '/login');
  };

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
              <div>
                Did we spark your Interest? Create a free account and check out our platform.
              </div>
              <div>
                <button onClick={clickCreateAccountLink} className='footer-btn'>
                  Create Account
                </button>
                <button className='footer-btn'>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = { closeModalFunc: PropTypes.func };

export default Modal;
