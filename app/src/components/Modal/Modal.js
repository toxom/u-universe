import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
