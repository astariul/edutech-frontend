import { Button, Paper, Transition, Divider, Space } from "@mantine/core";
import { ReactNode, useState } from "react";
import useBodyProgramStyles from "./bodyProgramStyle";

interface TransitionProgramProps {
  open: boolean;
  setOpened: (arg: boolean) => void;
}

const TransitionProgram = ({ open, setOpened }: TransitionProgramProps) => {
  const { classes } = useBodyProgramStyles();
  return (
    <>
      <Button radius={10} onClick={() => setOpened(!open)}>
        <div>프로그램자세히보기</div>
        <img
          src={
            open
              ? require("../../static/image/product/arrowUp.png")
              : require("../../static/image/product/arrowDown.png")
          }
          alt="arrowDown"
        />
      </Button>
      <Transition mounted={open} transition="slide-down" duration={0}>
        {(styles) => (
          <Paper shadow="md" style={styles} withBorder>
            <div className={classes.programImage}>
              <img
                src={require("../../static/image/product/program.png")}
                alt="program"
              />
            </div>
          </Paper>
        )}
      </Transition>
    </>
  );
};

interface SuperMessageProps {
  mainMessage: string | ReactNode;
  subMessage: string | ReactNode;
}
const SuperMessage = ({ mainMessage, subMessage }: SuperMessageProps) => {
  const { classes } = useBodyProgramStyles();

  return (
    <div className={classes.super}>
      <div id="super">SUPER</div>
      <div id="message" className={classes.columnFlex}>
        <h2>{mainMessage}</h2>
        <h2>{subMessage}</h2>
      </div>
    </div>
  );
};

interface MentorCardProps {
  image?: string;
  nameAndPosition: string;
  company: string;
  comment: string | ReactNode;
}

const MentorCard = ({
  image,
  nameAndPosition,
  company,
  comment,
}: MentorCardProps) => {
  const { classes, cx } = useBodyProgramStyles();
  return (
    <div className={cx(classes.rowFlex, classes.mentorCard)}>
      <div className={cx(classes.rowFlex, classes.mentorCardInner)}>
        <div className="mentorCardMentorImage">
          {image === undefined ? <></> : <img src={image} alt="mentorImage" />}
        </div>
        <div className={cx(classes.columnFlex, "mentorCardMentorInfo")}>
          <div
            className={cx(
              classes.columnFlex,
              "mentorCardMentorNameAndPosition"
            )}
          >
            {nameAndPosition}
            <br />
            {company}
          </div>
          <div className="mentorCardMentorComment">{comment}</div>
        </div>
      </div>
    </div>
  );
};

const BodyProgram = () => {
  const { classes, cx } = useBodyProgramStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <section className={classes.message}>
        <div>
          <h2>
            why? <br />
            슈퍼코딩 웹개발 종합반을 선택해야 할까요?
          </h2>
        </div>
      </section>
      <section className={classes.messageMobile}>
        <div>
          <h2>
            why?
            <br />
            슈퍼코딩 웹개발 종합반을
            <br />
            선택해야 할까요?
          </h2>
        </div>
      </section>
      <Space h={50} />
      <section className={classes.main}>
        <div className={classes.contents}>
          <div className={cx(classes.answer, classes.desktop)}>
            <h2>
              기업이 원하는 인재를 만들기 위해
              <span> 업계 최고 개발자 슈퍼멘토</span>들의 적극적인 참여로
              <br />
              프로그램을 완벽하게 완성시켰기 때문입니다.
            </h2>
          </div>
          <div className={cx(classes.answer, classes.mobile)}>
            <h2>
              기업이 원하는 인재를 만들기 위해
              <br />
              <span> 업계 최고 개발자 슈퍼멘토</span>들의
              <br />
              적극적인 참여로 프로그램을 완벽하게
              <br />
              완성시켰기 때문입니다.
            </h2>
          </div>
          <Divider size={53} style={{ borderTopColor: "transparent" }} />
          <div className={classes.desktop}>
            <img
              src={require("../../static/image/product/superMentor.png")}
              alt="mentor"
            />
          </div>
          <div className={classes.mobile}>
            <img
              src={require("../../static/image/product/superMentorMobile.png")}
              alt="mentor"
            />
          </div>
          <div className={classes.program}>
            <TransitionProgram open={opened} setOpened={setOpened} />
          </div>
          <div className={classes.programMobile}>
            <TransitionProgram open={opened} setOpened={setOpened} />
          </div>
          <div className={cx(classes.answer, classes.desktop)}>
            <Space h={50} />
            <h2>
              <span> 차별화된 취업 6종세트 </span>
              (코딩/코딩테스트/추천서/이력서/포트폴리오/기술면접)
              <br />
              모두 여러분의 것이 됩니다.
            </h2>
          </div>
          <div className={cx(classes.answer, classes.mobile)}>
            <h2>
              <span> 차별화된 취업 6종세트 </span>
              <br />
              (코딩/코딩테스트/추천서/
              <br />
              이력서/포트폴리오/기술면접)
              <br />
              모두 여러분의 것이 됩니다.
            </h2>
          </div>

          <section className={classes.desktop}>
            <Space h={50} />
            <SuperMessage
              mainMessage="1. 많은 회사에서 실제로 요구하는 기술을 배워야 합니다."
              subMessage="많은 취준생분들이 실제 현업에서 사용하는 기술을 배우지 못해 어려움을 겪고 있습니다."
            />
            <Space h={43.51} />
            <img
              src={require("../../static/image/product/techStacks.png")}
              alt="techStacks"
            />
            <Space h={43.51} />
            <span className={classes.quotes}>
              <h2>
                “오래된 강의를 듣지 마시고 최신 현업 기술스택의 강의를
                수강하세요.”
              </h2>
            </span>
            <Divider size={33} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.rowFlex, classes.cardArea)}>
              <MentorCard
                image={require("../../static/image/product/mentors/meta.png")}
                nameAndPosition="남길주 Reseach Scientist"
                company="Meta (Facebook)"
                comment={
                  <p>
                    슈퍼코딩은 <strong>현업에 꼭 필요한 기술</strong>들만 알기
                    쉽게 알려줍니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/krafton.png")}
                nameAndPosition="박종민 Reseach Scientist"
                company="Krafton"
                comment={
                  <p>
                    <strong>
                      현업에서 필요로하는 기술 스택을 쌓을 수 있는 좋을 기회
                    </strong>
                    를 제공해주는 서비스
                    <br />
                    이며 취준생들의 만족도가 가장 높은 코딩 교육이라고
                    생각합니다.
                  </p>
                }
              />
            </div>
            <Divider size={55} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage="2. 코딩은 처음부터 제대로 그리고 쉽게 배워야 합니다. 여러분 안에있는 코딩잠재력을 깨워주세요."
              subMessage="어려운 전문용어와 생소한 기술 변천사로 고생하지 마세요."
            />
            <Divider size={42} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.rowFlex, classes.cardArea)}>
              <MentorCard
                image={require("../../static/image/product/mentors/naverWebtoon.png")}
                nameAndPosition="이가영 연구원"
                company="NAVER WEBTOON"
                comment={
                  <p>
                    기존에 재미없고 어려운 강의만 듣고 '나는 개발에 소질이
                    없다'고 생각하며 돌아
                    <br />
                    서시는 모든 분들께 추천합니다.
                    <strong>
                      여러분이 문제가 아니라 그 동안의 코딩 교육
                      <br />이 문제
                    </strong>
                    였던 것이라는 걸 아시게 될 겁니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/legionCollective.png")}
                nameAndPosition="김희창 Engineer"
                company="Legion Collective"
                comment={
                  <p>
                    <strong>비전공자출신으로서</strong>잘못된 강의로 공부하여
                    일주일이면 공부할 수 있는 내용
                    <br />을 한달 동안 혼자서 씨름해야하는 경우가
                    태산이었습니다.
                    <br />
                    수퍼코딩은 이 문제점을 정확히 직시하고 해결해줍니다.
                  </p>
                }
              />
            </div>
            <Divider size={55} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage="3. 필요에 의한 학습이 중요합니다. 단계별 난이도 15개의 프로젝트로 배우세요."
              subMessage="이유를 모르고 따라하는 클론코딩은 멈추고, 직접 필요를 느끼며 문제해결력을 익히세요."
            />
            <Divider size={42} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.rowFlex, classes.cardArea)}>
              <MentorCard
                image={require("../../static/image/product/mentors/ably.png")}
                nameAndPosition="김재오 DevOps Engineer"
                company="에이블리"
                comment={
                  <p>
                    실제로 <strong>회사에서 개발하는 방식 그대로</strong> 배우실
                    수 있으십니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/lunit.png")}
                nameAndPosition="신희재 Engineer"
                company="Lunit"
                comment={
                  <p>
                    수강생분들이 슈퍼코딩 과정을 통해 정말로 준비되었다는 느낌을
                    받으실 수 있
                    <br />을 것 같습니다.{" "}
                    <strong>
                      단순히 지식을 전달하는 것 이상으로 적극적으로 도움
                    </strong>
                    받는 느
                    <br />
                    낌입니다.
                  </p>
                }
              />
            </div>
            <Divider size={55} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage="4. 채용책임자를 통해 코딩 학습과 취업을 모두 준비하세요."
              subMessage="코딩테스트와 면접강의 그리고 반복훈련을 통해 막힘없이 준비해야 합니다."
            />
            <Divider size={42} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.rowFlex, classes.cardArea)}>
              <MentorCard
                image={require("../../static/image/product/mentors/flesky.png")}
                nameAndPosition="Nicolas Remond Data Scientist, ML Engineer"
                company="Flesky"
                comment={
                  <p>
                    Supercoding has a team of highly-skilled people that can
                    definitively
                    <br />
                    provide invaluable experience and insights for getting a job
                    as a
                    <br />
                    developper. Learning from them will give you an important
                    leverage and
                    <br />
                    will help you get better as a software engineer.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/spacewalk.png")}
                nameAndPosition="김동욱 Engineer"
                company="Spacewalk"
                comment={
                  <p>
                    직접제작한 강의와 체계화된 커리큘럼으로 수강자를 올바른
                    방향으로 이끌고
                    <br />
                    취업까지 이어지도록 멘토링해주는 슈퍼 코딩을 기존 코딩
                    교육으로 만족하지
                    <br />
                    분들께 추천합니다.
                  </p>
                }
              />
            </div>
            <Divider size={55} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage="5. 차별화된 합격자 이력서, 포트폴리오 그리고 추천서, 곧 여러분의 것이 됩니다."
              subMessage="채용전문가 슈퍼멘토의 첨삭을 통해 취업확률을 높이고 추천서를 통해 강점을 어필하세요."
            />
            <Divider size={42} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.rowFlex, classes.cardArea)}>
              <MentorCard
                nameAndPosition="정OO Engineer"
                company="AI 스타트업"
                comment={
                  <p>
                    취업 시 회사가 지원자에 대해 아무래도 정보가 부족하여 고민을
                    많이 하게 되는
                    <br />데 지원자의 강점을 알려 줄 수 있기에 좋았습니다. 저에
                    대해서 회사에 객관적
                    <br />
                    으로 어필하기에 좋은 면이 있었고 도움이 많이 되었습니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/cj.png")}
                nameAndPosition="손인석 Engineer"
                company="CJ 올리브네트웍스"
                comment={
                  <p>
                    최고 수준의 현업 개발자에게 받는 추천보다 취업에 있어 강력한
                    무기는
                    <br />
                    없습니다.
                  </p>
                }
              />
            </div>
          </section>
          <section className={cx(classes.columnFlex, classes.mobile)}>
            <Divider size={83} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage={
                <>
                  1. 많은 회사에서 실제로 <br />
                  요구하는 기술을 배워야 합니다.
                </>
              }
              subMessage={
                <>
                  많은 취준생분들이 실제 현업에서 <br />
                  사용하는 기술을 배우지 못해 <br />
                  어려움을 겪고 있습니다.
                </>
              }
            />
            <Divider size={43.51} style={{ borderTopColor: "transparent" }} />
            <img
              src={require("../../static/image/product/techStacks.png")}
              alt="techStacks"
            />
            <Divider size={33} style={{ borderTopColor: "transparent" }} />
            <span className={classes.quotes}>
              <h2>
                “오래된 강의를 듣지 마시고 <br />
                최신 현업 기술스택의 <br />
                강의를 수강하세요.”
              </h2>
            </span>
            <Divider size={33} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.columnFlex, classes.cardArea)}>
              <MentorCard
                image={require("../../static/image/product/mentors/meta.png")}
                nameAndPosition="남길주 Reseach Scientist"
                company="Meta (Facebook)"
                comment={
                  <p>
                    슈퍼코딩은 <strong>현업에 꼭 필요한 기술</strong>
                    <br />
                    들만 알기 쉽게 알려줍니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/krafton.png")}
                nameAndPosition="박종민 Reseach Scientist"
                company="Krafton"
                comment={
                  <p>
                    <strong>
                      현업에서 필요로하는 기술 스택을
                      <br /> 쌓을 수 있는 좋을 기회
                    </strong>
                    를
                    <br /> 제공해주는 서비스이며
                    <br />
                    취준생들의 만족도가 가장
                    <br />
                    높은 코딩 교육이라고 생각합니다.
                  </p>
                }
              />
            </div>
            <Divider size={55} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage={
                <>
                  2. 코딩은 처음부터 제대로
                  <br />
                  그리고 쉽게 배워야 합니다.
                  <br />
                  여러분 안에있는
                  <br />
                  코딩잠재력을 깨워주세요.
                </>
              }
              subMessage={
                <>
                  어려운 전문용어와 생소한
                  <br />
                  기술 변천사로 고생하지 마세요.
                </>
              }
            />
            <Divider size={42} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.columnFlex, classes.cardArea)}>
              <MentorCard
                image={require("../../static/image/product/mentors/naverWebtoon.png")}
                nameAndPosition="이가영 연구원"
                company="NAVER WEBTOON"
                comment={
                  <p>
                    기존에 재미없고 어려운 강의만
                    <br />
                    듣고 '나는 개발에 소질이 없다'
                    <br />고 생각하며 돌아서시시는 모든 분들께
                    <br />
                    추천합니다.
                    <strong>
                      {" "}
                      여러분이 문제가 아니라
                      <br />그 동안의 코딩 교육
                    </strong>
                    이 문제였던 것
                    <br />
                    이라는 걸 아시게 될 겁니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/legionCollective.png")}
                nameAndPosition="김희창 Engineer"
                company="Legion Collective"
                comment={
                  <p>
                    <strong>비전공자출신으로서</strong> 잘못된 강의로
                    <br />
                    공부하여 일주일이면 공부할 수 있는
                    <br />
                    내용을 한달 동안 혼자서 씨름해야하는
                    <br />
                    경우가 태산이었습니다.
                    <br />
                    수퍼코딩은 이 문제점을 정확히
                    <br />
                    직시하고 해결해줍니다.
                  </p>
                }
              />
            </div>
            <Divider size={55} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage={
                <>
                  3. 필요에 의한 학습이 중요합니다.
                  <br />
                  단계별 난이도
                  <br />
                  15개의 프로젝트로 배우세요.
                </>
              }
              subMessage={
                <>
                  이유를 모르고 따라하는 클론코딩은
                  <br />
                  멈추고, 직접 필요를 느끼며
                  <br />
                  문제해결력을 익히세요.
                </>
              }
            />
            <Divider size={42} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.columnFlex, classes.cardArea)}>
              <MentorCard
                image={require("../../static/image/product/mentors/ably.png")}
                nameAndPosition="김재오 DevOps Engineer"
                company="에이블리"
                comment={
                  <p>
                    실제로{" "}
                    <strong>
                      회사에서 개발하는
                      <br />
                      방식 그대로
                    </strong>{" "}
                    배우실 수 있으십니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/lunit.png")}
                nameAndPosition="신희재 Engineer"
                company="Lunit"
                comment={
                  <p>
                    수강생분들이 슈퍼코딩 과정을 통해
                    <br />
                    정말로 준비되었다는 느낌을 받으실 수 있
                    <br />을 것 같습니다.{" "}
                    <strong>
                      단순히 지식을
                      <br />
                      전달하는 것 이상으로 적극적으로
                      <br />
                      도움
                    </strong>
                    받는 느낌입니다.
                  </p>
                }
              />
            </div>
            <Divider size={55} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage={
                <>
                  4. 채용책임자를 통해
                  <br />
                  코딩 학습과 취업을 모두 준비하세요.
                </>
              }
              subMessage={
                <>
                  코딩테스트와 면접강의 그리고
                  <br />
                  반복훈련을 통해 막힘없이
                  <br />
                  준비해야 합니다.
                </>
              }
            />
            <Divider size={42} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.columnFlex, classes.cardArea)}>
              <MentorCard
                image={require("../../static/image/product/mentors/flesky.png")}
                nameAndPosition="Nicolas Data Scientist, ML Engineer"
                company="Flesky"
                comment={
                  <p>
                    슈퍼코딩은{" "}
                    <strong>
                      개발자 취업에 대한 풍부한
                      <br />
                      경험과 많은 인사이트
                    </strong>
                    를 갖고있습니다.
                    <br />
                    당신이 취업하는데에 도움을 많이
                    <br />줄 것입니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/spacewalk.png")}
                nameAndPosition="김동욱 Engineer"
                company="Spacewalk"
                comment={
                  <p>
                    직접제작한 강의와 체계화된 커리큘럼
                    <br />
                    으로 수강자를 올바른 방향으로 이끌고
                    <br />
                    <strong>취업까지 이어지도록 멘토링</strong>해주는 <br />
                    슈퍼 코딩을 기존 코딩 교육으로 <br />
                    만족하지 분들께 추천합니다.
                  </p>
                }
              />
            </div>
            <Divider size={55} style={{ borderTopColor: "transparent" }} />
            <SuperMessage
              mainMessage={
                <>
                  5. 차별화된 합격자
                  <br />
                  이력서, 포트폴리오 그리고 추천서,
                  <br />곧 여러분의 것이 됩니다.
                </>
              }
              subMessage={
                <>
                  채용전문가 슈퍼멘토의 첨삭을 통해
                  <br />
                  취업확률을 높이고
                  <br />
                  추천서를 통해 강점을 어필하세요.
                </>
              }
            />
            <Divider size={42} style={{ borderTopColor: "transparent" }} />
            <div className={cx(classes.columnFlex, classes.cardArea)}>
              <MentorCard
                nameAndPosition="정OO Engineer"
                company="AI 스타트업"
                comment={
                  <p>
                    취업할 때 회사가 저에 대해 아무래도
                    <br />
                    정보가 부족하여 고민을 많이하게 될텐데
                    <br />제 강점을 알려 줄 수 있었습니다. 그리고 <br />
                    <strong>
                      회사에 객관적으로 저를 어필하기에
                      <br />
                      좋은 면이 있었고 취업에 도움
                    </strong>
                    이 많이
                    <br />
                    되었습니다.
                  </p>
                }
              />
              <MentorCard
                image={require("../../static/image/product/mentors/cj.png")}
                nameAndPosition="손인석 Engineer"
                company="CJ 올리브네트웍스"
                comment={
                  <p>
                    최고 수준의 현업 개발자에게 받는
                    <br />
                    <strong>
                      추천보다 취업에 있어 강력한
                      <br />
                      무기는 없습니다.
                    </strong>
                  </p>
                }
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default BodyProgram;
