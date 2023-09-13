import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CTA.scss';
import instructions1 from 'D:/OneDrive/Projektit/Repositories/u-universe/app/src/assets/instructions1.svg';
import Subscribe from '../../Button/Subscribe';
import Modal from '../../Modal/Modal';
import Optin from '../Optin/Optin';
import Expert from '../Expert/Expert'; // Import the Expert component

const CTA = () => {
  const [isOptinModalOpen, setOptinModalOpen] = useState(false);
  const [isExpertModalOpen, setExpertModalOpen] = useState(false); // Add state for Expert modal

  const openOptinModal = () => {
    setOptinModalOpen(true);
  };

  const closeOptinModal = () => {
    setOptinModalOpen(false);
  };

  const openExpertModal = () => {
    setExpertModalOpen(true);
  };

  const closeExpertModal = () => {
    setExpertModalOpen(false);
  };

  return (
    <div className="CTA-container">
      <div className="CTA">
        <h2>Heading</h2>
        <img src={instructions1} alt="Instructions" />
        <p>This is a paragraph of text.</p>
        <Subscribe onClick={openOptinModal} disabled={false}>
          Subscribe to Next Interview
        </Subscribe>
        <p>
          <Link to="/for-users">Learn more</Link>
        </p>
      </div>

      {/* Second CTA */}
      {/* <div className="CTA">
        <h2>Heading</h2>
        <img src={instructions1} alt="Instructions" />
        <p>Another paragraph of text.</p>
        <Subscribe onClick={openExpertModal} disabled={false}>
          Become an Expert
        </Subscribe>
        <p>
          <a href="#">Learn more</a>
        </p>
      </div> */}

      {/* Render the Optin modal only when isOpen is true */}
      {isOptinModalOpen && (
        <Modal isOpen={isOptinModalOpen} onClose={closeOptinModal}>
          {/* Render the Optin component within the modal */}
          <Optin onClose={closeOptinModal} />
        </Modal>
      )}

      {/* Render the Expert modal only when isOpen is true */}
      {isExpertModalOpen && (
        <Modal isOpen={isExpertModalOpen} onClose={closeExpertModal}>
          {/* Render the Expert component within the modal */}
          <Expert onClose={closeExpertModal} />
        </Modal>
      )}
    </div>
  );
};

export default CTA;
