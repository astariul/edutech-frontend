import { Title } from "@mantine/core";
import useSuperCommunityStyles from "./superCommunityStyle";


const SuperCommunity = () => {
  const {classes} = useSuperCommunityStyles();

  const contentInWordBalloon = [
    ["현지 개발자,", "동료들과 얘기하기", require("../../static/image/logo/SlackC.png")],
    ["CTO, 인사담당자와", "이야기하기", require("../../static/image/logo/SlackC.png")],
    ["로드맵, 수업", "문의하기", require("../../static/image/logo/NaverCafe.png")],
    ["1:1", "문의하기", require("../../static/image/logo/KakaoTalk.png")],
  ]
  const WordBalloon = (titleTop: string, titleBottom: string, iconPath: string) => (
    <div key={titleTop+titleBottom} className={classes.wordBalloon}>
      <Title className={classes.wordBallonTitle}>
        {titleTop}
        <br/>
        {titleBottom}
      </Title>
      <img className={classes.icon} src={iconPath} alt={iconPath} />
    </div>
  );

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
        <div className={classes.contentRight}>
          <div className={classes.wordBalloons}>
            {
              contentInWordBalloon.map(
                (each) => {
                  const [titleTop, titleBottom, iconPath] = each;
                  return WordBalloon(titleTop, titleBottom, iconPath);
                }
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperCommunity;
