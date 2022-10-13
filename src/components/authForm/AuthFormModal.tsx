
import { Anchor } from "@mantine/core";
import { useCallback, useState } from "react";
import Modal from "../modal/Modal";
import useStyles from './style';
import AuthRepository from '../../repositories/Auth';
import { useForm, useLocalStorage } from '@mantine/hooks';
import { IUserProfile } from "../../typings/db";
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

interface AuthFormModalProps {
  modalOpen: boolean;
  authType: "회원가입" | "로그인";
}

const FormInput = ({value, placeholder, password=false}: formInputProps) => {
  const {classes} = useStyles();

  return (
    <div className={classes.inputContainer}>
      {
        password ? <input type="password" className={classes.input} required placeholder={placeholder} {...value}/>
        : <input className={classes.input} placeholder={placeholder} {...value} />
      }
    </div>
  )
}

const AuthFormModal = ({modalOpen, authType}: AuthFormModalProps) => {
  const navigate = useNavigate();
  const {classes} = useStyles();
  const [opened, setOpened] = useState(modalOpen);
  const [, setLogin] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [, setAuthorized] = useLocalStorage<string | null>({ key: "authorization", defaultValue: null });
  const [, setRegistered] = useLocalStorage<boolean>({ key: "registered", defaultValue: false });
  
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: true,
    },

    validationRules: {
      name: (value) => authType === "로그인" || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => authType === "로그인" || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(value),
      confirmPassword: (val, values) => authType === "로그인" || val === values?.password,
    },

    errorMessages: {
      email: '이메일 형식이 올바르지 않습니다.',
      password: '비밀번호는 최소 1자리 숫자와 1자리 문자를 포함하면서 6자 이상 15자 이하로 구성되어야 합니다.',
      confirmPassword: "비밀번호가 일치하지 않습니다.",
    },
  });

  const login = useCallback(
    async (id: string, password: string) => {
      
      try {
        const response = await new AuthRepository()
        .login(id, password)
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
        navigate("/");
      }
      catch (err) {
        window.alert("id 또는 비밀번호가 일치하지 않습니다.")
      }
    }, [setAuthorized, setLogin, setRegistered, navigate]
  )

  const handleSubmit = useCallback(
    async () => {
      switch (authType) {
        case "로그인":
          login(form.values.email, form.values.password);
          break;
        case "회원가입":
          console.log("회원가입");
          break;
      }
    }, [authType, login, form]
  )

  return (
    <Modal
      show={opened}
      onCloseModal={() => setOpened(false)}
      >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={classes.inner}>
          <div className={classes.title}>
            <img className={classes.logo} src="supercodinglogo.png" alt="supercodiong logo" />
            <div className={classes.titleText}>{authType}</div>
          </div>
          <div className={classes.formContainer}>
            <FormInput value={form.getInputProps("email")} placeholder="이메일"/>
            <FormInput
              value={form.getInputProps("password")}
              placeholder="8자이상, 특수문자, 숫자, 영문자 조합"
              password={true}
            />
          </div>
          <div className={classes.submitButtonWrapper}>
            <button className={classes.submitButton} type="submit">
              {authType === "로그인" ? "로그인하기" : "회원가입하기"}
            </button>
          </div>
        </div>
      </form>
      {/* 아이디 찾기와 비밀번호 찾기로 각각 이동하는 링크 구현 */}
      {
        (authType === "로그인") && (
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

export default AuthFormModal;
