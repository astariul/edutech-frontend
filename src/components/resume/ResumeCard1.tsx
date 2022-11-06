import { useStyles } from "./ResumeCardStyle";
import { Grid, SimpleGrid, Card, Text, Space } from "@mantine/core";

const ResumeCard1 = () => {
  const { classes, cx } = useStyles();
  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      {/* <Text weight={900}>Norway Fjord Adventures</Text> */}
      {/* <img src="./image/resume/supperresume1.png" /> */}
      <Space h={"xl"} />
      <img className={classes.cardIcon} src="./image/resume/superresume1.png" />
      <Space h={"xl"} />

      <div className={classes.cardTitle}>슈퍼 이력서</div>
      <div className={classes.cardBody}>
        슈퍼코딩 강의를 수강하고 프로젝트를 <br />
        완료하면 회사에서 요구하는 실무 역량이 <br />
        이력서에 반영되는 경험을 하게됩니다.
      </div>
    </Card>
  );
};

export default ResumeCard1;
