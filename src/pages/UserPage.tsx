import { useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import { createStyles, Center } from '@mantine/core';
import AuthenticationForm from '../components/AuthentificationForm';
import { Routes, Route } from 'react-router-dom';
import Overview from './Overview';
import Mycourses from './MyCourses';
import Milestones from './Milestones';
import Performances from './Performances';
import Resume from './Resume';
import Settings from './Settings';


const useStyles = createStyles((theme) => ({
  firstElem: {
    paddingTop: theme.spacing.xl,
  },
}));


export default function UserPage() {
  const { classes } = useStyles();
  const [loginJwt] = useLocalStorage<string | null>({ key: 'login-jwt', defaultValue: null });
  const [formType, setFormType] = useState<'register' | 'login'>('login');

  let content;
  if (!loginJwt) {
    content = (
      <Center className={classes.firstElem}>
        <AuthenticationForm formType={formType} setFormType={setFormType} modalSetOpened={() => void(0)} />
      </Center>
    );
  } else {
    content = (
      <Routes>
        <Route path='' element={<Overview />}></Route>
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