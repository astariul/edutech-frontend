import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

const mockdata = [
  {
    title: '30일 베이직 패키지',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: '가격',
  },
  {
    title: '60일 베이직 패키지',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: '가격',
  },
  {
    title: '90일 베이직 패키지',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: '가격',
  },
  {
    title: '120일 베이직 패키지',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    price: '가격',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },

  suptitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: theme.fontSizes.xl * 2,
  }
}));

const left = {
  in: {transform: 'translateX(0vx)' },
  out: {transform: 'translateX(100vx)' },
  transitionProperty: 'transform',
};

export function ArticlesCardsGrid() {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="sm" radius="md" component="a" href="#" className={classes.card} withBorder={true}>
      <AspectRatio ratio={1}>
        <Image src={article.image} radius="md" />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.price}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl" size="lg">
      <Transition mounted={scroll.y > 10} transition={left} timingFunction="ease" duration={5000}>
       {(styles) => <Text py="xl" className={classes.suptitle}>슈퍼 코딩 프리미엄 요금제</Text>}
      </Transition>
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}