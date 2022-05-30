import React from 'react';
import './App.css';
import HeaderResponsive from './components/Header';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <HeaderResponsive />
    </MantineProvider>
  );
}

export default App;
