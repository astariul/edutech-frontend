import { useLocalStorage } from '@mantine/hooks';
import { Group, Text } from '@mantine/core';
import { IUserProfile } from '../../typings/db';
import useStyles from './style';

const Profile = () => {
  const [login] = useLocalStorage<IUserProfile>({ key: "login"});
  const {classes} = useStyles();
  return (
    <Group className={classes.main}>
      <span className={classes.circle}>
        <Text className={classes.circleText}>
          {login.name[0]}
        </Text>
      </span>
      <Text className={classes.profileText}>
        <span>{login.name}</span>
        <span>님</span>
      </Text>
    </Group>
  );
};

export default Profile;
