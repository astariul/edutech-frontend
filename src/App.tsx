import React from 'react';
import './App.css';
import HeaderResponsive from './components/Header';
import FooterSimple from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';

const RoutesList = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  );
}

function App() {
  return (
    <MantineProvider>
      <HeaderResponsive />
      <RoutesList />
      <FooterSimple />
    </MantineProvider>
  );
}

export default App;
