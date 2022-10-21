import { Link, useLocation } from "react-router-dom";
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
import { useEffect, useState } from "react";

const middleLinks = [
  {
    "link": "/roadmap",
    "label": "슈퍼코스"
  },
  {
    "link": "/live",
    "label": "슈퍼무료강의"
  },
  {
    "link": "/resume",
    "label": "슈퍼이력서"
  },
  {
    "link": "/feed",
    "label": "슈퍼커뮤니티"
  },
  {
    "link": "/myclass",
    "label": "내강의실"
  },
];

const rightLinks = [
  {
    "link": "/signup",
    "label": "회원가입"
  },
  {
    "link": "/login/method",
    "label": "로그인"
  },
];

const HeaderResponsive = () => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    for (let link of middleLinks) {
      if (location.pathname.startsWith(link.link)) {
        setActive(link.link);
      } else if (location.pathname === "/") {
        setActive('');
      }
    }
  }, [location.pathname, setActive, toggleOpened]);
  
  const middleLinkItems = middleLinks.map((link) => {
    if (["/live"].includes(link.link)) {
      return (
        <Anchor
          underline={false}
          className={cx(classes.middleLink, { [classes.linkActive]: active === link.link })}
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
          className={cx(classes.middleLink, { [classes.linkActive]: active === link.link })}
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
    else if (link.link.startsWith("/login")) {
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
    <>
    <Header className={classes.main} height={80} hidden={location.pathname.startsWith("/class")}>
      <div className={classes.header}>
        <UnstyledButton  component={Link} to={"/"}>
          <Group className={classes.biContainer}>
            <img className={classes.bi} src={require("../../../src/static/image/supercodingbi.png")} alt=""></img>
          </Group>
          <Group className={classes.biContainer}>
            <img className={classes.biMobile} src={require("../../../src/static/image/supercodingBIWhite.png")} alt=""></img>
          </Group>
        </UnstyledButton >
        <Group spacing={0} className={classes.middleLinkGroup}>
          {middleLinkItems}
        </Group>
        <Group spacing={0} className={classes.rightLinkGroup}>
          {rightLinkItems}
        </Group>
      </div>
    </Header>
    <Header className={classes.mainMobile} height={100} hidden={location.pathname.startsWith("/class")}>
      <div className={classes.header}>
        <UnstyledButton component={Link} to={"/"}>
          <Group className={classes.biContainer}>
            <img className={classes.biMobile} src={require("../../../src/static/image/supercodingBIWhite.png")} alt=""></img>
          </Group>
        </UnstyledButton >
        <Group hidden={true} spacing={0} className={classes.middleLinkGroupMobile}>
          {middleLinkItems}
        </Group>
        <Group spacing={0} className={classes.rightLinkGroup}>
          {rightLinkItems}
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          color="#FFFFFF"
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
    </>
  );
}

export default HeaderResponsive
