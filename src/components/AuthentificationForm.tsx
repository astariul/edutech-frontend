import axios from "axios";
import React, { useState } from 'react';
import { useForm, useLocalStorage } from '@mantine/hooks';
import { Mail, Lock, UserCircle } from 'tabler-icons-react';
import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Text,
  LoadingOverlay,
  Anchor,
} from '@mantine/core';
import { UserProfile } from './LocalStorage';
import { config } from "process";

export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
  formType: 'register' | 'login';
  setFormType: React.Dispatch<React.SetStateAction<"register" | "login">>;
  modalSetOpened: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function AuthenticationForm({
  noSubmit,
  formType,
  setFormType, 
  modalSetOpened,
}: AuthenticationFormProps) {
  const [, setLogin] = useLocalStorage<UserProfile | null>({ key: 'login', defaultValue: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registered, setRegistered] = useLocalStorage<boolean>({ key: 'registered', defaultValue: false });

  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: true,
    },

    validationRules: {
      name: (value) => formType === 'login' || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => formType === 'login' || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) => formType === 'login' || val === values?.password,
    },

    errorMessages: {
      email: '이메일 형식이 올바르지 않습니다.',
      password: '비밀번호는 최소 1자리 숫자와 1자리 문자를 포함하면서 총 6자리로 구성되어야 합니다.',
      confirmPassword: "비밀번호가 일치하지 않습니다.",
    },
  });

  const signup = (id: string, pw: string, name: string) => {
    const data = {
      name: name,
      email: id,
      password: pw,
    };
    axios.post(
      "/auth/signup",
      data,
      { withCredentials: true}
    )
    .then( () => setRegistered(true) )
    .catch( ( {response} ) => {
      if (response.status == 409) {
        setRegistered(true);
        setError("존재하는 아이디입니다. 로그인해주세요")
      }
      response.status == 500 && setError("회원가입에 실패했습니다. 다시 시도해주세요");
    });
  };

  const login = async (id: string, pw: string) => {
    let user;
    try {
      const response = await axios.post(
        "/auth/login",
        { email: id, password: pw },
        { withCredentials: true}
      );
      
      user = {
        token: response.data.token,
        firstName: "",
        lastName: "",
        email: response.data.email,
        avatar: "",
      };
      setLogin(user);
      setRegistered(false);
    }
    catch (err) {
      user = null;
    }
    return user;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    if (formType === 'register' && !registered ) {
      signup(
        form.values.email,
        form.values.password,
        form.values.name,
      )
    } else {
      const user = await login(form.values.email, form.values.password);
      if (user) {
        modalSetOpened(false);
      } else {
        setError('id 또는 비밀번호가 일치하지 않습니다.')
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <LoadingOverlay visible={loading} />
      { formType === 'register' && !registered && (
        <TextInput
          mt="md"
          required
          placeholder="이름"
          label="이름"
          icon={<UserCircle />}
          {...form.getInputProps('name')}
        />
      )}

      <TextInput
        mt="md"
        required
        placeholder="이메일"
        label="아이디"
        icon={<Mail />}
        {...form.getInputProps('email')}
      />

      <PasswordInput
        mt="md"
        required
        placeholder="비밀번호"
        label="비밀번호"
        icon={<Lock />}
        {...form.getInputProps('password')}
      />

      {formType === 'register' && !registered && (
        <PasswordInput
          mt="md"
          required
          label="비밀번호확인"
          placeholder="비밀번호확인"
          icon={<Lock />}
          {...form.getInputProps('confirmPassword')}
        />
      )}

      {formType === 'register' && !registered && (
        <Checkbox
          mt="xl"
          size="xs"
          label="이용약관에 동의합니다. "
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
      )}

      {error && (
        <Text color="red" size="sm" mt="sm">
          {error}
        </Text>
      )}

      {!noSubmit && (
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="gray"
            onClick={toggleFormType}
            size="xs"
          >
            {(formType === 'register' && !registered)
              ? '계정이 있으신가요? 로그인하러가기'
              : "아직 계정이 없으신가요? 가입하러가기"}
          </Anchor>

          <Button color="blue" type="submit">
            {(formType === 'register' && !registered) ? '가입하기' : '로그인하기'}
          </Button>
        </Group>
      )}
    </form>
  );
}
