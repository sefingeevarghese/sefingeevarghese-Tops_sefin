import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <ErrorBoundary>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppContainer>
    </ErrorBoundary>
  );
}

export default App;
