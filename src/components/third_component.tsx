import { createStyles, SimpleGrid, Card, Text, Container } from '@mantine/core';

import bg_image from "../img/update_01.jpg"

const mockdata = [
  {
    title: '10,000+ 문제',
    image:
      bg_image,
    content: '최신 경향의 유형별/파트별 부족한 \n문제를 집중적으로 풉니다.',
  },
  {
    title: '465개의 강의',
    image:
      bg_image,
    content: '기초부터 고득점 꿀팁까지 \n핵심 Skill을 학습합니다.',
  },
  {
    title: '2,000개의 필수 어휘',
    image:
      bg_image,
    content: '유사한 어휘끼리 묶어, 마치 게임을 하듯이 \n어휘를 익힐 수 있습니다.',
  },
];

const useStyles = createStyles((theme) => ({
  con: {
    backgroundColor: theme.colors.gray[0],
  },

  card: {
    boxShadow: theme.shadows.md,
    width: '350px',
    height: '450px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: theme.fontSizes.xl * 1.5,
  },

  suptitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: theme.fontSizes.xl * 2,
  },
  sidetitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.colors.blue[6],
    position: 'absolute',
    bottom: 0,
    right: '30px',
  },
}));

export function ArticlesCardsGrid2() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p={0} radius="md" className={classes.card} withBorder={true} style={{backgroundImage: `url(${article.image})`}}>
      <Text className={classes.title} mx="lg" mt="lg" mb={5}>
        {article.title}
      </Text>
      <Text className="css-fix" color="dimmed" size="sm" transform="uppercase" mx = "lg" mt={0}>
        {article.content}
      </Text>
    </Card>
  ));

  return (
    <div className={classes.con}>
    <Container py="xl" size="lg" mt={20} style = {{height: '700px'}}>
      <Text mt="xl" color="dimmed">최신 경향을 반영, 취약점은 더 깊게.</Text>
      <div style={{display: 'flex', position: 'relative', marginBottom: '40px'}}>
      <Text className={classes.suptitle}>목표 점수대별 선택, 집중 학습</Text>
      <Text className={classes.sidetitle}>체험하러가기</Text>
      </div>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
    </div>
  );
}