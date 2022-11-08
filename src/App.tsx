import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import { MantineProvider, AppShell } from "@mantine/core";
import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderResponsive from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import LearningCourse from "./pages/LearningCourse";
import MyClassRoom from "./pages/myClassRoom/MyClassRoom";
import Feed from "./pages/Feed";
import AuthRepository from "./repositories/Auth";
import { IUserProfile } from "./typings/db";
import Survey from "./pages/survey/Survey";
import Payment from "./pages/payment/Payment";
import Resume from "./pages/resume/Resume";
import AuthMethodModal from "./components/authMethod/AuthMethodModal";
import { AuthForm } from "./components/authForm/AuthForm";
import VideoRoom from "./pages/videoRoom/VideoRoom";
import Product from "./pages/product/Product";
import TimeBanner from "./components/timeBanner/TimeBanner";
import FreeCourse from "./pages/freeCourse/FreeCourse";
import { useNavigate } from "react-router-dom";
import NetworkingProgram from "./pages/networkingProgram/NetworkingProgram";
import KakaoTalkLogin from "./components/oauth/KakaoTalk";

function App() {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [footerHidden, setFooterHidden] = useState(false);
  const [login, setLogin] = useLocalStorage<IUserProfile | null>({
    key: "login",
    defaultValue: null,
  });
  const [authorized, setAuthorized] = useLocalStorage<string | null>({
    key: "authorization",
    defaultValue: null,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [bannerMessage, setBannerMessage] = useState("");
  const [bannerMessageColor, setBannerMessageColor] = useState("#0094FF");
  const [bannerButtonMesg, setbannerButtonMesg] = useState("");
  const [bannerOn, setBannerOn] = useState(false);
  const mobileScreen = useMediaQuery("(max-width: 900px)");

  if (authorized) {
    new AuthRepository()
      .me(login?.token as string)
      .then(() => {
        setAuthorized("authorized");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setAuthorized(null);
          setLogin(null);
        }
      });
  }

  useEffect(() => {
    if (location.pathname.startsWith("/course")) {
      setBannerMessage("1기 판매 마감 임박! 지금이 최저가");
      setbannerButtonMesg("지금 바로 구매");
      setBannerMessageColor("#0094FF");
      setBannerOn(true);
    } else if (location.pathname.startsWith("/free")) {
      setBannerMessage("완강 후기 작성하면 1개월 무료!");
      setbannerButtonMesg("이벤트 바로가기");
      setBannerMessageColor("#DBFF00");
      setBannerOn(true);
    } else if (location.pathname.startsWith("/payment") && mobileScreen) {
      setHeaderHidden(true);
      setFooterHidden(true);
    } else if (location.pathname.startsWith("/class")) {
      setFooterHidden(true);
    } else {
      setBannerOn(false);
    }

    return () => {
      setHeaderHidden(false);
      setFooterHidden(false);
      setBannerOn(false);
    };
  }, [
    location.pathname,
    bannerMessage,
    setBannerMessage,
    setBannerMessageColor,
    setBannerOn,
    setbannerButtonMesg,
    setHeaderHidden,
    setFooterHidden,
    mobileScreen,
  ]);

  return (
    <MantineProvider>
      <AppShell
        header={headerHidden ? <></> : <HeaderResponsive />}
        footer={
          <>
            {footerHidden ? <></> : <Footer />}
            {bannerOn && bannerMessage !== "" ? (
              <TimeBanner
                dDay="2022-11-20"
                message={bannerMessage}
                messageColor={bannerMessageColor}
                buttonString={bannerButtonMesg}
                onClickButton={
                  bannerButtonMesg === "지금 바로 구매"
                    ? () =>
                        navigate("/payment", {
                          state: process.env.REACT_APP_COURSE_ID,
                        })
                    : () => {
                        alert("이벤트 오픈전입니다.");
                      }
                }
              />
            ) : (
              <></>
            )}
          </>
        }
        styles={(theme) => ({
          main: { padding: "0px" },
        })}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/signup/method"
            element={
              <AuthMethodModal
                key={Date.now()}
                modalOpen={true}
                authType={"회원가입"}
                easyMethods={[
                  {
                    image: require("../src/static/image/kakaotalk.png"),
                    title: "카카오톡으로 시작하기",
                    serviceProvider: "kakao"
                  },
                  // {
                  //   image: require("../src/static/image/google.png"),
                  //   title: "구글로 시작하기",
                  // },
                ]}
              />
            }
          ></Route>
          <Route
            path="/signup/form"
            element={<AuthForm modalOpen={true} authType={"회원가입"} />}
          ></Route>
          <Route
            path="/login/method"
            element={
              <AuthMethodModal
                key={Date.now()}
                modalOpen={true}
                authType={"로그인"}
                easyMethods={[
                  {
                    image: require("../src/static/image/kakaotalk.png"),
                    title: "카카오톡으로 시작하기",
                    serviceProvider: "kakao"
                  },
                  // {
                  //   image: require("../src/static/image/google.png"),
                  //   title: "구글로 시작하기",
                  // },
                ]}
              />
            }
          ></Route>
          <Route
            path="/login/form"
            element={<AuthForm modalOpen={true} authType={"로그인"} />}
          ></Route>
          <Route path="/free" element={<FreeCourse />}></Route>
          <Route path="/course" element={<Product />}></Route>
          <Route path="/myclass" element={<MyClassRoom />}></Route>
          <Route path="/class/*" element={<VideoRoom />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/mypage/course/*" element={<LearningCourse />}></Route>
          <Route
            path="/survey/:courseId/:episodeNumber"
            element={<Survey />}
          ></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/networking" element={<NetworkingProgram />}></Route>
          <Route path="/auth/kakao" element={<KakaoTalkLogin />}></Route>
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
