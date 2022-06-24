import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import UserPage from './pages/UserPage';
import { MantineProvider, AppShell } from '@mantine/core';
import { useBooleanToggle, useLocalStorage } from '@mantine/hooks';
import { Routes, Route, useLocation } from 'react-router-dom';
import HeaderResponsive from './components/Header';
import FooterSimple from './components/Footer';
import NavbarMinimal from './components/VerticalNavBar';
import {UserProfile} from './components/LocalStorage';


function App() {
  const [navOpened, toggleNavOpened] = useBooleanToggle(false);
  const [login] = useLocalStorage<UserProfile | null>({ key: 'login', defaultValue: null });

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.startsWith("/mypage")) {
      toggleNavOpened(true);
    } else {
      toggleNavOpened(false);
    }
  }, [location.pathname, toggleNavOpened ]);

  let navbar;
  if (navOpened && login) {
    navbar = <NavbarMinimal />;
  } else {
    navbar = undefined;
  };

  return (
    <MantineProvider>
      <AppShell
        navbar={navbar}
        header={<HeaderResponsive />}
        footer={<FooterSimple />}
        styles={(theme) => ({
          main: { padding: '0px' },
        })}
      >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/mypage/*' element={<UserPage />}></Route>
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
