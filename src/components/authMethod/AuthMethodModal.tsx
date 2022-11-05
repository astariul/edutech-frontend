import { useCallback, useState } from "react";
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
  const handleClose = useCallback(
    () => {
      setOpened(false);
      navigate("/")
    }, [navigate, setOpened]
  );

  return (
    <Modal
      show={opened}
      onCloseModal={handleClose}
    >
      <div className={classes.contents}>
        <div className={classes.title}>
          <img className={classes.logo} src={require("../../../src/static/image/supercodinglogo.png")} alt="supercodiong logo" />
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
            onClick={() => navigate(authType === "로그인" ? "/login/form": "/signup/form")}
          />
        </div>
        <div className={classes.link} onClick={() => {authType==="로그인" ? alert("준비중입니다.") : navigate("/login/method")}}>
          {authType === "로그인" ? "아이디 비밀번호찾기" : "이미 회원이라면 로그인하기"}
        </div>
      </div>
    </Modal>
  );
}

export default AuthMethodModal;
