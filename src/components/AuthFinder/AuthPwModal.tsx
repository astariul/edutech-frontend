
import { Anchor } from "@mantine/core";
import { useState } from "react";
import Modal from "../modal/Modal";
import useStyles from './style';
import { useForm } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";

interface formInputProps {
  value: {
    [x: string]: any;
    onChange: any;
    error: React.ReactNode;
  };
  placeholder: string;
  password?: boolean;
}

// FIXME: 임시로 authType을 분기 처리를 위한 값으로 사용
interface AuthFormModalProps {
  modalOpen: boolean;
  authType: "이메일입력" | "비밀번호변경";
}

const FormInput = ({value, placeholder, password=false}: formInputProps) => {
  const {classes} = useStyles();

  return (
    <div className={classes.inputContainer} style={{marginTop: password? "0px":"29px"}}>
      {
        password ? <input type="password" className={classes.input} required placeholder={placeholder} {...value}/>
        : <input className={classes.input} placeholder={placeholder} {...value} />
      }
    </div>
  )
}

const AuthPwModal = ({modalOpen, authType}: AuthFormModalProps) => {
  const navigate = useNavigate();
  const {classes} = useStyles();
  const [opened, setOpened] = useState(modalOpen);

  // FIXME: 기존 형식에 따라서 구현되어 있지만, 실제로 validation하지 않음
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
      termsOfService: true,
    },
    validationRules: {
      name: (value) => value.trim().length >= 2,
      phone: (value) => /^(010|011|016|017|018|019)\d{3,4}\d{4}$/.test(value),
      email: (value) => /^\S+@\S+$/.test(value),
      code: (value) => /^\d{6}$/.test(value), 
      password: (value) => authType === "이메일입력" || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(value),
      confirmPassword: (val, values) => authType === "이메일입력" || val === values?.password,
    },

    errorMessages: {
      phone: "올바른 휴대폰 번호를 입력해주세요.",
      email: "올바른 이메일 주소를 입력해주세요.",
      code: "인증번호를 입력해주세요.",
    },
  });
  
  return (
    <Modal
      show={opened}
      onCloseModal={() => setOpened(false)}
      >
      {/* FIXME: form 제출 구현 필요 */}
      <form>
        <div className={classes.inner}>
          <div className={classes.title}>
            <img className={classes.logo} src="supercodinglogo.png" alt="supercodiong logo" />
            <div className={classes.titleText}>{authType === "이메일입력"? "비밀번호 찾기": "비밀번호 변경"}</div>
          </div>
          { authType === "이메일입력" ?
            <div>
              <FormInput value={form.getInputProps("email")} placeholder="이메일"/>
              <div className={classes.subtleText}>
                회원가입시 이메일 주소를 입력해주세요.
              </div>
            </div>:
            <div className={classes.formContainer}>
              <FormInput
                value={form.getInputProps("password")}
                placeholder="8자이상, 특수문자, 숫자, 영문자 조합"
                password={true}
              />
              <FormInput
                value={form.getInputProps("confirmPassword")}
                placeholder="비밀번호 재확인"
                password={true}
              />
            </div>
          }
          <div className={classes.submitButtonWrapper}>
            <button 
              className={classes.submitButton} 
              onClick={() => navigate("/login/pwfinder2")}
              >
              다음
            </button>
          </div>
        </div>
      </form>
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

export default AuthPwModal;
