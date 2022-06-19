import { createStyles, Button, Tooltip } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Logout } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  logoutbtn: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },
}));

export default function LogoutButton() {
  const { classes, cx } = useStyles();
  const [, setLoginJwt] = useLocalStorage<string | null>({ key: 'login-jwt', defaultValue: null });

  return (
    <Tooltip
      label="Logout"
      position="bottom"
      withArrow
    >
      <Button className={classes.logoutbtn} variant="subtle" color="gray" onClick={() => {setLoginJwt(null)}}>
        <Logout />
      </Button>
    </Tooltip>
  );
}