
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useCallback } from "react";
// import Modal from "../modal/Modal";
import useStyles from './style';
import AuthRepository from '../../repositories/Auth';
import { useForm, useLocalStorage } from '@mantine/hooks';
import { IAccount, IUserProfile } from "../../typings/db";
import { useNavigate } from "react-router-dom";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";

interface formInputProps {
  value: {
    [x: string]: any;
    onChange: any;
    error: React.ReactNode;
  };
  placeholder: string;
  password?: boolean;
  className?: string;
}

interface AuthFormModalProps {
  modalOpen: boolean;
  authType: "회원가입" | "로그인";
}

interface SignUpMobileProps {
  form: UseForm<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    authNumber: string;
    termsOfService: boolean;
  }>;
  signupHandler: (user: IAccount) => void;
  verificationHandler: (verifiMethod: string) => void;
}


interface LoginMobileProps {
  form: UseForm<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    authNumber: string;
    termsOfService: boolean;
  }>;
  loginHandler: (id: string, password: string) => void;
}


export const FormInput = ({value, placeholder, className, password=false}: formInputProps) => {
  const {classes, cx} = useStyles();

  return (
    <div className={cx(classes.formInputBox, className)}>
      {/* {
        password ? <input type="password" className={classes.input} required placeholder={placeholder} {...value}/>
        : <input className={classes.input} placeholder={placeholder} {...value} />
      } */}
      {
        password ? <PasswordInput className={"input"} required placeholder={placeholder} {...value} />
        : <TextInput className={"input"} required placeholder={placeholder} {...value}/>
      }
    </div>
  )
}

const SignUpMobile = ({form, signupHandler, verificationHandler}: SignUpMobileProps) => {
  const {classes, cx} = useStyles();
  const navigate = useNavigate();
  return (
    <form onSubmit={
      form.onSubmit(
        () => (
          signupHandler(
            {
              email: form.values.email,
              password: form.values.password,
              name: form.values.name,
              termsOfService: form.values.termsOfService,
            }
          )
        )
    )}>
    <section className={classes.mainMobile}>
      <div className={cx(classes.columnFlex, classes.contents)}>
        <div className={cx(classes.rowFlex, classes.biLogo)} onClick={() => navigate("/")}>
          <img src={require("../../../src/static/image/supercodingbi.png")} alt="logo"/>
        </div>
        <div className={cx(classes.rowFlex, classes.pageTitle)}>
          <h2>이메일로 시작하기</h2>
        </div>

        <div className={cx(classes.columnFlex, classes.formBoxArea)}>
          <FormInput value={form.getInputProps("email")} placeholder="이메일"/>
          <FormInput
            value={form.getInputProps("password")}
            placeholder="비밀번호(특수문자, 숫자, 영문자 조합된 8 이상 문자)"
            password={true}
          />
          <FormInput
            value={form.getInputProps("confirmPassword")}
            placeholder="비밀번호 재확인"
            password={true}
          />
          <FormInput value={form.getInputProps("name")} placeholder="이름"/>
          {/* <div className={classes.emailVerification}>
            <FormInput className={classes.authNumber} value={form.getInputProps("authNumber")} placeholder="이메일 인증번호"/>
            <button
              className={classes.verificationButton}
              onClick={() => {verificationHandler(form.values.email)}}
            >
              인증번호 요청
            </button>
          </div> */}
        </div>
        <div className={classes.checkBoxArea}>
          {
            ["(필수) 슈퍼코딩 이용약관"].map(
              (message, index) => (
                <div key={index} className={cx(classes.rowFlex, classes.agreements)}>
                  <Checkbox className={classes.checker} radius={4} {...form.getInputProps('termsOfService', { type: 'checkbox' })}/>
                  <div id="agreement_content">
                    <div id="agreement_name">{message}</div>
                    <div id="agreement_modalBtn" onClick={() => {}}>내용보기</div>
                  </div>
                </div>
              )
              )
            }
        </div>
        <Button
          className={classes.signupButton}
          type="submit"
          onClick={
            () => signupHandler(
              {
                email: form.values.email,
                password: form.values.password,
                name: form.values.name,
                termsOfService: form.values.termsOfService,
              }
              )
            }
          >
          가입하기
        </Button>
      </div>
    </section>
    </form>
  )
}

const LoginMobile = ({form, loginHandler}: LoginMobileProps) => {
  const {classes, cx} = useStyles();
  const navigate = useNavigate();
  return (
    <section className={classes.mainMobile}>
      <div className={cx(classes.columnFlex, classes.contents)}>
        <div className={cx(classes.rowFlex, classes.biLogo)} onClick={() => navigate("/")}>
          <img src={require("../../../src/static/image/supercodingbi.png")} alt="logo"/>
        </div>
        <div className={cx(classes.rowFlex, classes.pageTitle)}>
          <h2>로그인</h2>
        </div>
        <div className={cx(classes.columnFlex, classes.formBoxArea)}>
          <FormInput value={form.getInputProps("email")} placeholder="이메일"/>
          <FormInput
            value={form.getInputProps("password")}
            placeholder="비밀번호(특수문자, 숫자, 영문자 조합된 8 이상 문자)"
            password={true}
          />
        </div>
        <div style={{marginTop: "31px"}}>
          <Button
            className={classes.signupButton}
            onClick={() => loginHandler(form.values.email, form.values.password)}
          >
            로그인하기
          </Button>
        </div>
      </div>
    </section>
  )
}

export const AuthForm = ({modalOpen, authType}: AuthFormModalProps) => {
  const navigate = useNavigate();
  // const {classes} = useStyles();
  // const [, setOpened] = useState(modalOpen);
  const [, setLogin] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [, setAuthorized] = useLocalStorage<string | null>({ key: "authorization", defaultValue: null });
  const [, setRegistered] = useLocalStorage<boolean>({ key: "registered", defaultValue: false });
  
  const form = useForm<{
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      authNumber: string;
      termsOfService: boolean;
    }>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      authNumber: "",
      termsOfService: false,
    },

    validationRules: {
      name: (value) => authType === "로그인" || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => authType === "로그인" || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value),
      confirmPassword: (val, values) => authType === "로그인" || val === values?.password,
    },

    errorMessages: {
      email: '이메일 형식이 올바르지 않습니다.',
      password: '비밀번호 형식에 맞지 않습니다.',
      confirmPassword: "비밀번호가 일치하지 않습니다.",
    },
  });

  const verifyEmail = useCallback(
    async (email: string) => {
      await new AuthRepository()
        .sendMail(email)
        .then(
          (response) => {
            response.status === 200 && alert("id로 입력하신 이메일로 인증번호가 발송되었습니다. 확인 후 입력해주세요");
          })
    }, []
  )

  const signup = useCallback(
    async (user: IAccount) => {
    if (!user.termsOfService) {
      alert("이용약관에 동의해주세요")
      return;
    }
    await new AuthRepository()
      .signup(user)
      .then(
        () => {
          setRegistered(false);
          alert("회원가입되었습니다. 로그인해주세요");
          navigate("/login/form");
        }
      )
      .catch(
        ({response}) => {
          if (response.status === 409) {
            alert("이미 가입된 아이디입니다. 다른 아이디로 가입해주세요");
            return
          }
          response.status === 500 && alert("회원가입에 실패했습니다. 다시 시도해주세요");
        }
      )
      }, [navigate, setRegistered]
  )

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
        alert("id 또는 비밀번호가 일치하지 않습니다.")
      }
    }, [setAuthorized, setLogin, setRegistered, navigate]
  )

  // const handleSubmit = useCallback(
  //   async () => {
  //     switch (authType) {
  //       case "로그인":
  //         login(form.values.email, form.values.password);
  //         break;
  //       case "회원가입":
  //         signup({
  //           email: form.values.email,
  //           password: form.values.password,
  //           name: form.values.name,
  //           termsOfService: form.values.termsOfService,
  //         });
  //         break;
  //     }
  //   }, [authType, login, form, signup]
  // )

  // const handleClose = useCallback(
  //   () => {
  //     setOpened(false);
  //     navigate("/")
  //   }, [navigate, setOpened]
  // );

  return (
    <>
    {
      (authType === "로그인") ?
      <LoginMobile form={form} loginHandler={login}/>
      // <Modal
      //   show={opened}
      //   onCloseModal={handleClose}
      // >
      //   <form onSubmit={form.onSubmit(handleSubmit)}>
      //     <div className={classes.inner}>
      //       <div className={classes.title}>
      //         <img className={classes.logo} src={require("../../../src/static/image/supercodinglogo.png")} alt="supercodiong logo" />
      //         <div className={classes.titleText}>{authType}</div>
      //       </div>
      //       <div className={classes.formContainer}>
      //         <FormInput value={form.getInputProps("email")} placeholder="이메일"/>
      //         <FormInput
      //           value={form.getInputProps("password")}
      //           placeholder="8자이상, 특수문자, 숫자, 영문자 조합"
      //           password={true}
      //         />
      //       </div>
      //       <div className={classes.submitButtonWrapper}>
      //         <button className={classes.submitButton} type="submit">로그인하기</button>
      //       </div>
      //     </div>
      //   </form>
      //   <div className={classes.idpwFinder}>
      //     <Anchor
      //       component="button"
      //       type="button"
      //       size="xs"
      //       >
      //       아이디 비밀번호찾기
      //     </Anchor>
      //   </div>
      // </Modal>
      : 
      <SignUpMobile form={form} signupHandler={signup} verificationHandler={verifyEmail}/>
      // <Modal
      //   show={opened}
      //   onCloseModal={handleClose}
      // >
      //   <form onSubmit={form.onSubmit(handleSubmit)}>
      //     <div className={classes.inner}>
      //       <div className={classes.title}>
      //         <img className={classes.logo} src={require("../../../src/static/image/supercodinglogo.png")} alt="supercodiong logo" />
      //         <div className={classes.titleText}>{authType}</div>
      //       </div>
      //       <div className={classes.formContainer}>
      //         <FormInput value={form.getInputProps("email")} placeholder="이메일"/>
      //         <FormInput
      //           value={form.getInputProps("password")}
      //           placeholder="8자이상, 특수문자, 숫자, 영문자 조합"
      //           password={true}
      //         />
      //         <FormInput
      //           value={form.getInputProps("confirmPassword")}
      //           placeholder="비밀번호 재확인"
      //           password={true}
      //         />
      //         <FormInput value={form.getInputProps("name")} placeholder="이름"/>
      //         <div className={classes.emailVerification}>
      //           <FormInput value={form.getInputProps("name")} placeholder="이메일 인증번호"/>
      //           <button
      //             className={classes.verificationButton}
      //             onClick={() => {}}
      //           >
      //             인증번호 요청
      //           </button>
      //         </div>
      //       </div>
      //       <div className={classes.submitButtonWrapper}>
      //         <button className={classes.submitButton} type="submit">가입하기</button>
      //       </div>
      //     </div>
      //   </form>
      // </Modal>
    }
    </>
  )
}

// export default AuthFormModal;
