import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import AuthenticationForm from './AuthentificationForm';

export default function LoginButton() {
  const [opened, setOpened] = useState(false);
  const [formType, setFormType] = useState<'register' | 'login'>('login');

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={formType === 'register' ? 'Register' : 'Login'}
      >
        <AuthenticationForm formType={formType} setFormType={setFormType} />
      </Modal>

      <Button onClick={() => {setOpened(true); setFormType('login')}}>
        Login
      </Button>
    </>
  );
}