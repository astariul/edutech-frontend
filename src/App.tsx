import React from 'react';
import './App.css';
import HeaderResponsive from './components/Header';
import FooterSimple from './components/Footer';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <HeaderResponsive />
      <FooterSimple />
    </MantineProvider>
  );
}

export default App;
