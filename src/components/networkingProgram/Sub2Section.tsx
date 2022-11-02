import { FC } from "react";
import styles from "./style.module.css";

const CARD_DATAS = [
  {
    title: "1. 진도관리",
    contents: [
      "매주 월요일 주간리포트 – 수강상황, 진도 체크",
      "마지막 4주차 월요일 수강상황 안내",
    ],
    button: {
      text: "주간리포트 샘플보기",
      link: "/",
    },
  },
  {
    title: "2. 실시간 질의 응답",
    contents: [
      "전체 기수 채팅방에서 실시간 질의 응답",
      "멘토가 아닌 수강생도 함께 답변하며, 본인의 실력을 점검\n해볼 수 있는 시스템",
    ],
  },
  {
    title: "3. 코딩테스트 퀴즈 풀기",
    contents: [
      "전코딩테스트 기출 변형 퀴즈 업로드\n(매주 1회 유료수강생 전용)",
      "1일 1퀴즈로 운영",
      "퀴즈 답변을 올리고, 멘토 및 스터디원 피드백",
    ],
  },
  {
    title: "4. 중간 점검 - 하프모의고사(월간)",
    contents: [
      "코딩테스트 기출변형 모의고사",
      "사전 문항 제공 및 답변 제출, 합격/불합격 여부",
    ],
  },
  {
    title: "5. 과제 리뷰 라이브 : 기술면접 대응",
    contents: [
      "주1회 본인의 과제 중 1개를 선정하여 리뷰",
      "면접관(멘토, 인사담당자)의 점수 발표, 취업 가능한 회사\n및 예상 연봉 공유",
    ],
  },
  {
    title: "6. 모의 면접(4회)",
    contents: [
      "8주차부터 라이브 모의 면접 진행",
      "주1회 4주간 운영하며, 면접에 붙을 수 있는 팁 코칭",
    ],
  },
  {
    title: "7. 비밀자료",
    contents: [
      "4주차 진도를 마친 수강생 대상 코딩테스트, 면접 비밀\n자료, 입사 후 유용하게 쓰는 코드 자료집 제공",
      "예상 면접 질문 및 코딩테스트 기출 문제집으로 구성",
    ],
  },
];

const Sub2Section: FC = () => {
  return (
    <div className={styles.sub2SectionContainer}>
      <div className={styles.widthContainer}>
        <div className={styles.sub2SectionDescriptionContainer}>
          <div>
            <u>SUPER</u>
          </div>
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
              {data.button && <a href={data.button.link}>{data.button.text}</a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sub2Section;
