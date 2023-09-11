import React from 'react';
import './StartPage.scss'; // Import the StartPage.scss file
import CTA from '../../components/Form/CTA/CTA';
// import Card from '../../components/UI/Card/Card';
// import Comparison from '../../components/Comparison/Comparison';
import instructions1 from '../../assets/instructions1.svg';
import '../../styles.scss'; // Import the global stylesheet
import Testimonials from '../../components/Testimonials/Testimonials';


const StartPage = () => {
  return (
    <div className="start-page">
      <h1>Spend your lifetime doing business you enjoy: Empathy-based e-learning </h1>
      <h3>Listen to entrepreneurial mentality from professional interviews brought to you by researchers</h3>
      <CTA />

      {/* Add your CTA component here */}

      <h1>Testimonials</h1>


      <Testimonials />


      {/* <h1>Any Concerns?</h1> */}

      {/* Add multiple Card components */}
      {/* <Card
        fixedText="Why do you need even this event for discussing with experts? Couldn’t I just contact the expert by myself?"
        additionalText="tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute. tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute."
      />
      <Card
        fixedText="Why I cannot just watch it from Youtube and comment there?"
        additionalText="tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute"
      />
      <Card
        fixedText="It’s a midnight in my country when you are planning to conduct interview!"
        additionalText="tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute. "
      /> */}
      {/* Add more Card components as needed */}

      {/*<h1>Do you know we offer 2 times more features for interactive discussions than our competitors?</h1>*/}

      {/* <Comparison /> */}
      <div className="how-it-works">
        <h1>How It Works?</h1>
        <h2>Step 1:</h2>
        <h3>Register to the interview event</h3>
        <img src={instructions1} alt="Instructions" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Step 2:</h2>
        <h3>Receive email link to the online event</h3>
        <img src={instructions1} alt="Instructions" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Step 3:</h2>
        <h3>Engage to the discussion with interactive methods</h3>
        <img src={instructions1} alt="Instructions" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Step 4:</h2>
        <h3>Learn more from transcripts and listen podcasts anywhere you want</h3>
        <img src={instructions1} alt="Instructions" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="last-cta">
        <h1>Still reading? Why not just to join and see it by yourself?</h1>
        <CTA />
      </div>
    </div>
  );
};

export default StartPage;



