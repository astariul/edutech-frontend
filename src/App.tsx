import React from 'react';
import './App.css';
import HeaderResponsive from './components/Header';
import FooterSimple from './components/Footer';
import HeroContentLeft from './components/HeroHeader';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <HeaderResponsive />
      <HeroContentLeft />
      <FooterSimple />
    </MantineProvider>
  );
}

export default App;
