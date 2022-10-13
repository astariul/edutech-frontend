
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
  isButton?: boolean;
  buttonName?: string;
}

interface AuthFormModalProps {
  modalOpen: boolean;
  authType: "아이디" | "비밀번호";
}

const FormInput = ({value, placeholder, isButton=false, buttonName=""}: formInputProps) => {
  const {classes} = useStyles();

  if (isButton) {
    return (
      <div style={{width: "364px", height: "52px", clear: "both"}}>
        <div className={classes.inputContainer} style={{width: "239px", float: "left"}}>
          <input 
            className={classes.input}
            style={{width: "199px"}}
            placeholder={placeholder}
            {...value}
          />
        </div>
        <button 
          className={classes.identifyButton}
          type="submit"
        >
          {buttonName} 
        </button>
      </div>
    )
  }
  else {
    return (
      <div className={classes.inputContainer}>
        <input className={classes.input} placeholder={placeholder} {...value} />
      </div>
    )
  }
}

const AuthFinderModal = ({modalOpen, authType}: AuthFormModalProps) => {
  const navigate = useNavigate();
  const {classes} = useStyles();
  const [opened, setOpened] = useState(modalOpen);
  const [selectedMethod, setSelectedMethod] = useState<string>("phone");
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };
  
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      code: "",
      termsOfService: true,
    },
    validationRules: {
      name: (value) => value.trim().length >= 2,
      phone: (value) => /^(010|011|016|017|018|019)\d{3,4}\d{4}$/.test(value),
      email: (value) => /^\S+@\S+$/.test(value),
      code: (value) => /^\d{6}$/.test(value), 
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
      <form>
        <div className={classes.inner}>
          <div className={classes.title}>
            <img className={classes.logo} src="supercodinglogo.png" alt="supercodiong logo" />
            <div className={classes.titleText}>{authType}  찾기</div>
          </div>
          <div className={classes.radioContainer}>
            <label className={classes.radioText}>
              <input 
                className={classes.radio} 
                type="radio" 
                id="phone"
                name = "authFindType"  
                value="phone"
                checked={selectedMethod === "phone"}
                onChange={radioHandler}/>
               휴대전화로 인증
            </label>
            <label className={classes.radioText}>
              <input 
                className={classes.radio}
                type="radio"
                id="email" 
                name = "authFindType"
                value="email"
                onChange={radioHandler}/>
              본인확인 이메일로 인증
            </label>
          </div>
          <div className={classes.formContainer}>
            <FormInput value={form.getInputProps("name")} placeholder="이름"/>
            <FormInput 
                value={form.getInputProps(selectedMethod === "phone" ? "phone" : "email")} 
                placeholder={selectedMethod === "phone" ? "휴대폰 번호 ('-' 제외)" : "이메일주소"}
                isButton={true}
                buttonName = "인증 요청"
            />
            <FormInput
              value={form.getInputProps("code")}
              placeholder="인증번호"
              isButton={true}
              buttonName = "인증 완료"
            />
          </div>
          <div className={classes.submitButtonWrapper}>
            <button className={classes.submitButton} type="submit" >
              로그인하기
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

export default AuthFinderModal;
