
import useBodyTopStyles from './bodyTopStyle';
import { Checkbox } from '@mantine/core';
import { Button } from '@mantine/core';

const ProductTable = () => {
  const {classes} = useBodyTopStyles();
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>
            <img src={require("../../static/image/supercodinglogoL.png")} alt="supercodinglogo" />
            <div>
              <div>수퍼코딩</div>
              <div>웹개발 종합반</div>
            </div>
          </th>
          <th>
            <div>
              <div>자기주도형 <br />웹개발 종합반</div>
              <div>2개월</div>
              <div>390,000원</div>
            </div>
          </th>
          <th>
            <div>
              <div>슈퍼 얼리버드 특가</div>
              <div>취업관리형 <br />웹개발 종합반 PLUS</div>
              <div>6개월 <span>890,000원</span></div>
              <div>390,000원</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={require("../../static/image/product/super.png")} alt="super"/>
            <div>
              <div>100%취업 안심보장</div>
              <div>*하단 환불 유의사항을 꼭 확인해주세요.</div>
            </div>
          </td>
          <td>해당사항없음</td>
          <td>개발자로 취업 못할 시 환불</td>
        </tr>
        <tr>
          <td>
            <div>STEP 01.</div>
            <div>
              <div>실무기반</div>
              <div>프로그래밍 교육</div>
            </div>
          </td>
          <td>슈퍼코딩 강의 20강<br />슈퍼 프로젝트 24개</td>
          <td>
            <div>
              슈퍼코딩 강의 20강
            </div>
            <div>
              슈퍼 프로젝트 24개
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>STEP 03.</div>
            <div>
              <div>협업, 응용력을 기르는</div>
              <div>팀 프로젝트</div>
            </div>
          </td>
          <td>해당사항없음</td>
          <td>
            <div>
              슈퍼 팀프로젝트 3회
            </div>
            <div>
              슈퍼 해커톤 1회
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>STEP 04.</div>
            <div>
              <div>커리어코칭,</div>
              <div>취업지원</div>
            </div>
          </td>
          <td>해당사항없음</td>
          <td>
            <div>
              슈퍼 기출 코딩 테스트 999개
            </div>
            <div>
              CTO 추천서
            </div>
            <div>
              면접 코칭
            </div>
            <div>
              2시간 슈코 멘토링
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const BodyTop = () => {
  const {classes} = useBodyTopStyles();
  return (
    <>
      <section className={classes.main}>
        <section className={classes.content}>
          <div className={classes.message}>
            이런 고민을 하고 있나요?
            <br />
            슈퍼코딩<span className={classes.emphasizer}>취업관리형 웹개발 종합반 Plus가</span> 반드시 필요합니다.
          </div>
          <div className={classes.messageMobile}>
            이런 고민을 하고 있나요?
            <br />
            슈퍼코딩<span className={classes.emphasizer}>취업관리형 웹개발 종합반
            <br />
            Plus가</span> 반드시 필요합니다.
          </div>
          <section className={classes.featureMessageArea}>
            <div className={classes.featureMessage}>
              <li>
                <span className={classes.emphasizer}>비전공자</span>인데 나도 개발자가 되고 싶다면? <span className={classes.hashTag}>#취업코딩 #취업프로젝트</span>
              </li>
              <li><span className={classes.emphasizer}>취업</span>이 잘되는 포트폴리오를 만들고 싶다면? <span className={classes.hashTag}>#슈퍼팀프로젝트 #슈퍼해커톤</span></li>
              <li>개발자 많이 뽑는다는데,<span className={classes.emphasizer}>원하는 기업에 취업</span>하기를 원한다면? <span className={classes.hashTag}>#000대기업코딩기출</span></li>
              <li>개발자 취업을 위한<span className={classes.emphasizer}>기업 소개, 지인 지원</span>을 받고 싶다면? <span className={classes.hashTag}>#CTO추천서 #면접코칭 #멘토링</span></li>
            </div>
          </section>
          <section className={classes.featureMessageAreaMobile}>
            <div className={classes.featureMessage}>
              <p>
                <span className={classes.emphasizer}>비전공자</span>인데 나도 개발자가 되고 싶다면?
                <br/>
                <span className={classes.hashTag}>#취업코딩 #취업프로젝트</span>
              </p>
              <p>
                <span className={classes.emphasizer}>취업</span>이 잘되는 포트폴리오를 만들고 싶다면?
                <br/>
                <span className={classes.hashTag}>#슈퍼팀프로젝트 #슈퍼해커톤</span>
              </p>
              <p>
                개발자 많이 뽑는다는데,<span className={classes.emphasizer}>원하는 기업에 취업</span>하기를 원한다면?
                <br/>
                <span className={classes.hashTag}>#000대기업코딩기출</span>
              </p>
              <p>
                개발자 취업을 위한<span className={classes.emphasizer}>기업 소개, 지인 지원</span>을 받고 싶다면?
                <br/>
                <span className={classes.hashTag}>#CTO추천서 #면접코칭 #멘토링</span>
              </p>
            </div>
          </section>
          <section className={classes.tableSection}>
            <div className={classes.message}>
              취업하지 못하면 <span className={classes.emphasizer}>100%환불</span>합니다.
              <br />
              취업관리형 웹개발 종합반 Plus
            </div>
            <div className={classes.messageMobile}>
              취업하지 못하면 <span className={classes.emphasizer}>100%환불</span>합니다.
              <br />
              취업관리형 웹개발 종합반 Plus
            </div>
            <div className={classes.tableArea}>
              <ProductTable />
            </div>
            <div className={classes.tableAreaMobile}>
              <img src={require("../../static/image/product/tableMobile.png")} alt="" />
            </div>
            <Checkbox
              className={classes.checkbox}
              radius={0}
              label={
                <div>
                  <span style={{color: "#000000", textDecoration: "underline"}}>상품 이용관련 유의사항을 모두 확인</span>
                  하였고, 이에 동의합니다.
                </div>
              }
            />
            <Button className={classes.button}>지금 바로 구매</Button>
          </section>
        </section>
      </section>
    </>
  )
}

export default BodyTop;
