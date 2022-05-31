import React from 'react';
import { createStyles, Container, Group, Title, Anchor } from '@mantine/core';
import { Book } from 'tabler-icons-react';

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

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

const links = [
    {
    "link": "#",
    "label": "Contact"
    },
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
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
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
          <Title order={3}>EduTech</Title>
        </Group>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}