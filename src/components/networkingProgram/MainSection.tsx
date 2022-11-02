import { FC } from "react";
import styles from "./style.module.css";

import SlackIcon from "../../static/image/networkingProgram/slackIcon.png";

const MainSection: FC = () => {
  return (
    <div className={styles.mainSectionContainer}>
      <div className={styles.mainDescriptionContainer}>
        <div className={styles.mainDescription}>
          <PencilIcon />
          <p>
            온라인에서 경험하는 슈퍼코딩 유료 유저만이 누릴 수 있는
            <br />
            <strong>프리미엄 네트워킹</strong> 서비스입니다.
          </p>
        </div>
        <div className={styles.mainDescription}>
          <PencilIcon />
          <p>
            <strong>취업을 목표</strong>로 하기에 해당 서비스는 매우 직관적이며,
            <br />
            솔직한 것이 킬링 포인트 입니다.
          </p>
        </div>
        <div className={styles.mainDescription}>
          <PencilIcon />
          <p>
            취업 후에도 연결되는 <strong>선후배, 동료와의 연결</strong>을 돕는
            <br />
            감동적인 서비스가 될 것을 자부 합니다.
          </p>
        </div>
      </div>
      <div className={styles.mainTitle}>
        슈퍼코딩 <strong>네트워크</strong> 프로그램
      </div>
      <div className={styles.mainSubTitle}>
        비대면으로 이루어지는 온라인의 밀착관리, 업계최고와의 만남, 기업별
        세미나, 다양한 Live가 운영될 예정입니다.
        <br />
        100인의 업계 현직선배들과 동료들이 당신의 취업을 적극적으로 지원합니다.
      </div>
      <div className={styles.mainButtonContainer}>
        <a>
          <img src={SlackIcon} alt="" />
          네트워크 프로그램 입장하기
        </a>
        <a>웹개발 종합반 구매하기</a>
      </div>
    </div>
  );
};

export default MainSection;

const PencilIcon: FC = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="13.5742"
        width="5.67326"
        height="19.197"
        transform="rotate(45 13.5742 0)"
        fill="#00F0FF"
      />
    </svg>
  );
};
