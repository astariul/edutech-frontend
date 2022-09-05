import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import { MantineProvider, AppShell } from '@mantine/core';
import { useBooleanToggle, useLocalStorage } from '@mantine/hooks';
import { Routes, Route, useLocation } from 'react-router-dom';
import HeaderResponsive from './components/Header';
import FooterSimple from './components/Footer';
import NavbarMinimal from './components/VerticalNavBar';
import LearningCourse from './pages/LearningCourse';
import RoadMap from './pages/Roadmap';
import ClassRoom from './pages/ClassRoom';
import MyClassRoom from './pages/MyClassRoom';
import Feed from './pages/Feed';
import AuthRepository from './repositories/Auth';
import { IUserProfile } from './dto/UserProfile';

function App() {
  const [navOpened, toggleNavOpened] = useBooleanToggle(false);
  const [login, setLogin] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const location = useLocation();

  useEffect(() => {
    if (login) {
      new AuthRepository()
        .me()
        .catch(() => setLogin(null))
    }
    if (location.pathname.startsWith("/class")) {
      toggleNavOpened(false);
    } else {
      toggleNavOpened(true);
    }
  }, [location.pathname, toggleNavOpened, login, setLogin]);

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
          <Route path='/roadmap' element={<RoadMap />}></Route>
          <Route path='/classrounge/*' element={<ClassRoom />}></Route>
          <Route path='/class/*' element={<MyClassRoom />}></Route>
          <Route path='/feed' element={<Feed />}></Route>
          <Route path='/mypage/*' element={<UserPage />}></Route>
          <Route path='/mypage/course/*' element={<LearningCourse />}></Route>
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
