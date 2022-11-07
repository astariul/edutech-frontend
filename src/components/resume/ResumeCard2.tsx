import { useStyles } from "./ResumeCardStyle";
import { Card, Space } from "@mantine/core";
import { useMediaQuery } from "react-responsive";

const ResumeCard2 = () => {
  const { classes } = useStyles();
  const isBiggerThanSmallMobile = useMediaQuery({ minWidth: 401 });
  const isSmallMobile = useMediaQuery({ maxWidth: 400 });
  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      {/* <Text weight={900}>Norway Fjord Adventures</Text> */}
      {/* <img src="./image/resume/supperresume1.png" /> */}
      <Space h={"xl"} />
      <img className={classes.cardIcon} src="./image/resume/superresume2.png" alt=""/>

      {isBiggerThanSmallMobile && (
        <>
          <Space h={15} />
          <div className={classes.cardTitle}>
            개발자 슈퍼멘토,
            <br /> 취업코치의 이력서 첨삭
          </div>
          <Space h={15} />
          <div className={classes.cardBody}>
            채용 전문가들의 꼼꼼한 첨삭을 통해
            <br />
            합격률을 높이세요.
          </div>
          <Space h={40} />
        </>
      )}
      {isSmallMobile && (
        <>
          <Space h={25} />
          <div className={classes.cardTitle}>
            개발자 슈퍼멘토,
            <br /> 취업코치의 <br />
            이력서 첨삭
          </div>
          <Space h={25} />
          <div className={classes.cardBody}>
            채용 전문가들의 꼼꼼한 첨삭을
            <br /> 통해 합격률을 높이세요.
          </div>
          <Space h={15} />
        </>
      )}
    </Card>
  );
};

export default ResumeCard2;
