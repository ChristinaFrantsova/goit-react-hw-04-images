import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import css from './Modal.module.css';
const rootModal = document.querySelector('#root-modal');

const Modal = ({ largeImageURL, modalClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        modalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      modalClose();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    rootModal
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default Modal;
