import React from 'react';
import './Testimonials.scss';
import avatar1 from '../../assets/testimonials/avatar1.svg';

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      {/* First Testimonial */}
      <div className="testimonials-container">
        <div className="upper-section">
          <p>
            Pellentesque faucibus tellus metus, convallis euismod neque rutrum vitae. Phasellus iaculis imperdiet velit, et volutpat sapien pretium accumsan. Duis semper at sem a dictum. Donec hendrerit eu mi sed lobortis. Ut dui augue, tincidunt eget dolor ut, feugiat cursus arcu. 
          </p>
        </div>
        <div className="lower-section">
          <div className="avatar">
            <img src={avatar1} alt="User Avatar" width="80" height="80" />
          </div>
          <div className="text-content">
            <p className="name">Irene Buller</p>
            <p className="description">
              Co-founder, Arteavac
            </p>
          </div>
        </div>
      </div>

      {/* Second Testimonial */}
      <div className="testimonials-container">
        <div className="upper-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eu ligula dignissim volutpat. Fusce placerat, felis quis dictum feugiat, odio tortor vehicula risus.
          </p>
        </div>
        <div className="lower-section">
          <div className="avatar">
            <img src={avatar1} alt="User Avatar" width="80" height="80" />
          </div>
          <div className="text-content">
            <p className="name">John Doe</p>
            <p className="description">
              CEO, Company XYZ
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
