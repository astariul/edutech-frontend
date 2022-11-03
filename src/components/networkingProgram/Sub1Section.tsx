import { FC } from "react";
import styles from "./style.module.css";

const PROFILE_DATAS = [
  "Andy",
  "ChrisF",
  "Josliber",
  "Jon Clements",
  "Samuel Liew",
  "Ryan M",
];

const Sub1Section: FC = () => {
  return (
    <div className={`${styles.sub1SectionContainer} ${styles.widthContainer}`}>
      <div className={styles.sub1SectionTitle}>기수별 관리시스템</div>
      <div className={styles.sub1SectionSubTitle}>
        기수별 자동으로 온라인 스터디 그룹이 형성됩니다.
        <br />
        온라인 스터디 그룹별 담임코치가 지정되며, 담임코치과 온라인으로 만나게
        됩니다.
      </div>
      <div className={styles.sub1SectionDescriptionContainer}>
        <div>SUPER</div>
        <div>담임제도</div>
        <div>수강생 10명이 스터디 그룹으로 묶여지고 담임코치가 지정됩니다.</div>
      </div>

      <div className={styles.sub1SectionCardContainer}>
        {PROFILE_DATAS.map((data, index) => (
          <div key={index} className={styles.sub1SectionCard}>
            <div className={styles.profile}>
              <div>
                <img
                  src={require(`../../static/image/networkingProgram/sub1-profile${
                    index + 1
                  }.png`)}
                  alt=""
                />
                <BadgeIcon />
              </div>
              <div>{data}</div>
              <div />
              <div>
                <img
                  src={require(`../../static/image/networkingProgram/sub1-profile${
                    index + 1
                  }-logo.png`)}
                  alt=""
                />
                개발자
              </div>
            </div>
            <div className={styles.role}>담임코치</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sub1Section;

export const BadgeIcon: FC = () => {
  return (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.8125 27.125L7.4375 23.0625L2.71875 22.0938L3.25 17.5L0.25 14L3.25 10.5312L2.71875 5.9375L7.4375 4.96875L9.8125 0.875L14 2.8125L18.1875 0.875L20.5938 4.96875L25.2812 5.9375L24.75 10.5312L27.75 14L24.75 17.5L25.2812 22.0938L20.5938 23.0625L18.1875 27.125L14 25.1875L9.8125 27.125ZM12.6562 18.1562L19.75 11.125L18.3438 9.84375L12.6562 15.4688L9.6875 12.375L8.25 13.7812L12.6562 18.1562Z"
        fill="#0385E3"
      />
    </svg>
  );
};
