import React from 'react';
import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';

const item = {
  "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  "name": "Henry Silkeater",
  "email": "user@gmail.com",
};

export default function ProfileSummary() {
    return (
      <Group spacing="sm">
        <Avatar size={40} src={item.avatar} radius={40} />
        <div>
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
          <Text size="xs" color="dimmed">
            {item.email}
          </Text>
        </div>
      </Group>
    );
  }