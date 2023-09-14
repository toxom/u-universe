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
    name: 'Irene Buller',
    title: 'Senior Consultant, EY, Switzerland',
    testimonial: 'I’ve seen so many interviews with entrepreneurs, including on educational platforms, but this is the first time I’ve seen this exact effectuation approach. I work in a research environment and I see that the use of research findings in interviews adds a special character and makes them truly engaging and really useful.',
  },
  {
    id: 2,
    name: 'Bojan Pantic',
    title: 'Business Analyst, Serbia',
    testimonial: 'I have a background in academic research and applied research in business but this is the first time I see research insights in an interview format. I love it!',
  },
  {
    id: 3,
    name: 'Anton Fedosin',
    title: 'CEO, Zenmoney, Israel',
    testimonial: 'I found it useful to study international experience in an entrepreneurial environment through the interview on the platform. It helped me with my business project a lot.',
  },
  {
    id: 4,
    name: 'Janne Ruponen',
    title: 'Co-founder, SOFTA, Finland',
    testimonial: 'I\'ve listened to a lot of podcasts featuring entrepreneurs, and the majority of these interviews clearly lack real-life context. When I listen to U-universe interviews, I not only get answers to practical questions like "How did you achieve this?" but also to questions like "Why?" It reminds me of case studies where I can see the whole picture and all the connections.'
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonialsData[0]);

  const handleAvatarClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  return (
    
    <div className="testimonials-container">
      <h1>Testimonials</h1>
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
