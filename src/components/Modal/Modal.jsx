import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import css from './Modal.module.css';
const rootModal = document.querySelector('#root-modal');

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.modalClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.modalClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      rootModal
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default Modal;
