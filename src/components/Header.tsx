import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Title, Space, Burger, Paper, Transition, Button, Center } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { Book } from 'tabler-icons-react';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
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
    "link": "#edutech-intro",
    "label": "Discover"
  },
  {
    "link": "/classes",
    "label": "Classes"
  },
  {
    "link": "/community",
    "label": "Community"
  }
];

export default function HeaderResponsive() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        toggleOpened(false);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          <Book />
          <Title order={3}>EduTech</Title>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group spacing={5} className={classes.links}>
          <Button variant="outline">
            Sign up
          </Button>
          <Button>
            Login
          </Button>
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
        <Group className={classes.title_next_burger}>
          <Space w="md" />
          <Book />
          <Title order={3}>EduTech</Title>
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