import { useLocalStorage } from '@mantine/hooks';
import { Group, Text } from '@mantine/core';
import { IUserProfile } from '../../typings/db';
import useStyles from './style';
import { useCallback } from 'react';

const Profile = () => {
  const [login, setLogin] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [, setRegistered] = useLocalStorage<boolean>({ key: "registered", defaultValue: false });

  const {classes} = useStyles();

 // 로그아웃 기능 관련 기획 확정될때까지 로그인 시 보여지는 사용자명을 클릭하여 로그아웃 하도록 기능 추가
  const logout = useCallback(
    () => {
      setLogin(null);
      setRegistered(false);
    }, [setLogin, setRegistered]
  )
  return (
    <Group className={classes.main}>
      <span className={classes.circle}>
        <Text className={classes.circleText}>
          {login?.name === undefined ? "C" : login?.name[0]}
        </Text>
      </span>
      <Text className={classes.profileText} onClick={logout}>
        <span>{login?.name}</span>
        <span>님</span>
      </Text>
    </Group>
  );
};

export default Profile;
