import { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import AuthenticationForm from './AuthentificationForm';

export default function SignupButton() {
  const [opened, setOpened] = useState(false);
  const [formType, setFormType] = useState<'register' | 'login'>('register');

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={formType === 'register' ? 'Register' : 'Login'}
      >
        <AuthenticationForm formType={formType} setFormType={setFormType} />
      </Modal>

      <Button onClick={() => {setOpened(true); setFormType('register')}} variant="outline">
        Sign up
      </Button>
    </>
  );
}