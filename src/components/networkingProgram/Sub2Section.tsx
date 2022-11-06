import { FC } from "react";
import styles from "./style.module.css";

const CARD_DATAS = [
  {
    title: "1. 학습진도 관리",
    contents: [
      "매주 월요일 주간리포트 – 수강상황, 진도 체크",
      "월 1회 그룹 안내",
    ],
    // button: {
    //   text: "주간리포트 샘플보기",
    //   link: "/",
    // },
  },
  {
    title: "2. 질의 응답",
    contents: ["함께 묻고 답변하며 실력 다지기"],
  },
  {
    title: "3. 페어 프로그래밍 과제",
    contents: ["협업능력 향상", "기술면접 대비"],
  },
  {
    title: "4. 해커톤",
    contents: ["멘토링을 통한 실력 향상", "심사위원들의 평가 및 수상작 발표회"],
  },
  {
    title: "5. 핵심자료 제공",
    contents: ["코딩테스트, 면접, 구현 자료 제공"],
  },
  {
    title: "6. 코딩테스트 모의고사",
    contents: ["기출 변형 모의고사", "합격/불합격 여부 안내"],
  },
  {
    title: "7. 모의 면접",
    contents: ["녹화/라이브 방식의 모의 면접을 통한 실전 대비"],
  },
  {
    title: "8. 회사 추천 및 취업 지원",
    contents: [
      "수강생에게 적합한 회사를 추천 & 컨설팅",
      "타겟 회사 맞춤형 지원 가이드",
    ],
  },
];

const Sub2Section: FC = () => {
  return (
    <div className={styles.sub2SectionContainer}>
      <div className={styles.widthContainer}>
        <div className={styles.sub2SectionDescriptionContainer}>
          <div>SUPER</div>
          <div>밀착관리</div>
          <div>
            슈퍼 멘토/코치와의 쳇팅, 화상 미팅을 통해 밀착관리가 이루어집니다.
          </div>
        </div>

        <div className={styles.sub2SectionCardContainer}>
          {CARD_DATAS.map((data, index) => (
            <div key={index} className={styles.sub2SectionCard}>
              <div>{data.title}</div>
              <ul>
                {data.contents.map((content, index) => (
                  <li key={index}>
                    {content.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </li>
                ))}
              </ul>
              {/* {data.button && <a href={data.button.link}>{data.button.text}</a>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sub2Section;
