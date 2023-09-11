// Optin.js

import React from 'react';


const Optin = ({ onClose }) => {
  // Handle form submission here
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form data submission or any other actions here
    // For example, you can send an API request to subscribe the user
    // Close the modal when the action is complete
    onClose();
  };

  return (
    <div>
      <h1>Subscribe to Next Interview</h1>
      <p>Please enter your email to subscribe:</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Optin;
