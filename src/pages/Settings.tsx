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
import { IUserProfile } from '../typings/db';

export default function Settings() {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [errorProfile, setErrorProfile] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);

  const [login] = useLocalStorage<IUserProfile>({ key: 'login' });

  const formProfile = useForm({
    initialValues: {
      name: login.name,
      email: login.email,
      avatar: login.avatar,
    },

    validationRules: {
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
        사용자 프로필 
      </Title>
      <form onSubmit={formProfile.onSubmit(saveChanges)}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              data-autofocus
              description="유저명 변경하기"
              label="유저명"
              {...formProfile.getInputProps('name')}
            />
            <Space h="xs" />
            <TextInput
              mt="md"
              description="이메일 변경하기"
              label="이메일"
              icon={<Mail />}
              {...formProfile.getInputProps('email')}
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


        {errorProfile && (
          <Text color="red" size="sm" mt="sm">
            {errorProfile}
          </Text>
        )}

        <Group py="xs">
          <Button color="blue" type="submit">
            저장하기
          </Button>
          {loadingProfile ? <Loader size="sm" /> : <></>}
        </Group>
      </form>

      {/* <Title order={2} mt="xl" mb="md">
        Security
      </Title> */}

      <form onSubmit={formPassword.onSubmit(changePassword)}>
        <PasswordInput
          mt="md"
          required
          placeholder=""
          label="기존비밀번호"
          icon={<Lock />}
          {...formPassword.getInputProps('oldpassword')}
        />

        <PasswordInput
          mt="md"
          required
          placeholder=""
          label="신규비밀번호"
          icon={<Lock />}
          {...formPassword.getInputProps('newpassword')}
        />

        <PasswordInput
          mt="md"
          required
          label="비밀번호확인"
          placeholder=""
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
            비밀번호 변경하기
          </Button>
          {loadingPassword ? <Loader size="sm" /> : <></>}
        </Group>
      </form>
    </Container>
  );
}