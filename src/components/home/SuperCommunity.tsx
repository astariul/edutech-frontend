import { Title } from "@mantine/core";
import useSuperCommunityStyles from "./superCommunityStyle";


const SuperCommunity = () => {
  const {classes, cx} = useSuperCommunityStyles();

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <Title className={classes.category}>SUPER COMMUNITY</Title>
          <Title className={classes.title}>
            24시간
            <br />
            슈코와 얘기하세요.
          </Title>
        </div>
        <div className={cx(classes.contentRight, classes.desktop)}>
          <h2>
            슈퍼코딩 유료 유저들에게는 기업의 취업 정보와, 실제 인사담당자의 설명회, Q&A 시간이 제공됩니다.
            <br />기업, 산업군별로 방이 개설되어 운영됩니다.
          </h2>
        </div>
        <div className={cx(classes.contentRight, classes.mobile)}>
          <h2>
            슈퍼코딩 유료 유저들에게는
            <br />기업의 취업 정보와,
            <br />실제 인사담당자의 설명회,
            <br />Q&A 시간이 제공됩니다.
            <br />기업, 산업군별로 방이 개설되어 운영됩니다.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SuperCommunity;
