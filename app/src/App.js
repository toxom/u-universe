import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUs from './pages/ContactUs/ContactUs';
import Privacy from './pages/Privacy/Privacy';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import StartPage from './pages/StartPage/StartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <StartPage />
          <Switch>
            <Route path="/contactus" component={ContactUs} />
            <Route path="/privacy" component={Privacy} />
            {/* Uncomment this if you have a Home component */}
            {/* <Route exact path="/" component={Home} /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
