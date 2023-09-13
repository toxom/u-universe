import React, { useState } from 'react';
import { addSubscription } from '../../../firebase'; // Adjust the import path based on your project structure
import './Optin.scss';

const Optin = ({ onClose }) => {
  const [isSubscribed, setIsSubscribed] = useState(false); // State to track subscription status

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      // Use the addSubscription function from firebase.js
      await addSubscription(email);
      console.log('Subscription added successfully.');
      setIsSubscribed(true); // Set state to indicate successful subscription
    } catch (error) {
      console.error('Error adding subscription: ', error);
    }
  };

  return (
    <div className="optin-container">
      {isSubscribed ? (
        <>
          <h1 className="optin-header">Subscribed!</h1>
          <p className="optin-text">Thank you for subscribing.</p>
        </>
      ) : (
        <>
          <h1 className="optin-header">Subscribe to Next Interview</h1>
          <p className="optin-text">Please enter your email to subscribe:</p>
          <form className="optin-form" onSubmit={handleSubmit}>
            <input className="optin-input" type="email" name="email" placeholder="Your Email" required />
            <button className="optin-button" type="submit">Subscribe</button>
          </form>
        </>
      )}
    </div>
  );
  
};

export default Optin;
