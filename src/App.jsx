import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home';
import About from './components/About'; 
import Help from './components/Help';
import Media from './components/Media';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [isLogIn, setIsLogIn] =useState(false);
  const handleLogin = () => setIsLogIn(true);
  const handleLogout = () => setIsLogIn(false);
  return (
    <ThemeProvider>
      <Router>
        <Navbar
          isLogIn={isLogIn}
          handleLogin={handleLogin}
          handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
