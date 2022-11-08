import useBodyTopStyles from "./bodyTopStyle";
import { Checkbox } from "@mantine/core";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
  const { classes } = useBodyTopStyles();
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>
            <img
              src={require("../../static/image/supercodinglogoL.png")}
              alt="supercodinglogo"
            />
            <div>
              <div>수퍼코딩</div>
              <div>웹개발 종합반</div>
            </div>
          </th>
          <th>
            <div>
              <div>
                자기주도형 <br />
                웹개발 종합반
              </div>
              <div>2개월</div>
              <div>390,000원</div>
            </div>
          </th>
          <th>
            <div>
              <div>슈퍼 얼리버드 특가</div>
              <div>
                취업관리형 <br />
                웹개발 종합반 PLUS
              </div>
              <div>
                6개월 <span>890,000원</span>
              </div>
              <div>390,000원</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src={require("../../static/image/product/super.png")}
              alt="super"
            />
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
          <td>
            슈퍼코딩 강의
            <br />
            단계별 프로젝트 15개 이상
          </td>
          <td>
            <div>슈퍼코딩 강의</div>
            <div>단계별 프로젝트 15개 이상</div>
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
            <div>슈퍼 팀프로젝트</div>
            <div>슈퍼 해커톤</div>
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
            <div>기출 코딩 테스트 </div>
            <div>모의 테스트</div>
            <div>면접 강의, 모의 면접</div>
            <div>슈퍼 멘토링</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const BodyTop = () => {
  const { classes } = useBodyTopStyles();
  const navigate = useNavigate();
  return (
    <>
      <section className={classes.main}>
        <section className={classes.content}>
          <div className={classes.message}>
            이런 고민을 하고 있나요?
            <br />
            슈퍼코딩
            <span className={classes.emphasizer}>
              {" "}
              취업관리형 웹개발 종합반 Plus가
            </span>{" "}
            반드시 필요합니다.
          </div>
          <div className={classes.messageMobile}>
            이런 고민을 하고 있나요?
            <br />
            슈퍼코딩
            <span className={classes.emphasizer}>
              {" "}
              취업관리형 웹개발 종합반
              <br />
              Plus가
            </span>{" "}
            반드시 필요합니다.
          </div>
          <section className={classes.featureMessageArea}>
            <div className={classes.featureMessage}>
              <li>
                <span className={classes.emphasizer}>비전공자</span>인데 정말
                쉽게 배워서 개발자가 될 수 있을까?{" "}
                <span className={classes.hashTag}>
                  #세상에서가장쉬운 #슈퍼개념
                </span>
              </li>
              <li>
                <span className={classes.emphasizer}>합격</span>하는 이력서와
                포트폴리오를 만들수 있을까?{" "}
                <span className={classes.hashTag}>
                  #15개+프로젝트 #포트폴리오첨삭
                </span>
              </li>
              <li>
                개발자로 취업하기 어렵다던데{" "}
                <span className={classes.emphasizer}>코딩테스트는</span> 어떻게
                통과하지?{" "}
                <span className={classes.hashTag}>#100대 기업 취업기출</span>
              </li>
              <li>
                두렵기만한 <span className={classes.emphasizer}>기술면접</span>{" "}
                어떻게 준비하지?{" "}
                <span className={classes.hashTag}>#면접기출 #면접코칭</span>
              </li>
              <li>
                어렵기만한 <span className={classes.emphasizer}>채용공고</span>{" "}
                어떤 회사가 내 수준에 맞을까?{" "}
                <span className={classes.hashTag}>
                  #나에게맞는 회사고르는 팁 #취업코칭
                </span>
              </li>
            </div>
          </section>
          <section className={classes.featureMessageAreaMobile}>
            <div className={classes.featureMessage}>
              <p>
                <span className={classes.emphasizer}>비전공자</span>인데 정말
                쉽게 배워서 개발자가 될 수 있을까?
                <br />
                <span className={classes.hashTag}>
                  #세상에서가장쉬운 #슈퍼개념
                </span>
              </p>
              <p>
                <span className={classes.emphasizer}>합격</span>하는 이력서와
                포트폴리오를 만들수 있을까?
                <br />
                <span className={classes.hashTag}>
                  #15개+프로젝트 #포트폴리오첨삭
                </span>
              </p>
              <p>
                개발자로 취업하기 어렵다던데{" "}
                <span className={classes.emphasizer}>코딩테스트는</span> 어떻게
                통과하지?
                <br />
                <span className={classes.hashTag}>#100대 기업 취업기출</span>
              </p>
              <p>
                두렵기만한 <span className={classes.emphasizer}>기술면접</span>{" "}
                어떻게 준비하지?
                <br />
                <span className={classes.hashTag}>#면접기출 #면접코칭</span>
              </p>
              <p>
                어렵기만한 <span className={classes.emphasizer}>채용공고</span>{" "}
                어떤 회사가 내 수준에 맞을까?
                <br />
                <span className={classes.hashTag}>
                  #나에게맞는 회사고르는 팁 #취업코칭
                </span>
              </p>
            </div>
          </section>
          <section className={classes.tableSection}>
            <div className={classes.message}>
              취업하지 못하면{" "}
              <span className={classes.emphasizer}>100%환불</span>합니다.
              <br />
              취업관리형 웹개발 종합반 Plus
            </div>
            <div className={classes.messageMobile}>
              취업하지 못하면{" "}
              <span className={classes.emphasizer}>100%환불</span>합니다.
              <br />
              취업관리형 웹개발 종합반 Plus
            </div>
            <div className={classes.tableArea}>
              <img
                src={require("../../static/image/product/productTable.png")}
                alt="productTable"
              />
            </div>
            <div className={classes.tableAreaMobile}>
              <img
                src={require("../../static/image/product/tableMobile.png")}
                alt="productTableMobile"
              />
            </div>
            <Checkbox
              className={classes.checkbox}
              radius={0}
              label={
                <div>
                  <span
                    style={{ color: "#000000", textDecoration: "underline" }}
                  >
                    상품 이용관련 유의사항을 모두 확인
                  </span>
                  하였고, 이에 동의합니다.
                </div>
              }
            />
            <Button
              className={classes.button}
              onClick={() =>
                navigate("/course", { state: process.env.REACT_APP_COURSE_ID })
              }
            >
              지금 바로 구매
            </Button>
          </section>
        </section>
      </section>
    </>
  );
};

export default BodyTop;
