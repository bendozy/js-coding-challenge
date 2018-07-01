import React from 'react';
import PropTypes from 'prop-types';

import style from './css/Button.css';

const Button = ({ children, onClick, disabled, type, full }) => {
  const classNames = [style.Button];

  if (full) {
    classNames.push(style.ButtonFull);
  }

  return (
    <button
      className={classNames.join(' ')}
      onClick={onClick}
      type={type ? type : undefined}
      disabled={disabled ? disabled : undefined}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
};

export default Button;
