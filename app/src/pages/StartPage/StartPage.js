import React, { useState } from 'react'; // Added useState import
import './StartPage.scss';
import CTA from '../../components/Form/CTA/CTA';
import CTA2 from '../../components/Form/CTA/CTA2';

// Import your second CTA here
// import AnotherCTA from '../../components/Form/AnotherCTA/AnotherCTA';
// import corpart1 from '../../assets/corpart1.svg';
import '../../styles.scss';
import Testimonials from '../../components/Testimonials/Testimonials';
import Brochure from '../../pages/StartPage/Brochure/Brochure';

const StartPage = () => {
  // Added State to manage active CTA
  const [activeCTA, setActiveCTA] = useState('cta1');

  // Function to toggle between CTAs
  const toggleCTA = () => {
    setActiveCTA((prevCTA) => (prevCTA === 'cta1' ? 'cta2' : 'cta1'));
  };
  
  return (
    
    <div id="top-of-page" className="start-page">
      <h2>Spend your lifetime doing business you enjoy:</h2>
      <h1>Empathy-based e-learning in U-universe</h1>
      <h3>Listen to entrepreneurial mentality from professional interviews brought to you by researchers</h3>
      
    {/* Toggle Switch */}
    <label className="switch">
      <input type="checkbox" onChange={toggleCTA} />
      <span className="slider round">
        <span className="slider-text slider-text-left">For Individuals</span>
        <span className="slider-text slider-text-middle"></span>  {/* New middle text */}
        <span className="slider-text slider-text-right">For Teams</span>
      </span>
    </label>
      
      {/* Conditionally rendered CTAs */}
      {activeCTA === 'cta1' && <CTA />}
      {activeCTA === 'cta2' && <CTA2 />}  {/* Replace with your actual second CTA component */}

      <Testimonials />

      <Brochure />

      {/* <h1>Any Concerns?</h1> */}

      {/* Add multiple Card components */}
      {/* <Card
        fixedText="Why do you need even this event for discussing with experts? Couldn’t I just contact the expert by myself?"
        additionalText="tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute. tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute."
      />

      {/* <Comparison /> */}

      <div className="how-it-works">
        <h1>Every day thousands of business research interviews shape the science of entrepreneurship.</h1>
        <h1>Be a part of life-cycle of entrepreneurship research:</h1>

        <div className="how-it-works-item">
          {/* <img src={instructions1} alt="Instructions" /> */}
          <h3>Listen to business research interviews with entrepreneurs.</h3>
        </div>


        <div className="how-it-works-item">
          {/* <img src={instructions1} alt="Instructions" /> */}
          <h3>Listen or even participate in the interviews analytical shows with business researchers.</h3>
        </div>

        <div className="how-it-works-item">
          {/* <img src={instructions1} alt="Instructions" /> */}
          <h3>Get ‘mini-PhD in entrepreneurship’ by listening to research insights explained by international authors.</h3>
        </div>

      </div>

      <div className="last-cta" onClick={() => document.getElementById('top-of-page').scrollIntoView({ behavior: 'smooth' })}>
        <h1>Still reading? Why not just join and see it by yourself?</h1>
      </div>
    </div>
  );
};

export default StartPage;



