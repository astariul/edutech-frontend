import { Button, Tooltip } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Logout } from 'tabler-icons-react';

export default function LogoutButton() {
  const [loginJwt, setLoginJwt] = useLocalStorage<string | null>({ key: 'login-jwt', defaultValue: null });

  return (
    <Tooltip
      label="Logout"
      position="bottom"
      withArrow
    >
      <Button variant="subtle" color="gray" onClick={() => {setLoginJwt(null)}}>
        <Logout />
      </Button>
    </Tooltip>
  );
}