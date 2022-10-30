
import { Button, Paper, Transition } from '@mantine/core';
import { useState } from 'react';
import useBodyProgramStyles from './bodyProgramStyle';

interface TransitionProgramProps {
  open: boolean
  setOpened: (arg: boolean) => void
};

const TransitionProgram = ({open, setOpened}: TransitionProgramProps) => {
  const {classes} = useBodyProgramStyles();
  return (
    <>
      <Button radius={10} onClick={() => setOpened(!open)}>
        <div>프로그램자세히보기</div>
        <img
          src={open ? require("../../static/image/product/arrowUp.png") : require("../../static/image/product/arrowDown.png")}
          alt="arrowDown"
        />
      </Button>
      <Transition mounted={open} transition="slide-down" duration={0}>
        {(styles) => (
          <Paper
            shadow="md"
            style={styles}
            withBorder
          >
            <div className={classes.programImage}>
              <img src={require("../../static/image/product/programStep01Step02.png")} alt="programStep0102" />
              <img src={require("../../static/image/product/programStep03.png")} alt="programStep03" />
            </div>
          </Paper>
        )}
      </Transition>
    </>
  )
}

const BodyProgram = () => {
  const {classes} = useBodyProgramStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <section className={classes.message}>
        <div>
          <h2>why? <br/>슈퍼코딩 웹개발 종합반을 선택해야 할까요?</h2>
        </div>
      </section>
      <section className={classes.messageMobile}>
        <div>
          <h2>why?
            <br/>슈퍼코딩 웹개발 종합반을
            <br />선택해야 할까요?
          </h2>
        </div>
      </section>
      <section className={classes.main}>
        <div className={classes.contents}>
          <div className={classes.answer}>
            <h2>
              기업이 원하는 인재를 만들기 위한
              <br />
              <span>100인의 업계 최고들의 적극적인 참여</span>
              로 프로그램을 완벽하게 완성시켰기 때문입니다.
            </h2>
          </div>
          <div className={classes.super}>
            <div>SUPER</div>
            <h2>30인+팀장급 리더개발자님들이 원하는 프로그램으로 구성되어 있습니다.</h2>
          </div>
          <section className={classes.program}>
            <TransitionProgram open={opened} setOpened={setOpened}/>
          </section>
          <div style={{display: opened ? "none": "block"}}>
            <div>
              <img src={require("../../static/image/product/ot.png")} alt="ot" />
            </div>
            <div className={classes.super}>
              <div>SUPER</div>
              <h2>VS 업계 비교 차트로 퀄리티의 다름을 확신합니다.</h2>
            </div>
            <div>
              <img src={require("../../static/image/product/review.png")} alt="ot" />
            </div>
          </div>
          <div className={classes.answer}>
            <h2>
              업계 최고의 CTO추천서를 부여받는 곳은 <br/>
              <span>'슈퍼코딩'</span>유일하기 때문입니다.
            </h2>
          </div>
        </div>
        <div className={classes.contentsMobile}>
          <div className={classes.answerMobile}>
            <h2>
              기업이 원하는 인재를 만들기 위한
              <br /><span>100인의 업계 최고들의</span>
              <br /><span>적극적인 참여</span>로 프로그램을 완벽하게
              <br />완성시켰기 때문입니다.
            </h2>
          </div>
          <div className={classes.superMobile}>
            <div>SUPER</div>
            <h2>
                30인+팀장급 리더개발자님들이 원하는
                <br />프로그램으로 구성되어 있습니다.
            </h2>
          </div>
          <section className={classes.programMobile}>
            <TransitionProgram open={opened} setOpened={setOpened}/>
          </section>
          <div style={{display: opened ? "none": "block"}}>
            <div className="withoutSideBlank">
              <img src={require("../../static/image/product/otMobile.png")} alt="ot" />
            </div>
            <div className={classes.superMobile}>
              <div>SUPER</div>
              <h2>
                  VS 업계 비교 차트로
                  <br />퀄리티의 다름을 확신합니다.
              </h2>
            </div>
            <div>
              <img src={require("../../static/image/product/reviewMobile.png")} alt="ot" />
            </div>
          </div>
          <div className={classes.answerMobile}>
            <h2>
              기업이업계 최고의
              <br />CTO추천서를 부여받는 곳은
              <br/>
              <span>'슈퍼코딩'</span>유일하기 때문입니다.
            </h2>
          </div>
        </div>
      </section>
    </>
  )

}

export default BodyProgram;
