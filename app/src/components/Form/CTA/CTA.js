import React from 'react';
import './CTA.scss';
import Button from '../../Button/Button';
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
        <Button className="CTA__submit-button" variant="contained" type="submit">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default CTA;
