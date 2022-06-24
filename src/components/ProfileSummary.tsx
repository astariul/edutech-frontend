import React from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { Avatar, Group, Text } from '@mantine/core';
import {UserProfile} from './LocalStorage';

export default function ProfileSummary() {
  const [login] = useLocalStorage<UserProfile>({ key: 'login'});

  return (
    <Group spacing="sm">
      <Avatar size={40} src={login.avatar} radius={40} />
      <div>
        <Text size="sm" weight={500}>
          {login.firstName} {login.lastName}
        </Text>
        <Text size="xs" color="dimmed">
          {login.email}
        </Text>
      </div>
    </Group>
  );
};