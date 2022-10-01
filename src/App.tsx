import { useEffect } from 'react';
import Home from './pages/Home';
import { MantineProvider, AppShell } from '@mantine/core';
import { useBooleanToggle, useLocalStorage } from '@mantine/hooks';
import { Routes, Route, useLocation } from 'react-router-dom';
import HeaderResponsive from './components/Header';
import FooterSimple from './components/Footer';
import NavbarMinimal from './components/VerticalNavBar';
import LearningCourse from './pages/LearningCourse';
import CourseRoadMap from './pages/Roadmap';
import MyClassRoom from './pages/MyClassRoom';
import Feed from './pages/Feed';
import AuthRepository from './repositories/Auth';
import { IUserProfile } from './typings/db';
import Survey from './pages/survey/Survey';
import Course from './pages/course/Course';
import ClassRoom from './pages/classRoom/ClassRoom';
import Payment from './pages/payment/Payment';
import Resume from './pages/resume/Resume';

function App() {
  const [navOpened, toggleNavOpened] = useBooleanToggle(false);
  const [login, setLogin] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const [authorized, setAuthorized] = useLocalStorage<string | null>({ key: 'authorization', defaultValue: null });
  const location = useLocation();

  if (authorized) {
    new AuthRepository()
      .me(login?.token as string)
      .then(() => {
        setAuthorized("authorized");
      })
      .catch((err) => {
        if(err.response.status === 401) {
          setAuthorized(null);
          setLogin(null);
        }
      })
  }

  useEffect(() => {
    if (location.pathname.startsWith("/class") || location.pathname.startsWith("/roadmap")) {
      toggleNavOpened(false);
    } else {
      toggleNavOpened(false);
    }
  }, [location.pathname, toggleNavOpened]);

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
          <Route path='/roadmap' element={<CourseRoadMap />}></Route>
          <Route path='/course/*' element={<Course />}></Route>
          <Route path='/myclass' element={<MyClassRoom />}></Route>
          <Route path='/class/*' element={<ClassRoom />}></Route>
          <Route path='/feed' element={<Feed />}></Route>
          <Route path='/mypage/course/*' element={<LearningCourse />}></Route>
          <Route path='/survey/*' element={<Survey />}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
