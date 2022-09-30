import React from 'react';
import { createStyles, Container, Group, Title, Anchor } from '@mantine/core';
import { Link } from "react-router-dom";
import { Book } from 'tabler-icons-react';
import ContactLink from './ContactLink';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const links = [
    {
    "link": "#",
    "label": "Privacy"
    },
    {
    "link": "#",
    "label": "Blog"
    },
    {
    "link": "#",
    "label": "Careers"
    }
];

export default function FooterSimple() {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      component={Link}
      key={link.label}
      to={link.link}
      size="sm"
    > 
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>
          <Book />
          <Title order={3}>Super Coding</Title>
        </Group>
        <Group className={classes.links}>
          <ContactLink />
          {items}
        </Group>
      </Container>
    </div>
  );
}