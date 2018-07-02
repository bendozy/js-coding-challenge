import React from 'react';
import PropTypes from 'prop-types';

import style from './css/Modal.css';

const Modal = ({ title, open, close, children }) => {
  if (open) {
    return (
      <div className={style.Modal}>
        <div className={style.ModalContent}>
          <div className={style.ModalHeader}>
            <span className={style.ModalTitle}>
              <h2>{title}</h2>
            </span>
            <span className={style.ModalClose} onClick={close}>
              &times;
            </span>
          </div>
          <div className={style.ModalBody}>{children}</div>
        </div>
      </div>
    );
  }

  return null;
};

Modal.defaultProps = {
  open: false,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
