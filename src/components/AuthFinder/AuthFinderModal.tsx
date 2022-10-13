// AuthFormModal 참조하여 구성
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
  authType?: string;
  isButton?: boolean;
  buttonName?: string;
}

interface AuthFormModalProps {
  modalOpen: boolean;
  authType: "아이디" | "비밀번호";
}

const FormInput = ({value, placeholder, authType="비밀번호", isButton=false, buttonName=""}: formInputProps) => {
  const navigate = useNavigate();
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
        {/* FIXME: 버튼 활성/비활성화 로직 없음. 현재는 버튼 입력시 무조건 다음 단계로 넘어감 */}
        <button 
          className={classes.identifyButton}
          onClick = {() => navigate(authType === "아이디"? "/login/idfinder2" : "/login/pwfinder2")}
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
  
  // FIXME: 기존 형식에 따라서 구현되어 있지만, 실제로 validation하지 않음
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
                authType = {authType}
                isButton={true}
                buttonName = "인증 요청"
            />
            <FormInput
              value={form.getInputProps("code")}
              placeholder="인증번호"
              authType = {authType}
              isButton={true}
              buttonName = "인증 완료"
            />
          </div>
          <div className={classes.submitButtonWrapper}>
            {/* FIXME: 버튼은 다음 단계로 넘어가게 설정되어 있음 */}
            <button 
              className={classes.submitButton}
              type="submit"
              onClick={() => {authType === "아이디" ? (navigate("/login/idfinder")): navigate("/login/pwfinder3")}}
              >
              {authType==="아이디"? "로그인하기":"다음"}
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
