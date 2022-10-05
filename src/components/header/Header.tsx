import { Link } from "react-router-dom";
import {
  Header, 
  Group, 
  Burger, 
  Paper, 
  Transition, 
  Anchor, 
  UnstyledButton,  
} from '@mantine/core';
import { useBooleanToggle, useLocalStorage } from '@mantine/hooks';
import Profile from '../profile/Profile';
import { IUserProfile } from '../../typings/db';
import useStyles from './style';

const middleLinks = [
  {
    "link": "/live",
    "label": "무료강의 / 라이브"
  },
  {
    "link": "/roadmap",
    "label": "코스소개"
  },
  {
    "link": "/resume",
    "label": "이력서 업그레이드"
  },
  {
    "link": "/feed",
    "label": "네트워킹"
  },
];

const rightLinks = [
  {
    "link": "/signup",
    "label": "회원가입"
  },
  {
    "link": "/login",
    "label": "로그인"
  },
  {
    "link": "/myclass",
    "label": "내 강의실"
  },
  {
    "link": "/help",
    "label": "고객센터"
  },
];

const HeaderResponsive = () => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });


  const middleLinkItems = middleLinks.map((link) => {
    if (["/live"].includes(link.link)) {
      return (
        <Anchor
          underline={false}
          className={classes.middleLink}
          onClick={() => window.alert("서비스 준비중입니다.")}>{link.label}
        </Anchor>
      )
    }
    else {
      return (
        <Anchor
          component={Link}
          key={link.label}
          to={link.link}
          className={classes.middleLink}
          underline={false}
        > 
          {link.label}
        </Anchor>
      )
    }
    }
  );

  const rightLinkItems = rightLinks.map((link) => {
    if (["/help"].includes(link.link)) {
      return (
        <Anchor
          underline={false}
          className={cx(classes.rightLink, {[classes.align]: login})}
          onClick={() => window.alert("서비스 준비중입니다.")}>
            {link.label}
        </Anchor>
      )
    }
    else if ("/login" === link.link) {
      return (
        <>
        {
          login ? <Profile /> : (
            <Anchor
              component={Link}
              key={link.label}
              to={link.link}
              className={cx(classes.rightLink, {[classes.align]: login})}
              underline={false}
              >
              {link.label}
            </Anchor>
          )
          }
        </>
      )
    }
    else if ("/signup" === link.link) {
      return (
        <>
        {
          (!login) && (
              <Anchor
                component={Link}
                key={link.label}
                to={link.link}
                className={classes.rightLink}
                underline={false}
                > 
                {link.label}
              </Anchor>
            )
          }
        </>
      )
    }
    else {
      return (
        <Anchor
          component={Link}
          key={link.label}
          to={link.link}
          className={cx(classes.rightLink, {[classes.align]: login})}
          underline={false}
        > 
          {link.label}
        </Anchor>
      )
    }
    }
  );

  return (
    <Header className={classes.main} height={"80px"} >
      <div className={classes.header}>
        <UnstyledButton  component={Link} to={"/"}>
          <Group className={classes.biContainer}>
            <img className={classes.bi} src="supercodingbi.png" alt=""></img>
          </Group>
        </UnstyledButton >
        <Group spacing={0} className={classes.middleLinkGroup}>
          {middleLinkItems}
        </Group>
        <Group spacing={0} className={classes.rightLinkGroup}>
          {rightLinkItems}
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="slide-down" duration={200} mounted={opened}>
          {(styles) => (
            <>
            <Paper className={classes.dropdown} withBorder style={styles}>
              {
                login ?
                [...middleLinkItems, ...rightLinkItems.slice(-2)] :
                [...middleLinkItems, ...rightLinkItems]
              }
            </Paper>
            </>
          )}
        </Transition>
      </div>
    </Header>
  );
}

export default HeaderResponsive
