import { useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import { createStyles, Title, Center } from '@mantine/core';
import AuthenticationForm from '../components/AuthentificationForm';


const useStyles = createStyles((theme) => ({
  firstElem: {
    paddingTop: theme.spacing.xl,
  },
}));


export default function UserPage() {
  const { classes, cx } = useStyles();
  const [loginJwt] = useLocalStorage<string | null>({ key: 'login-jwt', defaultValue: null });
  const [formType, setFormType] = useState<'register' | 'login'>('login');

  let content;
  if (!loginJwt) {
    content = (
      <AuthenticationForm formType={formType} setFormType={setFormType} modalSetOpened={() => void(0)} />
    );
  } else {
    content = (
      <Title>Hello world</Title>
    );
  };

  return (
    <Center className={classes.firstElem}>
      {content}
    </Center>
  );
}