import { ReactNode } from "react";
import { useStyles, useCardStyle } from "./bodyMiddle";
import { Button } from "@mantine/core";
import PaginationSlide from "../paginationSlide/PaginationSlide";
import { useMediaQuery } from "@mantine/hooks";

interface FreeCourseRegistrationCardProps {
  title: string | ReactNode;
  tag: string;
  duration: string;
  recommendation: string[];
  originPrice: string;
  discountedPrice: string;
}

const FreeCourseRegistrationCard = ({
  title,
  tag,
  duration,
  recommendation,
  originPrice,
  discountedPrice,
}: FreeCourseRegistrationCardProps) => {
  const { classes, cx } = useCardStyle();

  return (
    <div className={cx(classes.main, classes.columnFlex)}>
      <div className={cx(classes.columnFlex, classes.cardBody)}>
        <div className={cx(classes.columnFlex, "titleArea")}>
          <div className="bodyTitle">{title}</div>
          <div className="bodyTag">{tag}</div>
        </div>
        <hr />
        <div className={cx(classes.columnFlex, "recommendation")}>
          <div>이런분들에게 추천합니다.</div>
          {recommendation.map((each) => (
            <li>{each}</li>
          ))}
        </div>
        <div className={cx(classes.columnFlex, "priceArea")}>
          <div className={cx(classes.rowFlex, "price")}>
            <div>지금! 가격해택</div>
            <div className="origin">{originPrice}원</div>
            <div className="discounted">{discountedPrice}원</div>
          </div>
          <Button disabled radius={4}>
            준비중입니다.
          </Button>
        </div>
      </div>
    </div>
  );
};

const BodyMiddle = () => {
  const { classes, cx } = useStyles();
  const mobileView = useMediaQuery("(max-width: 376px)");

  const cards = [
    {
      title: {
        desktop: (
          <>
            4인 4색 개발자 <br />
            직군 탐색 가이드
          </>
        ),
        mobile: (
          <>
            4인 4색 개발자 <br />
            직군 탐색 가이드
          </>
        ),
      },
      cardTitle: {
        desktop: (
          <>
            어떤 종류의 개발자가 되어야 할까?
            <br />
            다양한 직군의 개발자들에게 무엇인든
            <br />
            물어보세요
          </>
        ),
        mobile: (
          <>
            어떤 종류의 개발자가 되어야 할까?
            <br />
            다양한 직군의 개발자들에게 무엇인든
            <br />
            물어보세요
          </>
        ),
      },
      tag: "#개발자 #직군탐색 #AMA",
      duration: "45",
      recommendation: [
        "코딩을 처음해보는 누구나",
        "개발자로의 취직을 진지하게 고민하시는 분",
        "다양한 개발 직군에 대해서 이해하고 싶은신 분",
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
    {
      title: {
        desktop: (
          <>
            배테랑 채용 담당자들의
            <br />
            서류전형 엿보기
          </>
        ),
        mobile: (
          <>
            배테랑 채용 담당자들의
            <br />
            서류전형 엿보기
          </>
        ),
      },
      cardTitle: {
        desktop: (
          <>
            20명의 이력서 사례로 살펴보는 합격하
            <br />는 이력서 작성 및 커리어 가이드
          </>
        ),
        mobile: (
          <>
            20명의 이력서 사례로 살펴보는 합격하
            <br />는 이력서 작성 및 커리어 가이드
          </>
        ),
      },
      tag: "#합격자이력서 #채용담당자의속마음",
      duration: "45",
      recommendation: [
        "어떻게 커리어를 만들어야할지 막막하신 분",
        "이력서를 더 매력적으로 만들고 싶으신 분",
        "채용담당자의 의도를 파악하고 싶으신 분",
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
    {
      title: {
        desktop: (
          <>
            면접 700회이상의 베테랑 CTO에게
            <br />
            배우는 기술면접의 모든 것
          </>
        ),
        mobile: (
          <>
            면접 700회이상의 베테랑 CTO에게
            <br />
            배우는 기술면접의 모든 것
          </>
        ),
      },
      cardTitle: {
        desktop: (
          <>
            현직 CTO와 함께하는 기술면접 완벽
            <br />
            분석, 직군별 기술면접 준비 전략
          </>
        ),
        mobile: (
          <>
            현직 CTO와 함께하는 기술면접 완벽
            <br />
            분석, 직군별 기술면접 준비 전략
          </>
        ),
      },
      tag: "#기술면접 #면접합격 #면접비법",
      duration: "45",
      recommendation: [
        "면접을 앞두신 분",
        "기술면접이 막연하게 느껴지시는 분",
        "실제 채용 담당자의 입장에서 배워보고 싶으신 분",
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
    {
      title: {
        desktop: (
          <>
            찐 회사 경험을 바탕으로한
            <br />
            회사 선택 가이드
          </>
        ),
        mobile: (
          <>
            찐 회사 경험을 바탕으로한
            <br />
            회사 선택 가이드
          </>
        ),
      },
      cardTitle: {
        desktop: (
          <>
            성장하는 개발자가 되기위해 어떤
            <br />
            회사를 선택해야 하는지 정해드립니다.
          </>
        ),
        mobile: (
          <>
            성장하는 개발자가 되기위해 어떤
            <br />
            회사를 선택해야 하는지 정해드립니다.
          </>
        ),
      },
      tag: "#이회사가세요 #저회사가지마세요 #대기업 #스타트업",
      duration: "45",
      recommendation: [
        "어떤 회사를 목표로 취업준비해야할지 막연하신 분",
        "다양한 유형의 회사 경험이 궁금하신 분",
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
    {
      title: {
        desktop: (
          <>
            코딩테스트
            <br />
            완벽가이드
          </>
        ),
        mobile: (
          <>
            코딩테스트
            <br />
            기출만 알면 된다
          </>
        ),
      },
      cardTitle: {
        desktop: (
          <>
            실제 테스트에 나올 문항을 집중적으로
            <br />
            준비하세요.
          </>
        ),
        mobile: (
          <>
            실제 테스트에 나올 문항을 집중적으로
            <br />
            준비하세요.
          </>
        ),
      },
      tag: "#코딩테스트 #코딩기출 #코테합격팁",
      duration: "45",
      recommendation: [
        "코딩 테스트를 준비하시는 분",
        "취업준비가 막연하신 분",
        "코딩테스트와 취업관련 정보를 알고 싶으신 분",
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
  ];

  const cardItems = cards.map((each, index) => (
    <div key={index} className={cx(classes.card, classes.columnFlex)}>
      <div className={classes.super}>SUPER</div>
      <div className={cx(classes.title, classes.desktop)}>
        {each.title.desktop}
      </div>
      <div className={cx(classes.title, classes.mobile)}>
        {each.title.mobile}
      </div>
      <FreeCourseRegistrationCard
        title={mobileView ? each.cardTitle.mobile : each.cardTitle.desktop}
        tag={each.tag}
        duration={each.duration}
        recommendation={each.recommendation}
        originPrice={each.originPrice}
        discountedPrice={each.discountedPrice}
      />
    </div>
  ));

  return (
    <section className={classes.main}>
      <div className={cx(classes.contents, classes.columnFlex)}>
        <div className={cx(classes.messageLarge, classes.desktop)}>
          <span>단 10분 만으로</span>도
          <br />
          개발자로의 <span>취업가능성</span>에 대해 확신을 가져다 줍니다.
          <br />
          399,000원의 가치의 강의를 <span>0원에 수강</span>하실 수 있습니다.
        </div>
        <div className={cx(classes.messageLarge, classes.mobile)}>
          <span>단 10분 만으로</span>도 개발자로의
          <br />
          <span>취업가능성</span>에 대해 확신을 줍니다.
          <br />
          399,000원의 가치의 강의를
          <br />
          <span>0원에 수강</span>하실 수 있습니다.
        </div>
        <div className={cx(classes.cards, classes.rowFlex, classes.desktop)}>
          {cardItems}
        </div>
        <div className={cx(classes.cards, classes.rowFlex, classes.mobile)}>
          <PaginationSlide perView={1} columnGap={9} items={cardItems} />
        </div>
      </div>
    </section>
  );
};

export default BodyMiddle;
