import { Title, Center, Container, createStyles } from '@mantine/core';
import FeedCard from '../components/FeedCard';
import FeedRepository from '../repositories/Feed';
import { useEffect, useState } from 'react';
import { IFeed } from '../dto/Feed';

const useStyles = createStyles((theme) => ({
  page_title: {
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  },
}));

const sampleDatas = [
  {
    "id": "1",
    "createdAt": "10 minutes ago",
    "text": "<p>I use <a href=\"https://heroku.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href=\"https://www.digitalocean.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Digital Ocean</a> VPS to save some cash.</p>",
    "user": {
      "name": "Jacob Warnhalter",
      "image": "https://images.unsplash.com/photo-1656313826909-1f89d1702a81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    "like": 2,
  },
  {
    "id": "2",
    "createdAt": "12 minutes ago",
    "text": "Succeed in reaching 90% on the frontend class !",
    "user": {
      "name": "Henry Silkeater",
      "image": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
    },
    "like": 9,
  },
  {
    "id": "3",
    "createdAt": "47 minutes ago",
    "text": "Scored in the top-3 for the Quizz on advanced back-end",
    "user": {
      "name": "Anna Delcroix",
      "image": "https://images.unsplash.com/photo-1656322826192-3ee6e76c8f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    "like": 3,
  },
  {
    "id": "4",
    "createdAt": "1 hour ago",
    "text": "Says : \"Quadratic programming (QP) is the process of solving certain mathematical optimization problems involving quadratic functions. Specifically, one seeks to optimize (minimize or maximize) a multivariate quadratic function subject to linear constraints on the variables. Quadratic programming is a type of nonlinear programming.<br>'Programming' in this context refers to a formal procedure for solving mathematical problems. This usage dates to the 1940s and is not specifically tied to the more recent notion of 'computer programming.' To avoid confusion, some practitioners prefer the term 'optimization' — e.g., 'quadratic optimization.'\"",
    "user": {
      "name": "Jacob Warnhalter",
      "image": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
    },
    "like": 232,
  },
  {
    "id": "5",
    "createdAt": "5 hours ago",
    "text": "Says : \"This quizz (machine learning) is way too hard... Anyone got the solution ?\"",
    "user": {
      "name": "Katarina Rostova",
      "image": "https://images.unsplash.com/photo-1655817014438-5115cc4aa87e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    "like": 0,
  },
  {
    "id": "6",
    "createdAt": "2 days ago",
    "text": "Just unlocked the achievement 'hard-worker' !",
    "user": {
      "name": "Helene Dupont",
      "image": "https://images.unsplash.com/photo-1656019674844-3040aba0350b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
    },
    "like": 9942,
  }
]

const Feed = () => {
  const { classes } = useStyles();
  const [feeds, setFeeds] = useState<IFeed[]>([]);
  // const [totalPage, setTotalPages] = useState<number>(1);

  useEffect(
    () => {
      new FeedRepository()
      .getFeeds(1)
      .then(
          (res) => {
            setFeeds(res?.feeds);
            // setTotalPages(res?.totalPages);
          }
      )
    }, [setFeeds]
  )

  const feedData = (feeds) || (sampleDatas)
  const feed = feedData.map((f) => (
    <Container pt="md">
      <FeedCard key={f.id} postedAt={f.createdAt} body={f.text} author={{name:f.user.name, image:''}} likes={f.like}/>
    </Container>
  ));

  return (
    <>
      <Container pt="xl" size="sm">
        <Center pt="xl" pb="xl">
          <Title order={1} className={classes.page_title}>What's new ?</Title>
        </Center>
      </Container>
      <Container pt="md" pb="md">
        {feed}
      </Container>
    </>
  );
}

export default Feed;
