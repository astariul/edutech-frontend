import { useStyles } from "./ResumeCardStyle";
import { Grid, SimpleGrid, Card, Text, Space } from "@mantine/core";
import { useMediaQuery } from "react-responsive";

const ResumeCard5 = () => {
  const { classes, cx } = useStyles();
  const isBiggerThanSmallMobile = useMediaQuery({ minWidth: 401 });
  const isSmallMobile = useMediaQuery({ maxWidth: 400 });
  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      {/* <Text weight={900}>Norway Fjord Adventures</Text> */}
      {/* <img src="./image/resume/supperresume1.png" /> */}
      <Space h={"xl"} />
      <img className={classes.cardIcon} src="./image/resume/superresume5.png" />

      {isBiggerThanSmallMobile && (
        <>
          <Space h={15} />
          <div className={classes.cardTitle}>
            합격자, 현업 개발자 <br />
            이력서 벤치마킹
          </div>
          <Space h={15} />
          <div className={classes.cardBody}>
            이력서 best practice를 통해 자극받고
            <br />
            슈퍼코딩으로 커리어를 관리하세요.
          </div>
          <Space h={40} />
        </>
      )}
      {isSmallMobile && (
        <>
          <Space h={25} />
          <div className={classes.cardTitle}>
            합격자, 현업 <br /> 개발자 이력서 <br />
            벤치마킹
          </div>
          <Space h={15} />
          <div className={classes.cardBody}>
            이력서 best practice를 통해 <br /> 자극받고 슈퍼코딩으로 <br />
            커리어를 관리하세요.
          </div>
          <Space h={10} />
        </>
      )}
    </Card>
  );
};

export default ResumeCard5;
