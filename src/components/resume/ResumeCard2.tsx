import { useStyles } from "./ResumeCardStyle";
import { Grid, SimpleGrid, Card, Text, Space } from "@mantine/core";

const ResumeCard1 = () => {
  const { classes, cx } = useStyles();
  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      {/* <Text weight={900}>Norway Fjord Adventures</Text> */}
      {/* <img src="./image/resume/supperresume1.png" /> */}
      <Space h={"xl"} />
      <img className={classes.cardIcon} src="./image/resume/superresume2.png" />
      <Space h={"xl"} />

      <div className={classes.cardTitle}>
        개발자 슈퍼멘토,
        <br /> 취업코치의 이력서 첨삭
      </div>
      <div className={classes.cardBody}>
        채용 전문가들의 꼼꼼한 첨삭을 통해
        <br />
        합격률을 높이세요.
      </div>
    </Card>
  );
};

export default ResumeCard1;
