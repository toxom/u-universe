import React, { useState } from 'react';
import { addSubscription } from '../../../firebase'; // Adjust the import path based on your project structure

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
    <div>
      {isSubscribed ? ( // Conditionally render the message if subscribed
        <>
          <h1>Subscribed!</h1>
          <p>Thank you for subscribing.</p>
        </>
      ) : (
        <>
          <h1>Subscribe to Next Interview</h1>
          <p>Please enter your email to subscribe:</p>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Optin;
