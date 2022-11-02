
import useStyles from './style';
import Person from '../../components/person/Person';
import { ICourse } from '../../typings/db';
import { Button, Checkbox, Modal, ScrollArea } from '@mantine/core';
import { useState, useCallback, MouseEvent} from 'react';

interface PaymentTopSectionProps {
  course?: ICourse
}

interface PaymentBottomLeftSectionProps {
  selectMethodHandler: () => void
}

const Tag = ({name, color, key}: {name: string, color: string, key: any}) => {
  const {classes} = useStyles();
  return (
    <div key={key} className={classes.tag} style={{backgroundColor: color}}>
      {name}
    </div>
  )
}

const PaymentTopSection = ({course}: PaymentTopSectionProps) => {
  const {classes, cx} = useStyles();
  const tags = [
    {
      color: "#00A607",
      name: "Live"},
    {
      color: "#515151",
      name: "인강",
    },
    {
      color:  "#2895E3",
      name: "환급"
    }
  ]

  return (
    <section className={cx(classes.topSection, classes.columnFlex)}>
      <div className={classes.pageTitle}>
        <h2>결제하기</h2>
      </div>
      <div className={cx(classes.product, classes.rowFlex)}>
        <div className={cx(classes.checkerArea, classes.checker)}>
          <Checkbox radius={0}/>
        </div>
        <div className={classes.image}>
          <img src={require("../../static/image/payment/courseImage.png")} alt="courseImage" />
        </div>
        <div className={cx(classes.information, classes.columnFlex)}>
          <div className={cx(classes.tags, classes.rowFlex)}>
            {
              tags.map((tag, index) => <Tag key={index} name={tag.name} color={tag.color}/>)
            }
          </div>
          <div className={classes.courseTitle}>
            <h2>취업보장, 불합격시 100%환불 취업관리형 웹개발 종합반 PLUS</h2>
          </div>
          <div className={classes.instructor}>
            <Person
              image={require("../../static/image/payment/avatar.png")}
              name={"이경엽"}
              description={"Spacwalk CTO/SuperCoding Coach"}
              size={50.83}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const PaymentBottomLeftSection = () => {
  const {classes, cx} = useStyles();
  const [selectedMethod, setSelectedMethod] = useState("");
  const onClickMethod = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      let target = e.target as HTMLElement;
      setSelectedMethod(target.id)
    }, [setSelectedMethod]
  );

  return (
    <section className={cx(classes.bottomLeftSection, classes.columnFlex)}>
      <div className={cx(classes.columnFlex, "top")}>
        <div className={cx(classes.sectionTitle, classes.rowFlex)}>
          <h2>결제 방식</h2>
          <div>무이자할부안내</div>
        </div>
        <div className={cx(classes.methodArea, classes.rowFlex)}>
          <div
            onClick={onClickMethod}
            className={cx(classes.method, {[classes.activeMethod]: selectedMethod === "신용카드"})}
            id="신용카드"
          >
            신용카드
          </div>
          <div
            onClick={onClickMethod}
            className={cx(classes.method, {[classes.activeMethod]: selectedMethod === "무통장입금"})}
            id="무통장입금"
            >
            무통장입금
          </div>
          <div
            onClick={onClickMethod}
            className={cx(classes.method, {[classes.activeMethod]: selectedMethod === "토스페이먼트"})}
            id="토스페이먼트"
          >
            <img src={require("../../static/image/payment/tosspayment.png")} alt="tosspayment" />
          </div>
        </div>
      </div>
      <div className={cx(classes.columnFlex, "bottom")}>
        <div className={classes.sectionTitle}>
          <h2>유의사항</h2>
        </div>
        <ScrollArea className={classes.notice} type="always" scrollbarSize={16}>
          <div id="content">
            <span>1. 온라인강좌안내</span>
            <br />온라인 강좌는 구매 후 내강의실에서 ....
            <span><br />2. 할인권(쿠폰) 이용안내</span>
            <br />쿠폰별적용조건에맞게쿠폰적용이가능합니다.
            <br />쿠폰을적용한상품을환불및취소시쿠폰은반환되지않습니다.
            <br />쿠폰은유효기간내에만이용이가능합니다.
            <span><br />3. 환불정책안내</span>
            <br />슈퍼코딩유료서비스이용약관제12조제2항및13조에맞게환불금액이책정됩니다.
            <br />슈퍼코딩유료서비스이용약관제12조제2항및13조에맞게환불금액이책정됩니다.
            <br />슈퍼코딩유료서비스이용약관제12조제2항및13조에맞게환불금액이책정됩니다.
            <br />슈퍼코딩유료서비스이용약관제12조제2항및13조에맞게환불금액이책정됩니다.
            <br />슈퍼코딩유료서비스이용약관제12조제2항및13조에맞게환불금액이책정됩니다.
          </div>
        </ScrollArea>
      </div>
    </section>
  )
}

const PaymentBottomRightSection = () => {
  const {classes, cx} = useStyles();
  const [openAgreementModal, setOpenAgreementModal] = useState(false);
  const [openPaymentResultModal, setPaymentResultModal] = useState(false);
  return (
    <>
    {
      <Modal className={classes.modal} opened={openAgreementModal} centered onClose={() => setOpenAgreementModal(false)}>
          <div>
            <h2>개인정보 수집 및 이용 및 처리 동의</h2>
            <ScrollArea type="always">
              <p>
                개인정보취급 위탁
                <br />당사는 전문적인 고객지원 및 서비스 제공을 위해 아래와 같이 개인정보 취급 업무를 외부 업체에 위탁하여 운영하고 있습니다. 위탁계약 시 개인정보보호의 안전을 기하기 위하여 개인정보보호 관련 지시 엄수, 개인정보에 관한 유출금지 및 사고시의 책임부담 등을 명확히 규정하고 위탁계약 내용에 포함되어 있습니다.
                <br />[서비스 제공 위탁업체]
                <br />  -  위탁 업체명 : 씨제이대한통운㈜ , 우정사업본부(우체국)
                <br />  -  위탁 업무 : 물품 배송
                <br />개인정보취급 위탁
                <br />당사는 전문적인 고객지원 및 서비스 제공을 위해 아래와 같이 개인정보 취급 업무를 외부 업체에 위탁하여 운영하고 있습니다. 
                <br />위탁계약 시 개인정보보호의 안전을 기하기 위하여 개인정보보호 관련 지시 엄수, 개인정보에 관한 유출금지 및 사고시의 책임부담 등을 명확히 규정하고 위탁계약 내용에 포함되어 있습니다.
                <br />[서비스 제공 위탁업체]
                <br />-  위탁 업체명 : 씨제이대한통운㈜ , 우정사업본부(우체국)
                <br />-  위탁 업무 : 물품 배송
                <br />당사는 전문적인 고객지원 및 서비스 제공을 위해 아래와 같이 개인정보 취급 업무를 외부 업체에 위탁하여 운영하고 있습니다. 
                <br />위탁계약 시 개인정보보호의 안전을 기하기 위하여 개인정보보호 관련 지시 엄수, 개인정보에 관한 유출금지 및 사고시의 책임부담 등을 명확히 규정하고 위탁계약 내용에 포함되어 있습니다.
                <br />[서비스 제공 위탁업체]
                <br />-  위탁 업체명 : 씨제이대한통운㈜ , 우정사업본부(우체국)
                <br />-  위탁 업무 : 물품 배송
              </p>
            </ScrollArea>
          </div>
      </Modal>
    }
    {
      <Modal className={classes.modal} opened={openPaymentResultModal} centered onClose={() => setPaymentResultModal(false)}>
        <div className={classes.paymentResultTable}>
          <div id="key" className={classes.columnFlex}>
            <div>주문상품</div>
            <div>주문번호</div>
            <div>결제정보</div>
            <div>결제금액</div>
          </div>
          <div id="value" className={classes.columnFlex}>
            <div>취업관리형 웹개발 종합반</div>
            <div>226968671</div>
            <div>신용카드 <br />승인일시: 2022.09.24. 23:49:29</div>
            <div>427,000원</div>
          </div>
        </div>
        <Button>내 강의실 바로가기</Button>
      </Modal>
    }
    {
      <section className={cx(classes.columnFlex, classes.bottomRightSection)}>-
      <div className={classes.sectionTitle}>
        <h2>결제 금액</h2>
      </div>
      <div className={cx(classes.columnFlex, classes.priceTable)}>
        <div className={cx(classes.columnFlex, classes.tableInner)}>
          <div className={cx(classes.rowFlex, classes.row, classes.bold)}>
            <div>상품금액</div>
            <div>450,000원</div>
          </div>
          <div className={cx(classes.rowFlex, classes.row, classes.bold)}>
            <div>할인금액</div>
            <div>-23,000원</div>
          </div>
          <div className={cx(classes.rowFlex, classes.row, classes.thin)}>
            <div>상품할인</div>
            <div>-20,000</div>
          </div>
          <div className={cx(classes.rowFlex, classes.row, classes.thin)}>
            <div>쿠폰적용</div>
            <div>450,000원</div>
          </div>
        </div>
        <div className={cx(classes.rowFlex, classes.row, classes.total)}>
          <div>총 결제 금액</div>
          <div>427,000원</div>
        </div>
      </div>
      <div className={cx(classes.columnFlex, classes.buttonArea)}>
        <div className={cx(classes.columnFlex, classes.agreementArea)}>
          <div className={cx(classes.rowFlex, classes.thin, classes.agreement)}>
            <div className={classes.checker}>
              <Checkbox radius={0}/>
            </div>
            <div>아래 내용을 확인하였으며 결제에 동의합니다.</div>
          </div>
          <div className={cx(classes.rowFlex, classes.thin, classes.agreement)}>
            <div className={classes.checker}>
              <Checkbox radius={0}/>
            </div>
            <div>개인정보 수집이용 및 제공 동의(필수)</div>
            <div className={cx(classes.thin, classes.show)} onClick={() => setOpenAgreementModal(true)}>보기</div>
          </div>
        </div>
        <Button
          className={classes.paymentButton}
          radius={0}
          onClick={() => {}}
          >
          결제하기
        </Button>
      </div>
    </section>
    }
  </>
  )
}

const Payment = () => {
  const {classes, cx} = useStyles();
  const [selectedMethod, setSelectedMethod] = useState("");
  const selectMethodHandler = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      let target = e.target as HTMLElement;
      setSelectedMethod(target.id)
    }, [setSelectedMethod]
  );

  return (
    <section className={classes.main}>
      <div className={cx(classes.contents, classes.columnFlex)}>
        <PaymentTopSection />
        <section className={cx(classes.rowFlex, classes.bottomSection)}>
          <PaymentBottomLeftSection />
          <PaymentBottomRightSection />
        </section>
      </div>
    </section>
  )
}

export default Payment;
