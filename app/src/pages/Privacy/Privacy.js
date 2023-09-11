import React from 'react';

const Privacy = ({ onClose }) => {
  const modalContentStyle = {
    maxHeight: '400px', // Adjust the max height as needed
    overflowY: 'auto', // Enable vertical scroll if content overflows
  };

  return (
    <div style={modalContentStyle}>
      <h1>Privacy Policy</h1>
      
      <h2>Introduction</h2>
      <p>We take your privacy seriously. This policy describes what personal information we collect and how we use it.</p>
      
      <h2>Information We Collect</h2>
      <ul>
        <li>Personal Identification Information</li>
        <li>Non-personal Identification Information</li>
      </ul>
      
      <h2>How We Use Information</h2>
      <p>We use the collected information for various purposes:</p>
      <ul>
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer care and support</li>
      </ul>
      
      <h2>Security</h2>
      <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us.</p>
    </div>
  );
};

export default Privacy;
