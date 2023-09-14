import React from 'react';
import './for-users.scss';
import corpart1 from '../../assets/corpart1.svg';
import '../../styles.scss'; // Import the global stylesheet

const ForUsers = () => {
  return (
    <div className="for-users">
      <h1>How It Works?</h1>

      {renderStep(1, 'Register to the interview event', corpart1, `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `)}

      {renderStep(2, 'Receive email link to the online event', corpart1, `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `)}

      {renderStep(3, 'Engage in the discussion with interactive methods', corpart1, `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `)}

      {renderStep(4, 'Learn more from transcripts and listen to podcasts anywhere you want', corpart1, `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `)}
    </div>
  );
};

// Helper function to render each step
function renderStep(stepNumber, title, image, description) {
  return (
    <div key={stepNumber} className="step">
      <h2>Step {stepNumber}:</h2>
      <h3>{title}</h3>
      {/* <img src={image} alt="Instructions" /> */}
      <p>{description}</p>
    </div>
  );
}

export default ForUsers;
