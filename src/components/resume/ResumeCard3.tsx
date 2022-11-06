import { useStyles } from "./ResumeCardStyle";
import { Grid, SimpleGrid, Card, Text, Space } from "@mantine/core";

const ResumeCard3 = () => {
  const { classes, cx } = useStyles();
  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      {/* <Text weight={900}>Norway Fjord Adventures</Text> */}
      {/* <img src="./image/resume/supperresume1.png" /> */}
      <Space h={"xl"} />
      <img className={classes.cardIcon} src="./image/resume/superresume3.png" />
      <Space h={15} />
      <div className={classes.cardTitle}>
        업계최고 개발자 <br />
        슈퍼멘토의 추천서
      </div>
      <Space h={15} />
      <div className={classes.cardBody}>
        이력서만으로 표현하기 힘든 강점을
        <br />
        추천서를 통해 보완하세요.
      </div>
      <Space h={100} />
      <img src="./image/resume/resumereview.png" />
      {/* <Space h={10} /> */}
    </Card>
  );
};

export default ResumeCard3;
