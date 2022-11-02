import { FC } from "react";
import styles from "./style.module.css";

const Sub4Section: FC = () => {
  return (
    <div className={styles.sub4SectionContainer}>
      <div className={styles.sub4SectionRowContainer}>
        <div className={styles.sub4SectionDescriptionContainer}>
          <div>
            <u>SUPER LIVE</u>
          </div>
          <div>온라인 세미나(월1회, 30개 기업)</div>
          <ul>
            <li>기업별 취업 선배들의 취업 과정, 합격 노하우 공유</li>
          </ul>
        </div>
        <div className={styles.sub4SectionDescriptionContainer}>
          <div>
            <u>SUPER JOB CONCERT</u>
          </div>
          <div> 온오프라인 잡콘서트(격달)</div>
          <ul>
            <li>
              기업별 CTO, 인사담당자, 멘토들이 한 자리에 모여 취업 노하우 공유
            </li>
            <li>인생의 전환점이 되는 개발자 취업 컨설팅</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sub4Section;
