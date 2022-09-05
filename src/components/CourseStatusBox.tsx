import React from 'react';
import { createStyles, Container, Grid, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  statusBox: {
    margin: "100px 100px",
    borderRadius: "15px",
    backgroundColor: "#D3D3D3",
    maxWidth: "100%",
  },
  leftGrid: {
    flex: "1 1 30%",
  },
  middleGrid: {
    flex: "1 1 50%",
  },
  rightGrid: {
    flex: "1 1 20%",
  },
  action: {
    alignItems: "center",
    textAlign:"center",
    flexDirection: "column",
    justifyContent:"space-between",
    padding: "8px 12px"
  },
  actionItem: {
    width: "140px",
    marginTop: "4px",
    marginBottom: "4px"
  },
  chart: {
    padding: "8px 12px",
    boxSizing: "border-box",
  },
  statusComment: {
    fontSize: "17px",
    padding: "8px 12px",
    textAlign:"center",
    boxSizing: "border-box",
  },
  outcomeComment: {
    fontSize: "15px",
    padding: "8px 12px",
    color: "red",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "30px",
    textAlign:"center",
  },
}));


const CourseStatusBox = () => {
  const { classes } = useStyles();

  return (
      <Grid className={classes.statusBox}>
        <Grid.Col className={classes.leftGrid}>
          <Text className={classes.title}>FrontEnd-All-in-One</Text>
          <Text className={classes.statusComment}>진척률통계</Text>
        </Grid.Col>
        <Grid.Col className={classes.middleGrid}>
          <Container className={classes.chart}>chart 영역</Container>
          <Text className={classes.outcomeComment}>슈퍼코더는 수료후 초봉5,000만원의 조건으로 3달 안에 입사를 성공하였습니다.</Text>
        </Grid.Col>
        <Grid.Col className={classes.rightGrid}>
          <Grid className={classes.action}>
            <Button
              className={classes.actionItem}
              component={Link}
              to="/classrounge/*"
            >
              라운지 입장
            </Button>
            <Button
              className={classes.actionItem}
              component={Link}
              to="/roadmap"
            >
              강좌 페이지
            </Button>
            <Button className={classes.actionItem}>이어서 수강하기</Button>
          </Grid>
        </Grid.Col>
      </Grid>
  );
}

export default CourseStatusBox;
