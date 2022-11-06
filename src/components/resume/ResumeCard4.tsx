import { useStyles } from "./ResumeCardStyle";
import { Grid, SimpleGrid, Card, Text, Space } from "@mantine/core";

const ResumeCard4 = () => {
  const { classes, cx } = useStyles();
  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      {/* <Text weight={900}>Norway Fjord Adventures</Text> */}
      {/* <img src="./image/resume/supperresume1.png" /> */}
      <Space h={"xl"} />
      <img className={classes.cardIcon} src="./image/resume/superresume4.png" />
      <Space h={35} />

      <div className={classes.cardTitle}>슈퍼패스</div>
      <Space h={35} />
      <div className={classes.cardBody}>
        슈퍼코딩의 수준에 대한 기업들의 신뢰를 <br /> 바탕으로 서류전형,
        코딩테스트, 기술면접을 <br />
        면제 받고 빠르게 취업하세요.
      </div>
      <Space h={12} />
    </Card>
  );
};

export default ResumeCard4;
