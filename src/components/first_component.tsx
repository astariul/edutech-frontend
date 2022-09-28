import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

import thumb_image from "../img/pd_thumb_hover.jpg"

const mockdata = [
  {
    title: '30일 베이직 패키지',
    image:
      thumb_image,
    price: '가격',
  },
  {
    title: '60일 베이직 패키지',
    image:
      thumb_image,
    price: '가격',
  },
  {
    title: '90일 베이직 패키지',
    image:
      thumb_image,
    price: '가격',
  },
  {
    title: '120일 베이직 패키지',
    image:
      thumb_image,
    price: '가격',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    width: '270px',
    height: '380px',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    fontsize: theme.fontSizes.lg,
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
    <Card key={article.title} p={0} radius="md" component="a" href="#" className={classes.card} withBorder={true}>
      <AspectRatio ratio={1 / 1}>
        <Image src={article.image} radius="md" m={0} p={0} />
      </AspectRatio>
      <Text className={classes.title} m="lg">
        {article.title}
      </Text>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} m="lg">
        {article.price}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl" size="lg" mt={20} style = {{height: '700px'}}>
      <Transition mounted={scroll.y > 10} transition={left} timingFunction="ease" duration={5000}>
       {(styles) => <Text my="xl" className={classes.suptitle}>슈퍼 코딩 프리미엄 요금제</Text>}
      </Transition>
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}