import { createStyles, Text, Container, ActionIcon, Group, Space } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook, IconBrandAdobe } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 300,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 20,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    marginBottom: theme.spacing.xs,
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const data = [
  {"title": "예시 제목 -1-",
    "links": [
      {"label": "예시 1 - 1", "link": "#"},
      {"label": "예시 1 - 2", "link": "#"},
      {"label": "예시 1 - 2", "link": "#"}
  ]},
  {"title": "예시 제목 -2-",
    "links": [ 
      {"label": "예시 2 - 1", "link": "#"},
      {"label": "예시 2 - 2", "link": "#"},
      {"label": "예시 2 - 3", "link": "#"}
   ]},
  {"title": "예시 제목 -3-",
    "links": [ 
      {"label": "예시 3 - 1", "link": "#"},
      {"label": "예시 3 - 2", "link": "#"},
      {"label": "예시 3 - 3", "link": "#"}
  ]}
];

// interface FooterLinksProps {
//   data: {
//     title: string;
//     links: { label: string; link: string }[];
//   }[];
// }

export function FooterLinks() {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group spacing={0} className={classes.social} position="left" noWrap>
            <ActionIcon size="lg">
              <IconBrandTwitter size={25} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size={25} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size={25} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandFacebook size={25} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandAdobe size={25} stroke={1.5} />
            </ActionIcon>
          </Group>
          <div style={{"display": "flex"}}>
          <Text size="sm" component="a" href="#">
          {/* onClick={(event) => event.preventDefault()} */}
            개인정보처리방침
          </Text><Space w="md" />
          <Text size="sm" component="a" href="#">
            이용약관
          </Text><Space w="md" />
          <Text size="sm" component="a" href="#">
            고객센터
          </Text><Space w="md" />
          </div>
          <Text size="xs" color="dimmed" className={classes.description}>
            <p>
            상호명 (수정 필요) : Super coding(슈퍼코딩) 대표이사 : XXX 사업자등록번호 : XXX-XX-XXXXX
            이메일 (수정 필요) : support@~ 전화 : XX-XXX-XXXX 주소 : 미정
            </p>
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 supercoding.dev (?). All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}