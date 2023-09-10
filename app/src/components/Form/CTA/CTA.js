import React from 'react';
import './CTA.scss';
import Subscribe from '../../Button/Subscribe';
import EmailTextField from '../TextField/TextField';


const CTA = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="CTA">
      <form className="CTA__form" onSubmit={handleSubmit}>
        <EmailTextField className="CTA__email-field" label="Enter Your Email" />
        <Subscribe className="CTA__submit-button" variant="contained" type="submit">
          Subscribe
        </Subscribe>
      </form>
    </div>
  );
};

export default CTA;
