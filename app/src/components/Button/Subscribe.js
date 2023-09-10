import React from 'react';
import PropTypes from 'prop-types';
import './Subscribe.scss'; // Import your SCSS file

const Subscribe = ({ children, onClick, disabled }) => {
  return (
    <button className="Subscribe" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Subscribe.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Subscribe;
