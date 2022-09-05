import { useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import { createStyles, Center } from '@mantine/core';
import AuthenticationForm from '../components/AuthentificationForm';
import { Routes, Route } from 'react-router-dom';
import Feed from './Feed';
import Mycourses from './MyCourses';
import Milestones from './Milestones';
import Performances from './Performances';
import Resume from './Resume';
import Settings from './Settings';
import { IUserProfile } from '../dto/UserProfile';

const useStyles = createStyles((theme) => ({
  firstElem: {
    paddingTop: theme.spacing.xl,
  },
}));


export default function UserPage() {
  const { classes } = useStyles();
  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const [formType, setFormType] = useState<'register' | 'login'>('login');

  let content;
  if (!login) {
    content = (
      <Center className={classes.firstElem}>
        <AuthenticationForm formType={formType} setFormType={setFormType} modalSetOpened={() => void(0)} />
      </Center>
    );
  } else {
    content = (
      <Routes>
        <Route path='' element={<Feed />}></Route>
        <Route path='courses' element={<Mycourses />}></Route>
        <Route path='milestones' element={<Milestones />}></Route>
        <Route path='performances' element={<Performances />}></Route>
        <Route path='resume' element={<Resume />}></Route>
        <Route path='settings' element={<Settings />}></Route>
      </Routes>
    );
  };

  return content;
}