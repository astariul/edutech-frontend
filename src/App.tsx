import { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import { MantineProvider, AppShell, Center } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Routes, Route, useLocation } from 'react-router-dom';
import HeaderResponsive from './components/header/Header';
import Footer from './components/Footer/Footer';
import LearningCourse from './pages/LearningCourse';
import MyClassRoom from './pages/myClassRoom/MyClassRoom';
import Feed from './pages/Feed';
import AuthRepository from './repositories/Auth';
import { IUserProfile } from './typings/db';
import Survey from './pages/survey/Survey';
import Payment from './pages/payment/Payment';
import Resume from './pages/resume/Resume';
import AuthenticationForm from './components/AuthentificationForm';
import AuthMethodModal from './components/authMethod/AuthMethodModal';
import AuthFormModal from './components/authForm/AuthFormModal';
import VideoRoom from './pages/videoRoom/VideoRoom';
import Product from './pages/product/Product';
import TimeBanner from './components/timeBanner/TimeBanner';
import FreeCourse from './pages/freeCourse/FreeCourse';

function App() {
  const [login, setLogin] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const [authorized, setAuthorized] = useLocalStorage<string | null>({ key: 'authorization', defaultValue: null });
  const [, setFormType] = useState<"register" | "login">("login");
  const location = useLocation();
  const [bannerMessage, setBannerMessage] = useState("");
  const [bannerMessageColor, setBannerMessageColor] = useState("#0094FF");
  const [bannerOn, setBannerOn] = useState(false);

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

  useEffect(
    () => {
      if (location.pathname.startsWith("/course")) {
        setBannerMessage("1기 판매 마감! 이 가격 마지막");
        setBannerMessageColor("#0094FF");
        setBannerOn(true);
      }
      else if (location.pathname.startsWith("/free")) {
        setBannerMessage("완강 후기 작성하면 1개월 무료!");
        setBannerMessageColor("#DBFF00");
        setBannerOn(true);
      }
      else {
        setBannerOn(false);
      }
    }, [location.pathname, bannerMessage, setBannerMessage, setBannerMessageColor, setBannerOn]
  );

  return (
    <MantineProvider>
      <AppShell
        header={<HeaderResponsive />}
        footer={
        <>
          <Footer />
          {
            bannerOn && bannerMessage !== "" ?
            <TimeBanner dDay="2022-11-20" message={bannerMessage} messageColor={bannerMessageColor}/>
            :
            <></>
          }
        </>
        }
        styles={(theme) => ({
          main: { padding: '0px' },
        })}
      >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route
            path='/signup'
            element={
              <Center sx={{marginTop: 100}}>
                <AuthenticationForm formType={"register"} setFormType={setFormType} modalSetOpened={() => void(0)} />
              </Center>
            }>
          </Route>
          <Route
            path='/login/method'
            element={
              <AuthMethodModal
                key={Date.now()}
                modalOpen={true}
                authType={"로그인"}
                easyMethods={
                  [
                    {image: require("../src/static/image/naver.png"), title: "네이버로 시작하기"},
                    {image: require("../src/static/image/kakaotalk.png"), title: "카카오톡으로 시작하기"},
                    {image: require("../src/static/image/google.png"), title: "구글로 시작하기"},
                    {image: require("../src/static/image/apple.png"), title: "Apple로 시작하기"},
                    {image: require("../src/static/image/facebook.png"), title: "페이스북으로 시작하기"},
                  ]
                }
              />
            }>
          </Route>
          <Route path='/login/form' element={<AuthFormModal modalOpen={true} authType={"로그인"}/>}></Route>
          <Route path='/free' element={<FreeCourse />}></Route>
          <Route path='/course' element={<Product />}></Route>
          <Route path='/myclass' element={<MyClassRoom />}></Route>
          <Route path='/class/*' element={<VideoRoom/>}></Route>
          <Route path='/feed' element={<Feed />}></Route>
          <Route path='/mypage/course/*' element={<LearningCourse />}></Route>
          <Route path='/survey/:courseId/:episodeNumber' element={<Survey />}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
