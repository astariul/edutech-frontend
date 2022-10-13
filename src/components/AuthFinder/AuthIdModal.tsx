
import { Anchor } from "@mantine/core";
import {useState } from "react";
import Modal from "../modal/Modal";
import useStyles from './style';
import { useNavigate } from "react-router-dom";

interface AuthFormModalProps {
  modalOpen: boolean;
}

// FIXME: 아이디 반환 구현 필요. 현재는 임시 이메일 반환
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
            {/* FIXME: 로그인 창으로 넘어가는 링크 설정 필요 */}
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
