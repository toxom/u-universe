import React from 'react';
import './StartPage.scss'; // Import the StartPage.scss file
import CTA from '../../components/Form/CTA/CTA';
import Card from '../../components/UI/Card/Card';


const StartPage = () => {
  return (
    <div className="start-page">
      <h1>Spend your lifetime doing business you enjoy: Empathy-based e-learning </h1>
      <h2>Listen to entrepreneurial mentality from professional interviews brought to you by researchers</h2>

      {/* Add your CTA component here */}
      <CTA />
      <Card fixedText="This is fixed text for Card 1" additionalText="This is additional text for Card 1 when expanded This is additional text for Card 1 when expanded This is additional text for Card 1 when expanded This is additional text for Card 1 when expanded This is additional text for Card 1 when expanded"></Card>
      <Card fixedText="This is fixed text for Card 2" additionalText="This is additional text for Card 2 when expanded"></Card>
      <Card fixedText="This is fixed text for Card 3" additionalText="This is additional text for Card 3 when expanded"></Card>
      <h2>Still reading? Why not just to join and see it by yourself?</h2>
      <CTA />


    </div>
  );
};

export default StartPage;
