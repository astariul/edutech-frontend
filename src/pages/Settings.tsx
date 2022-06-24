import React, { useState } from 'react';
import { useForm, useLocalStorage } from '@mantine/hooks';
import { Mail, Lock, Link } from 'tabler-icons-react';
import {
  TextInput,
  PasswordInput,
  Group,
  Loader,
  Container,
  Text,
  Button,
  Title,
  Tooltip,
  UnstyledButton,
  Avatar,
  Grid,
  Space,
  Popover,
} from '@mantine/core';
import {UserProfile} from '../components/LocalStorage';

export default function Settings() {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [errorProfile, setErrorProfile] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);

  const [login] = useLocalStorage<UserProfile>({ key: 'login' });

  const formProfile = useForm({
    initialValues: {
      firstName: login.firstName,
      lastName: login.lastName,
      email: login.email,
      avatar: login.avatar,
    },

    validationRules: {
      firstName: (value) => value.trim().length >= 2,
      lastName: (value) => value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      avatar: (value) => /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/.test(value),
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

  const [popoverOpened, popoverSetOpened] = useState(false);

  return (
    <Container size="xs" mt={75}>
      <Title order={2} pt="xl" pb="md">
        Public profile
      </Title>
      <form onSubmit={formProfile.onSubmit(saveChanges)}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              data-autofocus
              description="You can change your first name"
              label="First name"
              {...formProfile.getInputProps('firstName')}
            />
            <Space h="xs" />
            <TextInput
              description="You can change your last name"
              label="Last name"
              {...formProfile.getInputProps('lastName')}
            />
          </Grid.Col>
          <Grid.Col offset={1} span={4} py="xl">
            <Popover
              opened={popoverOpened}
              onClose={() => popoverSetOpened(false)}
              target={
                <Tooltip label="Edit" position="right" withArrow transitionDuration={0}>
                  <UnstyledButton onClick={() => popoverSetOpened((o) => !o)}>
                    <Avatar size={150} src={login.avatar} radius={150} />
                  </UnstyledButton>
                </Tooltip>
              }
              width="xl"
              position="top"
              withArrow
            >
              <TextInput
                description="Paste your image's link"
                label="Image link"
                icon={<Link />}
                {...formProfile.getInputProps('avatar')}
              />
            </Popover>
          </Grid.Col>
        </Grid>

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