import { useStyles } from "./ResumeCardStyle";
import { Card, Space } from "@mantine/core";
import { useMediaQuery } from "react-responsive";

const ResumeCard1 = () => {
  const { classes } = useStyles();
  const isBiggerThanSmallMobile = useMediaQuery({ minWidth: 401 });
  const isSmallMobile = useMediaQuery({ maxWidth: 400 });

  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      {/* <Text weight={900}>Norway Fjord Adventures</Text> */}
      {/* <img src="./image/resume/supperresume1.png" /> */}
      <Space h={"xl"} />
      <img
        className={classes.cardIcon}
        src="./image/resume/superresume1.png"
        alt=""
      />
      <Space h={35} />

      <div className={classes.cardTitle}>슈퍼 이력서</div>
      <Space h={35} />
      {isBiggerThanSmallMobile && (
        <>
          <div className={classes.cardBody}>
            강의를 수강하고 프로젝트를 완료하면 <br />
            회사에서 요구하는 실무 역량이 자동으로
            <br />
            이력서에 반영되는 경험을 하게됩니다.
          </div>
        </>
      )}
      {isSmallMobile && (
        <>
          <div className={classes.cardBody}>
            강의를 수강하고 프로젝트를 <br />
            완료 하면 회사에서 요구하는 실무 <br />
            역량이 자동으로 이력서에 <br />
            반영되는 경험을 하게됩니다.
            <br />
            <br />
          </div>
        </>
      )}

      <Space h={12} />
    </Card>
  );
};

export default ResumeCard1;
