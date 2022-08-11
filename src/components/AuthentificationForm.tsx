import axios from "axios";
import React, { useState } from 'react';
import { useForm, useLocalStorage } from '@mantine/hooks';
import { Mail, Lock } from 'tabler-icons-react';
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

  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => formType === 'login' || value.trim().length >= 2,
      lastName: (value) => formType === 'login' || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => formType === 'login' || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) => formType === 'login' || val === values?.password,
    },

    errorMessages: {
      email: 'Invalid email',
      password: 'Password should contain 1 number, 1 letter and at least 6 characters',
      confirmPassword: "Passwords don't match. Try again",
    },
  });

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
    }
    catch (err) {
      user = null;
    }
    return user;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    if (formType === 'register') {
      setError('Registration are not open yet');
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
      {formType === 'register' && (
        <Group grow>
          <TextInput
            data-autofocus
            required
            placeholder="Your first name"
            label="First name"
            {...form.getInputProps('firstName')}
          />

          <TextInput
            required
            placeholder="Your last name"
            label="Last name"
            {...form.getInputProps('lastName')}
          />
        </Group>
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

      {formType === 'register' && (
        <PasswordInput
          mt="md"
          required
          label="비밀번호확인"
          placeholder="비밀번호확인"
          icon={<Lock />}
          {...form.getInputProps('confirmPassword')}
        />
      )}

      {formType === 'register' && (
        <Checkbox
          mt="xl"
          label="I agree to the terms of services "
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
            {formType === 'register'
              ? 'Have an account? Login'
              : "아직 계정이 없으신가요? 가입하러가기"}
          </Anchor>

          <Button color="blue" type="submit">
            {formType === 'register' ? 'Register' : '로그인하기'}
          </Button>
        </Group>
      )}
    </form>
  );
}
