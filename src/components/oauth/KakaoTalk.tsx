import { useLocalStorage } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import AuthRepository from "../../repositories/Auth";
import { IUserProfile } from "../../typings/db";
import { Alert, Center, Notification, Space } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const KakaoTalkLogin = () => {
  const [, setLogin] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const [, setAuthorized] = useLocalStorage<string | null>({ key: "authorization", defaultValue: null });
  const [, setRegistered] = useLocalStorage<boolean>({ key: "registered", defaultValue: false });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const code = location.search.split("=")[1];

  const login = useCallback(
    async () => {
      try {
        const response = await new AuthRepository().kakaoLogin(code)
        console.log(response.data);
        setLogin(
          {
            name: response.data.name,
            email: response.data.email,
            avatar: "",
            token: response.data.token
          }
        );
        setRegistered(false);
        setAuthorized("authorized");
      }
      catch (err) {
        setError(true);
      }
      navigate("/");
    }, [setLogin, setRegistered, setAuthorized, navigate, setError, code]
  );

  useEffect(
    () => {
      login();

      return () => {setError(false)}
    }, [login]
  )

  return (
    <>
    {
      error ?
      (
        <Center>
          <Space h={500}/>
          <Alert title="로그인 실패" color="red">
            로그인 실패하였습니다. 다시 시도해 주세요.
          </Alert>
        </Center>
      )
      :
      (
        <Center>
          <Space h={500}/>
          <Notification
            loading
            title="Kakao 로그인"
            disallowClose
          >
            카카오 로그인 중입니다. 잠시만 기다려 주세요.
          </Notification>
        </Center>
      )
      }
    </>
  )
}

export default KakaoTalkLogin;
