import React from 'react';
import './App.css';
import HeaderResponsive from './components/Header';
import FooterSimple from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Community from './pages/Community';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';

const RoutesList = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/courses' element={<Courses />}></Route>
      <Route path='/community' element={<Community />}></Route>
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
