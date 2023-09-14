import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CTA.scss';
import corpart2 from '../../../assets/corpart2.svg';
import Subscribe from '../../Button/Subscribe';
import Modal from '../../Modal/Modal';
import Optin2 from '../Optin/Optin2';

const CTA2 = () => {
  const [isOptin2ModalOpen, setOptin2ModalOpen] = useState(false);

  const openOptin2Modal = () => {
    setOptin2ModalOpen(true);
  };

  const closeOptin2Modal = () => {
    setOptin2ModalOpen(false);
  };



  return (
    <div className="CTA-container">
      <div className="CTA">
        <h2>Empower Your Team with Insights from Our Interviews</h2>
        <img src={corpart2} alt="b2b" />
        <p>Secure your spot – sign up for our waitlist.</p>
        <Subscribe onClick={openOptin2Modal} disabled={false}>
          Try for free
        </Subscribe>
        <p>
          {/* <Link to="/for-users">Learn more</Link> */}
        </p>
      </div>


      {/* Render the Optin2 modal only when isOpen is true */}
      {isOptin2ModalOpen && (
        <Modal isOpen={isOptin2ModalOpen} onClose={closeOptin2Modal}>
          {/* Render the Optin2 component within the modal */}
          <Optin2 onClose={closeOptin2Modal} />
        </Modal>

      )}
    </div>
  );
};

export default CTA2;
