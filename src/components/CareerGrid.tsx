import React from 'react';
import { createStyles, Center, Grid, UnstyledButton } from '@mantine/core';
import CareerCard from './CareerCard';
import { Link } from "react-router-dom";

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

const careers = [
  {
    "id": "1",
    "image": "https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-2357.jpg?w=1380&t=st=1660915466~exp=1660916066~hmac=91914e8904ec55d20802b2ac330fd8fc3eb15b9bd9bd513551d7669b0379d3ac",
    "title": "frontend",
  },
  {
    "id": "2",
    "image": "https://img.freepik.com/premium-vector/back-end-development-concept-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-1065.jpg?w=1380",
    "title": "backend",
  },
];

const CareerGrid = () => {
    const { classes } = useStyles();

    const items = careers.map((item) => (
      <Grid.Col span={6}>
        <Center>
          <Link key={item.id} to={'/career/courses'} state={item} >
            <UnstyledButton key={item.title} className={classes.item}>
              <CareerCard {...item}/>
            </UnstyledButton>
          </Link>
        </Center>
      </Grid.Col>
    ));
  
    return (
      <Grid>
        {items}
      </Grid>
    );
  }

export default CareerGrid;
