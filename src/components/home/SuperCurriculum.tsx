import useSuperCurriculumStyles from "./superCurriculumStyle";
import BusinessCard from "../businessCard/BusinessCard";
import PaginationSlide from "../paginationSlide/PaginationSlide";

const SuperCurriculum = () => {
  const { classes, cx } = useSuperCurriculumStyles();
  const cardContents = [
    [require("../../static/image/home/superCurriculumImageCard1.png")],
    [require("../../static/image/home/superCurriculumImageCard2.png")],
    [require("../../static/image/home/superCurriculumImageCard3.png")],
  ];
  const Card = (
    imagePath: string,
    title: string,
    footerName: string,
    footerDescription: string
  ) => (
    <div key={title} className={classes.card}>
      <img src={imagePath} alt={imagePath} />
    </div>
  );
  const cardItems = cardContents.map((each) => {
    const [image, title, name, description] = each;
    return Card(image, title, name, description);
  });

  return (
    <section className={classes.main}>
      <div className={classes.messageArea}>
        <div className={classes.category}>SUPER CURRICULUM</div>
        <div className={classes.title}>
          "우리는 이런 개발자를 원합니다"
          <br />
          기업이 원하는 인재를 만들기 위한{" "}
          <span style={{ color: "#0094FF" }}>업계 최고 개발자 슈퍼멘토</span>
          들의
          <br />
          적극적인 참여로{" "}
          <span style={{ color: "#0094FF" }}>커리큘럼을 완성</span>시켰습니다.
        </div>
        <div className={classes.titleMobile}>
          "우리는 이런 개발자를 원합니다"
          <br />
          기업이 원하는 인재를 만들기 위한
          <br />
          <span style={{ color: "#0094FF" }}>업계 최고 개발자 슈퍼멘토</span>
          들의 적극적인 참여로
          <br />
          <span style={{ color: "#0094FF" }}>커리큘럼을 완성</span>시켰습니다.
        </div>
      </div>
      <div className={classes.imageTopContainer}>
        <img
          className={classes.imageTop}
          src={require("../../static/image/home/superCurriculumImage1.png")}
          alt="companylogos"
        />
      </div>
      <div className={classes.imageBottom}>
        <div className={classes.imageBottomInner}>
          <div>
            <div className={classes.imageMessage}>
              <h2>
                더 이상
                <br />
                시간낭비하지 마시고
                <br />
                <span>취업중심형 커리큘럼</span>을 통해
                <br />
                <span>회사들이 실제로 요구하는</span>
                <br />
                기술을 습득하셔야 합니다.
              </h2>
              <div className={cx(classes.mentorComment, classes.mobile)}>
                <h1>“</h1>
                <h2>
                  <br />
                  코딩을 처음부터 제대로 배우는것이
                  <br />
                  커리어를 좌우합니다.
                  <br />
                  가장쉬운방식으로 배워
                  <br />
                  여러분들안에 있는
                  <br />
                  코딩잠재력을 깨워주세요.
                </h2>
              </div>
              <div className={classes.whois}>
                <BusinessCard
                  image={require("../../static/image/logo/Spacewalk.png")}
                  name="Daniel"
                  position="AI Startup Spacewalk CTO"
                />
              </div>
            </div>
            <div className={cx(classes.mentorComment, classes.desktop)}>
              <h1>“</h1>
              <h2>
                <br />
                코딩을 처음부터 제대로 배우는것이
                <br />
                커리어를 좌우합니다.
                <br />
                가장쉬운방식으로 배워
                <br />
                여러분들안에 있는 코딩잠재력을 깨워주세요.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.cardArea}>
        <div className={cx(classes.cards, classes.mobile)}>
          {<PaginationSlide perView={1} columnGap={12} items={cardItems} />}
        </div>
        <div className={cx(classes.cards, classes.desktop)}>{cardItems}</div>
      </div>
    </section>
  );
};

export default SuperCurriculum;
