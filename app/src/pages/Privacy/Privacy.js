import React from 'react';

const Privacy = ({ onClose }) => {
  const modalContentStyle = {
    maxHeight: '400px', // Increased max height to fit more content
    overflowY: 'auto',
  };

  return (
    <div style={modalContentStyle}>
      <h1>Privacy Policy</h1>

      <h2>1. Introduction</h2>
      <p>We, at U-Universe, prioritize your privacy. This Privacy Policy is designed to inform you about the types of information we collect, how we use it, and what controls you have over your information.</p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Personal Identification Information</h3>
      <p>We collect information that can be used to identify you as an individual, such as your name, email address, phone number, and occasionally, location data if needed for service delivery.</p>
      
      <h3>2.2 Non-personal Identification Information</h3>
      <p>We also collect information like browser type, device type, IP address, and other non-identifiable data that helps us improve the user experience.</p>

      <h2>3. How We Use Information</h2>
      <h3>3.1 To Provide and Maintain Our Service</h3>
      <p>We use your information primarily to provide you with a personalized and efficient experience on U-Universe.</p>

      <h3>3.2 Notifications</h3>
      <p>We may use your email or phone number to send you updates, security alerts, or important service-related notices.</p>

      <h3>3.3 Interactive Features</h3>
      <p>We use information to allow you to engage in the interactive features of U-Universe, such as participating in polls, quizzes, and social forums.</p>

      <h3>3.4 Customer Care and Support</h3>
      <p>We use your data to provide timely customer support, including but not limited to resolving issues, answering queries, and providing service-related assistance.</p>

      <h2>4. Security</h2>
      <p>We implement industry-standard security measures like SSL, encryption, and two-factor authentication to protect your data. However, we cannot guarantee absolute security due to the inherent risks associated with the internet.</p>
      
      <h2>5. Third-Party Links</h2>
      <p>Our service may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.</p>

      <h2>6. Your Rights</h2>
      <h3>6.1 Access to Information</h3>
      <p>You have the right to request a copy of all personal information we hold about you, typically free of charge.</p>

      <h3>6.2 Correction of Information</h3>
      <p>If you find any inaccuracies in your information, you have the right to have them corrected or removed.</p>

      <h2>7. Changes to Privacy Policy</h2>
      <p>We reserve the right to update this Privacy Policy. Any changes will be communicated through an updated 'last modified' date and, when applicable, direct notifications to users.</p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions, concerns, or suggestions regarding this Privacy Policy, please contact us.</p>
    </div>
  );
};

export default Privacy;