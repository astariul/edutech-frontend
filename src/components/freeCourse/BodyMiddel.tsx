import { ReactNode } from 'react';
import { useStyles, useCardStyle } from './bodyMiddle';
import { Button } from '@mantine/core';
import PaginationSlide from '../paginationSlide/PaginationSlide';
import { useMediaQuery } from '@mantine/hooks';

interface FreeCourseRegistrationCardProps {
  image: string;
  title: string | ReactNode;
  tag: string;
  duration: string;
  recommendation: string[];
  originPrice: string;
  discountedPrice: string;
};

const FreeCourseRegistrationCard = ({
  image,
  title,
  tag,
  duration,
  recommendation,
  originPrice,
  discountedPrice,
}: FreeCourseRegistrationCardProps) => {
  const {classes, cx} = useCardStyle();

  return (
    <div className={cx(classes.main, classes.columnFlex)}>
      <div className={classes.cardImage}>
        <img src={image} alt="cardImage" />
      </div>
      <div className={cx(classes.columnFlex, classes.cardBody)}>
        <div className={cx("titleArea", classes.columnFlex)}>
          <div className="bodyTitle">{title}</div>
          <div className="bodyTag">{tag}</div>
        </div>
        <div className="courseMeta">
          <div className={cx(classes.rowFlex, "durationAndStudent")}>
            <div className={cx(classes.rowFlex, "duration")}>
              <img src={require("../../static/image/freeCourse/clockIcon.png")} alt="clock" />
              <div>강의시간: {duration}분</div>
            </div>
            <div className={cx(classes.rowFlex, "student")}>
              <img src={require("../../static/image/freeCourse/profileIcon.png")} alt="number of students" />
              <div>54명이 수강중입니다.</div>
            </div>
          </div>
        </div>
        <div className={cx(classes.columnFlex, "recommendation")}>
          <div>이런분들에게 추천합니다.</div>
          {
            recommendation.map(
              each => <li>{each}</li>
            )
          }
        </div>
        <div className={cx(classes.columnFlex, "priceArea")}>
          <div className={cx(classes.rowFlex, "price")}>
            <div>지금! 가격해택</div>
            <div className="origin">{originPrice}원</div>
            <div className="discounted">{discountedPrice}원</div>
          </div>
          <Button radius={4}>
            무료특강 수강신청하기
          </Button>
        </div>
      </div>
    </div>
  )
}

const BodyMiddle = () => {
  const {classes, cx} = useStyles();
  const mobileView = useMediaQuery('(max-width: 376px)');

  const cards = [
    {
      title: {
        desktop: "코딩 1도 몰라도 1시간이면 뚝딱 토마토마켓",
        mobile: <>코딩 1도 몰라도 1시간이면 <br/>뚝딱 토마토마켓</>
      },
      image: require("../../static/image/freeCourse/cardImage1.png"),
      cardTitle: {
        desktop: "쉬워도 너무 쉽다! 코딩 1도 몰라도 만드는 토마토마켓",
        mobile: <>쉬워도 너무 쉽다! 코딩 1도 몰라도 만드는 <br/>토마토마켓</>,
      },
      tag: "#컴맹도 #비코딩도 #노스팩",
      duration: "45",
      recommendation: [
        "코딩을 처음해보는 누구나", "인터넷 서칭만 할 줄 아는 초보자"
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
    {
      title: {
        desktop: "인사담당자 및 현직 개발자 30인이 알려주는 현실 취업 정보",
        mobile: <>인사담당자 및 현직 개발자 30인이<br />알려주는 현실 취업 정보</>,
      },
      image: require("../../static/image/freeCourse/cardImage2.png"),
      cardTitle: {
        desktop: "개발자 취업, 나도 가능할까? 인사담당자와 개발 1년차 선배들이 알려주는 리얼 현실을 알려드립니다.",
        mobile: <>
          개발자 취업, 나도 가능할까? 인사담당자와 <br />개발 1년차 선배들이 알려주는 리얼 현실을 <br />알려드립니다.
        </>
      },
      tag: "#컴맹도 #비코딩도 #노스팩",
      duration: "45",
      recommendation: [
        "개발자로 취업하고 싶은데 뭘 해야 할지 모르겠는 대학생", "코딩이 무서운 비전공자 취준생",
        "채용 공고를 봐도 무슨말인지 모르겠는 취준생", "개발자로 전직하고 싶은 직장인"
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
    {
      title: {
        desktop: "인사담당자 및 현직 개발자 30인이 알려주는 현실 취업 정보",
        mobile: <>인사담당자 및 현직 개발자 30인이<br />알려주는 현실 취업 정보</>,
      },
      image: require("../../static/image/freeCourse/cardImage3.png"),
      cardTitle: {
        desktop: "SI 기업 합격자 이력서 분석 첫 직장을 추천해드리고, 합격하는 이력서를 공개합니다.",
        mobile: <>SI 기업 합격자 이력서 분석 첫 직장을 <br />추천해드리고, 합격하는 이력서를 <br />공개합니다.</>
      },
      tag: "#컴맹도 #비코딩도 #노스팩",
      duration: "45",
      recommendation: [
        "개발자로 취업하고 싶은데 뭘 해야 할지 모르겠는 대학생", "코딩이 무서운 비전공자 취준생",
        "채용 공고를 봐도 무슨말인지 모르겠는 취준생", "개발자로 전직하고 싶은 직장인"
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
    {
      title: {
        desktop: "인사담당자 및 현직 개발자 30인이 알려주는 현실 취업 정보",
        mobile: <>인사담당자 및 현직 개발자 30인이<br />알려주는 현실 취업 정보</>,
      },
      image: require("../../static/image/freeCourse/cardImage4.png"),
      cardTitle: {
        desktop: "면접에 꼭 나오는 대표 질문 Best 10 IT 기업에 필요한 인재는 이런 것! 면접 질문리스트와 출제자의 의도를 알려드립니다.",
        mobile: <>면접에 꼭 나오는 대표 질문 Best 10 IT 기업에 <br />필요한 인재는 이런 것! 면접 질문리스트와 <br />출제자의 의도를 알려드립니다.</>
      },
      tag: "#면접꿀팁 #면접기출",
      duration: "45",
      recommendation: [
        "개발자 면접을 한 번도 안 해본 취준생", "면접 기출이 미리 알고 싶은 취준생",
        "왜 이런 질문을 하는지 알고 대비하고 싶은 취준생"
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
    {
      title: {
        desktop: <>코딩테스트, <br/>기출만 알면 된다</>,
        mobile: <>코딩테스트, <br/>기출만 알면 된다</>,
      },
      image: require("../../static/image/freeCourse/cardImage5.png"),
      cardTitle: {
        desktop:"코딩테스트, 출제자의 의도가 중요해! 출제 의도와 쉽게 해결하는 방법을 알려드립니다.",
        mobile: <>코딩테스트, 출제자의 의도가 중요해! <br />출제 의도와 쉽게 해결하는 방법을 <br />알려드립니다.</>
      },
      tag: "#비전공자 #코딩기술 #코테합격팁",
      duration: "45",
      recommendation: [
        "개발자로 취업하고 싶은데 뭘 해야 할지 모르겠는 대학생", "코딩이 무서운 비전공자 취준생",
        "채용 공고를 봐도 무슨말인지 모르겠는 취준생", "개발자로 전직하고 싶은 직장인"
      ],
      originPrice: "100,000",
      discountedPrice: "0",
    },
  ]

  const cardItems = cards.map(
    (each, index) => (
      <div key={index} className={cx(classes.card, classes.columnFlex)}>
        <div className={cx(classes.title, classes.desktop)}>
          {each.title.desktop}
        </div>
        <div className={cx(classes.title, classes.mobile)}>
          {each.title.mobile}
        </div>
        <FreeCourseRegistrationCard
          image={each.image}
          title={mobileView ? each.cardTitle.mobile : each.cardTitle.desktop }
          tag={each.tag}
          duration={each.duration}
          recommendation={each.recommendation}
          originPrice={each.originPrice}
          discountedPrice={each.discountedPrice}
        />
      </div>
    )
  )

  return (
    <section className={classes.main}>
      <div className={cx(classes.contents, classes.columnFlex)}>
        <div className={cx(classes.messageLarge, classes.desktop)}> 
          <span>단 10분 만으로</span>도
          <br />개발자로의 <span>취업가능성</span>에 대해 확신을 가져다 줍니다.
          <br />399,000원의 가치의 강의를 <span>0원에 수강</span>하실 수 있습니다.
        </div>
        <div className={cx(classes.messageLarge, classes.mobile)}> 
          <span>단 10분 만으로</span>도 개발자로의
          <br /><span>취업가능성</span>에 대해 확신을 줍니다.
          <br />399,000원의 가치의 강의를
          <br /><span>0원에 수강</span>하실 수 있습니다.
        </div>
        <div className={cx(classes.cards, classes.rowFlex, classes.desktop)}>
          {cardItems}
        </div>
        <div className={cx(classes.cards, classes.rowFlex, classes.mobile)}>
          <PaginationSlide
            perView={1}
            columnGap={9}
            items={cardItems}
          />
        </div>
      </div>
    </section>
  )
}

export default BodyMiddle;
