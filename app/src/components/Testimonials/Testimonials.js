import React, { useState } from 'react';
import './Testimonials.scss'; // Add your CSS styling here
import Avatar1 from '../../assets/testimonials/avatar1.svg';
import Avatar2 from '../../assets/testimonials/avatar2.svg';
import Avatar3 from '../../assets/testimonials/avatar3.svg';
import Avatar4 from '../../assets/testimonials/avatar4.svg';

// Sample data for testimonials
const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Marketing Manager',
    testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    title: 'Designer',
    testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    name: 'Alice Brown',
    title: 'Developer',
    testimonial: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonialsData[0]);

  const handleAvatarClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  return (
    <div className="testimonials-container">
      <div className="avatars">
        {testimonialsData.map((testimonial) => (
          <img
            key={testimonial.id}
            src={require(`../../assets/testimonials/avatar${testimonial.id}.svg`)}
            alt={`Avatar ${testimonial.id}`}
            onClick={() => handleAvatarClick(testimonial)}
            className={selectedTestimonial.id === testimonial.id ? 'selected-avatar' : ''}
          />
        ))}
      </div>
      <div className="testimonial-details">
        <h2>{selectedTestimonial.name}</h2>
        <p>{selectedTestimonial.title}</p>
      </div>
      <div className="testimonial-text">
        <p>{selectedTestimonial.testimonial}</p>
      </div>
    </div>
  );
};

export default Testimonials;
