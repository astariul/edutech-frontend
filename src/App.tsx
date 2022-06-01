import React from 'react';
import './App.css';
import HeaderResponsive from './components/Header';
import FooterSimple from './components/Footer';
import HeroContentLeft from './components/HeroHeader';
import Intro from './components/Intro';
import Features from './components/Features'
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <HeaderResponsive />
      <HeroContentLeft />
      <Intro />
      <Features />
      <FooterSimple />
    </MantineProvider>
  );
}

export default App;
