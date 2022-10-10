import { useState } from "react";
import { Anchor } from "@mantine/core";
import Modal from "../modal/Modal";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";


interface AuthMethodButtonProps {
  image: string;
  title: string;
  onClick: () => void;
}

interface AuthMethodModalProps {
  modalOpen: boolean;
  authType: "회원가입" | "로그인";
  easyMethods: {
    image: string;
    title: string;    
  }[];
  key?: number; // to force rerender if user is aleady on the "/login" or "/signup" page
}

const AuthMethodButton = ({
  image,
  title,
  onClick
}: AuthMethodButtonProps) => {
  const {classes} = useStyles();

  return (
    <button className={classes.methodBox} type="button" onClick={onClick}>
      <div className={classes.method}>
        <img src={image} alt=""/>
        <div className={classes.methodTitle}>{title}</div>
      </div>
    </button>
  )
}


const AuthMethodModal = ({
  modalOpen,
  authType,
  easyMethods,
}: AuthMethodModalProps) => {

  const {classes} = useStyles();
  const [opened, setOpened] = useState(modalOpen);
  const navigate = useNavigate();

  return (
    <Modal
      show={opened}
      onCloseModal={() => setOpened(false)}
    >
      <div className={classes.inner}>
        <div className={classes.title}>
          <img className={classes.logo} src="supercodinglogo.png" alt="supercodiong logo" />
          <div className={classes.titleText}>{authType}</div>
        </div>
        <div className={classes.methodContainer}>
          {
            easyMethods.map(
              (method) => (
                <AuthMethodButton
                  key={method.title}
                  image={method.image}
                  title={method.title}
                  onClick={() => window.alert("서비스 준비중입니다.")}
                />
              )
            )
          }
          <div className={classes.divideLine} />
          <AuthMethodButton
            image={require("../../../src/static/image/email.png")}
            title={"이메일로 시작하기"}
            onClick={() => navigate("/login/form")}
          />
        </div>
        <div className={classes.idpwFinder}>
          <Anchor
            component="button"
            type="button"
            size="xs"
          >
            아이디 비밀번호찾기
          </Anchor>
        </div>
      </div>
    </Modal>
  );
}

export default AuthMethodModal;
