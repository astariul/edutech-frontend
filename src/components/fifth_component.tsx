import { createStyles, SimpleGrid, Card, Text, Container } from '@mantine/core';

import bg_image from "../img/help_ic_talk.png"

const mockdata = [
  {
    title: '산타 프렌즈에게 \n문의하기',
    image:
      bg_image,
    content: '최신 경향의 유형별/파트별 부족한 \n문제를 집중적으로 풉니다.',
  },
  {
    title: '산타 FAQ',
    image:
      bg_image,
    content: '기초부터 고득점 꿀팁까지 \n핵심 Skill을 학습합니다.',
  },
  {
    title: '학습법 \n가이드 받기',
    image:
      bg_image,
    content: '유사한 어휘끼리 묶어, 마치 게임을 하듯이 \n어휘를 익힐 수 있습니다.',
  },
  {
    title: '산타에게 \n제안하기',
    image:
      bg_image,
    content: '유사한 어휘끼리 묶어, 마치 게임을 하듯이 \n어휘를 익힐 수 있습니다.',
  },
];

const useStyles = createStyles((theme) => ({
  con: {
    backgroundColor: '#f1f1f1', // 색이 너무 옅음
  },

  card: {
    transition: 'all 150ms ease',
    width: '275px',
    height: '275px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',

    '&:hover': {
      backgroundColor: theme.colors.blue[7],
      color: 'white'
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: theme.fontSizes.xl * 1.5,
    lineHeight: 1,
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

export function ArticlesCardsGrid3() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} radius="md" className={classes.card} style={{backgroundImage: `url(${article.image})`}}>
      <Text className={`${classes.title} css-fix`} mx="lg" mt="lg" mb={5}>
        {article.title}
      </Text>
      {/* <Text className="css-fix" color="dimmed" size="sm" transform="uppercase" mx = "lg" mt={0}>
        {article.content}
      </Text> */}
    </Card>
  ));

  return (
    <div className={classes.con}>
    <Container py="xl" size="lg" mt={20} style = {{height: '500px'}}>
      <Text className={classes.suptitle}>산타 프렌즈에게 물어보세요.</Text>
      <Text mt={0} mb="xl" color="dimmed">앱 이용방법, 공부법, 개선사항에 대해 언제든지 이야기해주세요.</Text>
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
    </div>
  );
}