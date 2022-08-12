import { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import AuthenticationForm from './AuthentificationForm';
import { useLocalStorage } from '@mantine/hooks';

export default function SignupButton() {
  const [opened, setOpened] = useState(false);
  const [formType, setFormType] = useState<'register' | 'login'>('register');
  const [registered, ] = useLocalStorage<boolean>({ key: 'registered', defaultValue: false });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={(formType === 'register' && !registered) ? '회원가입' : '로그인'}
      >
        <AuthenticationForm formType={formType} setFormType={setFormType} modalSetOpened={setOpened} />
      </Modal>

      <Button onClick={() => {setOpened(true); setFormType('register')}} variant="outline">
        회원가입
      </Button>
    </>
  );
}