import React, { useState } from 'react';
import { countries } from '../../../data/countries';
import './Expert.scss';
import { addExpertSubmission } from '../../../firebase';

const Expert = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    position: '',
    country: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data: ", formData);
      // await addExpertSubmission(formData);
      console.log("Data successfully sent to the database.");
      setSubmitted(true);
      console.log("Should have set submitted to true");
      // onClose();  // Commented out for debugging purposes
    } catch (error) {
      console.error("Error adding submission: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="expert-container">
      {submitted ? (
        <h1>Thank you!</h1>
      ) : (
        <>
          <h1>Interested to Join as an Expert?</h1>
          <p>Please enter your information:</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                name="organization"
                id="organization"
                value={formData.organization}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="position">Position:</label>
              <input
                type="text"
                name="position"
                id="position"
                value={formData.position}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select
                name="country"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Please select
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Expert;
