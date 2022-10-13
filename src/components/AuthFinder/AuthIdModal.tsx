
import { Anchor } from "@mantine/core";
import { useCallback, useState } from "react";
import Modal from "../modal/Modal";
import useStyles from './style';
import AuthRepository from '../../repositories/Auth';
import { useForm, useLocalStorage } from '@mantine/hooks';
import { IUserProfile } from "../../typings/db";
import { useNavigate } from "react-router-dom";
import { validateLocaleAndSetLanguage } from "typescript";
import { formList } from "@mantine/form";

interface AuthFormModalProps {
  modalOpen: boolean;
}

const IdRevealer = () => {
  const {classes} = useStyles();

    return (
      <div className={classes.idRevealer}>
        <div className={classes.input}>
            justin@supercoding.com
        </div>
      </div>
    )
}

const AuthIdModal = ({modalOpen}: AuthFormModalProps) => {
  const navigate = useNavigate();
  const {classes} = useStyles();
  const [opened, setOpened] = useState(modalOpen);

  // const login = useCallback( // 수정 필요
  //   async (id: string, password: string) => {
      
  //     try {
  //       const response = await new AuthRepository()
  //       .login(id, password)
  //       setLogin(
  //         {
  //           name: response.data.name,
  //           email: response.data.email,
  //           avatar: "",
  //           token: response.data.token
  //         }
  //       );
  //       setRegistered(false);
  //       setAuthorized("authorized");
  //       navigate("/");
  //     }
  //     catch (err) {
  //       window.alert("id 또는 비밀번호가 일치하지 않습니다.")
  //     }
  //   }, [setAuthorized, setLogin, setRegistered, navigate]
  // )

  // const handleSubmit = useCallback( // 수정 필요
  //   async () => {
  //     switch (authType) {
  //       case "아이디":
  //         login(form.values.email, form.values.password);
  //         break;
  //       case "비밀번호":
  //         console.log("회원가입");
  //         break;
  //     }
  //   }, [authType, login, form]
  // )

  return (
    <Modal
      show={opened}
      onCloseModal={() => setOpened(false)}
      >
      <div>
        <div className={classes.inner}>
          <div className={classes.title}>
            <img className={classes.logo} src="supercodinglogo.png" alt="supercodiong logo" />
            <div className={classes.titleText}>아이디  찾기</div>
          </div>
          <IdRevealer/>
          <div className={classes.submitButtonWrapper}>
            <button className={classes.submitButton} type="submit" >
              로그인하기
            </button>
          </div>
        </div>
      </div>
      {
        (
          <div className={classes.idpwFinder}>
            <Anchor
              component="button"
              type="button"
              size="xs"
              onClick={() => navigate("/login/idfinder")}
              mr = "xs"
              >
              아이디
            </Anchor>
            <Anchor
              component="button"
              type="button"
              size="xs"
              onClick={() => navigate("/login/pwfinder")}
              >
              비밀번호찾기
            </Anchor>
          </div>
        )
      }
    </Modal>
  )
}

export default AuthIdModal;
