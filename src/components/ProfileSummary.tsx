import React from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { Avatar, Group, Text } from '@mantine/core';
import { IUserProfile } from '../typings/db';

export default function ProfileSummary() {
  const [login] = useLocalStorage<IUserProfile>({ key: 'login'});

  return (
    <Group spacing="sm">
      <Avatar size={40} src={login.avatar} radius={40} />
      <div>
        <Text size="sm" weight={500}>
          {login.name}
        </Text>
        <Text size="xs" color="dimmed">
          {login.email}
        </Text>
      </div>
    </Group>
  );
};