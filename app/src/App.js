import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import StartPage from './pages/StartPage/StartPage';
import Modal from './components/Modal/Modal';
import ContactUs from './pages/ContactUs/ContactUs';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import ForUsers from './pages/Learn/for-users'; // Import the ForUsers component

function App() {
  const [isContactUsModalOpen, setContactUsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);


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

  const openTermsModal = () => {
    setTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setTermsModalOpen(false);
  };

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap";
  document.head.appendChild(link);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <StartPage />
          <Switch>
            <Route path="/contactus" component={ContactUs} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />

            <Route path="/for-users" component={ForUsers} /> {/* Add this line */}
          </Switch>
        </div>
        <Footer openContactUsModal={openContactUsModal} openPrivacyModal={openPrivacyModal} openTermsModal={openTermsModal} />
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
        {/* Render the Terms modal only when isOpen is true */}
        {isTermsModalOpen && (
          <Modal isOpen={isTermsModalOpen} onClose={closeTermsModal}>
            <Terms onClose={closeTermsModal} />
          </Modal>
        )}

      </div>
    </Router>
  );
}

export default App;
