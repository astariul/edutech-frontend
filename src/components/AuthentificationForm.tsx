import React, { useState } from 'react';
import { useForm } from '@mantine/hooks';
import { Mail, Lock } from 'tabler-icons-react';
import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Paper,
  Text,
  LoadingOverlay,
  Anchor,
  useMantineTheme,
} from '@mantine/core';

export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
  formType: 'register' | 'login';
  setFormType: React.Dispatch<React.SetStateAction<"register" | "login">>;
}

export default function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style,
  formType,
  setFormType, 
}: AuthenticationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const theme = useMantineTheme();

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
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) => formType === 'login' || val === values?.password,
    },

    errorMessages: {
      email: 'Invalid email',
      password: 'Password should contain 1 number, 1 letter and at least 6 characters',
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setError(
        formType === 'register'
          ? 'User with this email already exists'
          : 'User with this email does not exist'
      );
    }, 3000);
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
        placeholder="Your email"
        label="Email"
        icon={<Mail />}
        {...form.getInputProps('email')}
      />

      <PasswordInput
        mt="md"
        required
        placeholder="Password"
        label="Password"
        icon={<Lock />}
        {...form.getInputProps('password')}
      />

      {formType === 'register' && (
        <PasswordInput
          mt="md"
          required
          label="Confirm Password"
          placeholder="Confirm password"
          icon={<Lock />}
          {...form.getInputProps('confirmPassword')}
        />
      )}

      {formType === 'register' && (
        <Checkbox
          mt="xl"
          label="I agree to sell my soul and privacy to this corporation"
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
            size="sm"
          >
            {formType === 'register'
              ? 'Have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>

          <Button color="blue" type="submit">
            {formType === 'register' ? 'Register' : 'Login'}
          </Button>
        </Group>
      )}
    </form>
  );
}