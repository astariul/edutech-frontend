import React, { useState, useEffect } from 'react';
import { createStyles, Header, Container, Group, Title, Space, Burger, Paper, Transition, Button, Anchor, UnstyledButton  } from '@mantine/core';
import { Link, useLocation } from "react-router-dom";
import { useBooleanToggle, useLocalStorage } from '@mantine/hooks';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import ProfileSummary from './ProfileSummary';
import { IUserProfile } from '../dto/UserProfile';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    zIndex:99,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.fn.largerThan('sm')]: {
      justifyContent: 'space-between',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  title_next_burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
    minWidth: "200px"
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

const links = [
  {
    "link": "/roadmap",
    "label": "코스 로드맵"
  },
  {
    "link": "/reviews",
    "label": "강의 후기"
  },
  {
    "link": "/courses",
    "label": "커리어"
  },
  {
    "link": "/live",
    "label": "라이브"
  },
  {
    "link": "/feed",
    "label": "피드"
  },
  {
    "link": "/class",
    "label": "강의실"
  }
];

export default function HeaderResponsive() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState('');
  const { classes, cx } = useStyles();

  const location = useLocation();
  useEffect(() => {
    for (let link of links) {
      if (location.pathname.startsWith(link.link)) {
        setActive(link.link);
      } else if (location.pathname === "/") {
        setActive('');
      }
    }
  }, [location.pathname, setActive, toggleOpened]);

  const items = links.map((link) => (
    <Anchor
      component={Link}
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      underline={false}
    > 
      {link.label}
    </Anchor>
  ));

  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  let logButtons;
  if (login) {
    logButtons = (
      <Group spacing="md" className={classes.links}>
        <Anchor
          component={Link}
          to="/mypage/settings"
          className={classes.link}
          underline={false}
        > 
          <ProfileSummary />
        </Anchor>
        <LogoutButton />
      </Group>
    );
  } else {
    logButtons = (
      <Group spacing={5} className={classes.links}>
        {/* <SignupButton /> */}
        <LoginButton />
      </Group>
    );
  }

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <UnstyledButton  component={Link} to={"/"}>
          <Group spacing={5} className={classes.links}>
            <Title order={3}>Super Coding</Title>
          </Group>
        </UnstyledButton >
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        {logButtons}

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
        <Group className={classes.title_next_burger}>
          <Space w="md" />
          <Title order={3}>Super Coding</Title>
        </Group>

        <Transition transition="slide-down" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Button variant="outline">
                Sign up
              </Button>
              <Button>
                Login
              </Button>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}