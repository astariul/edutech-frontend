import React, { useState, useEffect } from 'react';
import { Navbar, Tooltip, UnstyledButton, createStyles, Group } from '@mantine/core';
import {
  Icon as TablerIcon,
  Notebook,
  Badge,
  ChartLine,
  FileCertificate,
  Settings,
  Perspective,
} from 'tabler-icons-react';
import { Link, useLocation } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const useStyles = createStyles((theme) => ({
  link: {
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

  active: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  link: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, link, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <UnstyledButton component={Link} to={link} onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
}

const linksData = [
  { icon: Perspective, label: 'Overview', link: '/mypage' },
  { icon: Notebook, label: 'Courses', link: '/mypage/courses' },
  { icon: Badge, label: 'Milestones', link: '/mypage/milestones' },
  { icon: ChartLine, label: 'Performances', link: '/mypage/performances' },
  { icon: FileCertificate, label: 'Resume', link: '/mypage/resume' },
  { icon: Settings, label: 'Settings', link: '/mypage/settings' },
];

export default function NavbarMinimal() {
  const [active, setActive] = useState(0);

  const links = linksData.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  const location = useLocation();
  useEffect(() => {
    for (let link of linksData) {
      if (location.pathname.startsWith(link.link)) {
        setActive(linksData.indexOf(link));
      }
    }
  }, [location.pathname, linksData, setActive]);

  return (
    <Navbar fixed position={{ top: 0, left: 0 }} width={{ base: 80 }} p="md">
      <Navbar.Section grow mt={50}>
        <Group direction="column" align="center" spacing={0}>
          {links}
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        <Group direction="column" align="center" spacing={0}>
          <LogoutButton />
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}