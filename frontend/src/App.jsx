import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import HomePage from './components/HomePage/HomePage';
import Courses from './components/Courses/Courses';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import './App.scss';

const App = () => {
  const [loginFormVisible, setLoginFormVisible] = useState(false);

  return (
    <Router>
      <Header onLoginClick={() => setLoginFormVisible(true)} />
      {loginFormVisible && <LoginForm onClose={() => setLoginFormVisible(false)} isFormOpen={loginFormVisible} />}
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
};

export default App;
