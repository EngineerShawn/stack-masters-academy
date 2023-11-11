import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx';
import LoginRegister from './components/LoginRegister.jsx';
import Courses from './pages/Courses.jsx';
import Background from './components/Background.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import './styles/global.scss';
import './App.scss';

const App = () => {
  const [loginFormVisible, setLoginFormVisible] = useState(false);

  return (
    <Background />,
    <head>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
    </head>,
    <Router>
      <NavigationBar onLoginClick={() => {console.log("Login clicked");setLoginFormVisible(true);}} />
      {loginFormVisible && <LoginRegister onClose={() => setLoginFormVisible(false)} isFormOpen={loginFormVisible} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
