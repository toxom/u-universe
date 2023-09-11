import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import StartPage from './pages/StartPage/StartPage';
import Modal from './components/Modal/Modal';
import ContactUs from './pages/ContactUs/ContactUs';
import Privacy from './pages/Privacy/Privacy';
import ForUsers from './pages/Learn/for-users'; // Import the ForUsers component

function App() {
  const [isContactUsModalOpen, setContactUsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);

  const openContactUsModal = () => {
    setContactUsModalOpen(true);
  };

  const closeContactUsModal = () => {
    setContactUsModalOpen(false);
  };

  const openPrivacyModal = () => {
    setPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setPrivacyModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <StartPage />
          <Switch>
            <Route path="/contactus" component={ContactUs} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/for-users" component={ForUsers} /> {/* Add this line */}
          </Switch>
        </div>
        <Footer openContactUsModal={openContactUsModal} openPrivacyModal={openPrivacyModal} />
        {/* Render the Contact Us modal only when isOpen is true */}
        {isContactUsModalOpen && (
          <Modal isOpen={isContactUsModalOpen} onClose={closeContactUsModal}>
            <ContactUs />
          </Modal>
        )}
        {/* Render the Privacy modal only when isOpen is true */}
        {isPrivacyModalOpen && (
          <Modal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal}>
            <Privacy onClose={closePrivacyModal} />
          </Modal>
        )}
      </div>
    </Router>
  );
}

export default App;
