import React, { useState } from 'react';
import { useForm, useLocalStorage } from '@mantine/hooks';
import { Mail, Lock } from 'tabler-icons-react';
import {
  TextInput,
  PasswordInput,
  Group,
  Loader,
  Container,
  Text,
  Button,
  Title,
} from '@mantine/core';

export default function Settings() {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [errorProfile, setErrorProfile] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);

  const formProfile = useForm({
    initialValues: {
      firstName: 'Jean',
      lastName: 'Marie',
      email: 'user@gmail.com',
    },

    validationRules: {
      firstName: (value) => value.trim().length >= 2,
      lastName: (value) => value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
    },

    errorMessages: {
      email: 'Invalid email',
    },
  });

  const formPassword = useForm({
    initialValues: {
      oldpassword: '',
      newpassword: '',
      confirmPassword: '',
    },

    validationRules: {
      newpassword: (val, values) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(val) && val !== values?.oldpassword,
      confirmPassword: (val, values) => val === values?.newpassword,
    },

    errorMessages: {
      newpassword: 'Password should contain 1 number, 1 letter and at least 6 characters, and should be different than old password',
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  const saveChanges = () => {
    setLoadingProfile(true);
    setErrorProfile(null);
    setTimeout(() => {
      setLoadingProfile(false);
      setErrorProfile('API is not open yet');
    }, 500);
  };

  const changePassword = () => {
    setLoadingPassword(true);
    setErrorPassword(null);
    setTimeout(() => {
      setLoadingPassword(false);
      setErrorPassword('API is not open yet');
    }, 500);
  };

  return (
    <Container size="xs" mt={75}>
      <Title order={2} pt="xl" pb="md">
        Public profile
      </Title>
      <form onSubmit={formProfile.onSubmit(saveChanges)}>
        <Group grow>
          <TextInput
            data-autofocus
            description="You can change your first name"
            label="First name"
            {...formProfile.getInputProps('firstName')}
          />

          <TextInput
            description="You can change your last name"
            label="Last name"
            {...formProfile.getInputProps('lastName')}
          />
        </Group>

        <TextInput
          mt="md"
          description="You can change your email"
          label="Email"
          icon={<Mail />}
          {...formProfile.getInputProps('email')}
        />

        {errorProfile && (
          <Text color="red" size="sm" mt="sm">
            {errorProfile}
          </Text>
        )}

        <Group py="xs">
          <Button color="blue" type="submit">
            Save changes
          </Button>
          {loadingProfile ? <Loader size="sm" /> : <></>}
        </Group>
      </form>

      <Title order={2} mt="xl" mb="md">
        Security
      </Title>

      <form onSubmit={formPassword.onSubmit(changePassword)}>
        <PasswordInput
          mt="md"
          required
          placeholder="Password"
          label="Old Password"
          icon={<Lock />}
          {...formPassword.getInputProps('oldpassword')}
        />

        <PasswordInput
          mt="md"
          required
          placeholder="Password"
          label="New Password"
          icon={<Lock />}
          {...formPassword.getInputProps('newpassword')}
        />

        <PasswordInput
          mt="md"
          required
          label="Confirm Password"
          placeholder="Confirm password"
          icon={<Lock />}
          {...formPassword.getInputProps('confirmPassword')}
        />

        {errorPassword && (
          <Text color="red" size="sm" mt="sm">
            {errorPassword}
          </Text>
        )}

        <Group mt="xs">
          <Button color="blue" type="submit">
            Change password
          </Button>
          {loadingPassword ? <Loader size="sm" /> : <></>}
        </Group>
      </form>
    </Container>
  );
}