import React from 'react';
import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, ActionIcon, Grid } from '@mantine/core';
import { Heart } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
  },

  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
}));

interface FeedCardProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
  likes: number;
}

export default function FeedCard({ postedAt, body, author, likes }: FeedCardProps) {
  const { classes, theme } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text size="sm">{author.name}</Text>
          <Text size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
      </TypographyStylesProvider>
      <Grid>
        <Grid.Col span={3} offset={9} pb={0}>
          <Group position="right">
            <Text size="xs" color="dimmed">
              {likes} person liked this
            </Text>
            <Group spacing={0}>
              <ActionIcon>
                <Heart size={18} color={theme.colors.red[6]} />
              </ActionIcon>
            </Group>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}