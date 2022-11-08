import { FC } from "react";
import styles from "./style.module.css";

const PROFILE_DATAS = [
  {
    messgae: "네이버 3년차 시니어 개발자\n네이버 입사, 이것만 알고 가세요”",
    link: "",
  },
  {
    messgae:
      "쿠팡 1년차 신입 개발자\n“비전공자가 카카오 입사하는\n방법 알려드림”",
    link: "",
  },
  {
    messgae: "라인 인사담당자\n“인재상이 중요한 이유,\n면접 꿀팁”",
    link: "",
  },
  {
    messgae:
      "OOO기업 비전공자 개발자\n“경험과 실력을 쌓고 싶다면\n우리 회사로 오세요”",
    link: "",
  },
  {
    messgae:
      "OOO기업 비전공자 개발자\n“쟁쟁한 개발자가 여기 다 모여있어요. 네트워크 짱”",
    link: "",
  },
  {
    messgae: "배민 인사담당자\n“인재상이 중요한 이유,\n면접 꿀팁”",
    link: "",
  },
  {
    messgae: "토스 CTO\n“인재상이 중요한 이유,\n면접 꿀팁”",
    link: "",
  },
  {
    messgae:
      "오늘의집 비전공자 개발자\n“경험과 실력을 쌓고 싶다면\n우리 회사로 오세요”",
    link: "",
  },
];

const Sub3Section: FC = () => {
  return (
    <>
      <div className={styles.desktop}>
        <div className={`${styles.sub3SectionContainer}`}>
          <div className={styles.sub3SectionTitle}>
            업계 선배와 취업정보 Q&A
          </div>
          <div className={styles.sub3SectionSubTitle}>
            슈퍼코딩 유료 유저들에게 전달되는 기업의 취업 정보와, 실제
            인사담당자의 설명회, Q&A 시간이 제공됩니다.
            <br />
            기업별로 소통공간이 개설되어 운영됩니다.
          </div>

          {/* <div className={styles.sub3SectionCardContainer}>
        {PROFILE_DATAS.map((data, index) => (
          <div key={index} className={styles.sub3SectionCard}>
            <div className={styles.profile}>
              <div>
                <img
                  src={require(`../../static/image/networkingProgram/sub3-profile${
                    index + 1
                  }-logo.png`)}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require(`../../static/image/networkingProgram/sub3-profile${
                    index + 1
                  }.png`)}
                  alt=""
                />
                <BadgeIcon />
              </div>
              <div>
                {data.messgae.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div />
            </div>
            <a className={styles.button} href={data.link}>
              가입하기
            </a>
          </div>
        ))}
      </div> */}

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className={styles.sub3SectionTitle}>슈퍼코딩 LIVE</div>
          <div className={styles.sub3SectionSubTitle}>
            슈퍼코딩 수강생을 위한 다양한 라이브 방송을 준비하고 있습니다.
            <br />
            취업에 필수적인 정보로 찾아 뵐 예정입니다.
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={`${styles.sub3SectionContainerMobile}`}>
          <div className={styles.sub3SectionTitleMobile}>
            업계 선배와 <br />
            취업정보 Q&A
          </div>
          <div className={styles.sub3SectionSubTitle}>
            슈퍼코딩 유료 유저들에게
            <br /> 전달되는 기업의 취업 정보와,
            <br /> 실제 인사담당자의 설명회, <br />
            Q&A 시간이 제공됩니다.
            <br />
            기업별로 소통공간이 <br />
            개설되어 운영됩니다.
          </div>

          <br />
          <br />
          <br />

          <div className={styles.sub3SectionTitle}>슈퍼코딩 LIVE</div>
          <div className={styles.sub3SectionSubTitle}>
            슈퍼코딩 수강생을 위한 <br /> 다양한 라이브 방송을 <br />
            준비하고 있습니다.
            <br />
            취업에 필수적인 정보로
            <br /> 찾아 뵐 예정입니다.
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub3Section;
