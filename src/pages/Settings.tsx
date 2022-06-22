import React, { useState } from 'react';
import { useForm } from '@mantine/hooks';
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
  Tooltip,
  UnstyledButton,
  Avatar,
  Grid,
  Space,
} from '@mantine/core';

export default function Settings() {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [errorProfile, setErrorProfile] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);

  const avatar = "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80";

  const formProfile = useForm({
    initialValues: {
      firstName: 'Henry',
      lastName: 'Silkeater',
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

  const updateAvatar = () => {

  };

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
            <Tooltip label="Edit" position="right" withArrow transitionDuration={0}>
              <UnstyledButton onClick={updateAvatar}>
                <Avatar size={150} src={avatar} radius={150} />
              </UnstyledButton>
            </Tooltip>
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