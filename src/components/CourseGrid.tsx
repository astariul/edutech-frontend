import React from 'react';
import { createStyles, SimpleGrid, UnstyledButton } from '@mantine/core';
import ArticleCard from './CourseCard';
import { Link, useLocation } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

const class_data = [
  {
    "id": "1",
    "image": "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    "category": "frontend",
    "description": "",
    "price": 100000,
    "title": "Get started with React",
    "footer": "733 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "author": {
      "name": "",
      "description": "CTO at TechStartUp",
      "image": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    "id": "2",
    "image": "https://images.unsplash.com/photo-1654327911816-da98acbb1564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "category": "frontend",
    "description": "",
    "price": 110000,
    "title": "Style your React component with CSS",
    "footer": "430 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "author": {
      "name": "Elsa Gardenowl",
      "description": "Front-end engineer at Glassdoor",
      "image": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    "id": "3",
    "image": "https://images.unsplash.com/photo-1654289586293-d1a10366b916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "category": "frontend",
    "description": "",
    "price": 120000,
    "title": "Python & FastAPI : write efficient REST APIs",
    "footer": "2467 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "author": {
      "name": "Patrick Shyu",
      "description": "Tech lead at Google",
      "image": "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    "id": "4",
    "image": "https://images.unsplash.com/photo-1648287235569-b3e498e01dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "category": "frontend",
    "description": "",
    "price": 130000,
    "title": "Scaling your ML models to millions of users",
    "footer": "125 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "author": {
      "name": "Rina Artstain",
      "description": "Tech lead at Google",
      "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
    }
  },
];

export default function CourseGrid() {
    const { classes } = useStyles();
    const location = useLocation();

    let path: string;
    if (location.pathname === '/career/courses' ) {
      path = '/course';
    } else {
      path = '/mypage/course';
    }
    const items = class_data.map((item) => (
      <Link
        key={item.title}
        to={path + '/' + item.id}
        state={ item }
      >
        <UnstyledButton key={item.title} className={classes.item}>
          <ArticleCard {...item} />
        </UnstyledButton>
      </Link>
      // <UnstyledButton key={item.title} className={classes.item}>
      //   <ArticleCard {...item} />
      // </UnstyledButton>
    ));
  
    return (
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    );
  }