
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

interface formInputProps {
  value: {
    [x: string]: any;
    onChange: any;
    error: React.ReactNode;
  };
  placeholder: string;
  password?: boolean;
}

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

export default AuthPwModal;
