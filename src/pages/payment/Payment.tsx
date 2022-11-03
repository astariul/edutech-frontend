
import useStyles from './style';
import Person from '../../components/person/Person';
import { Buyer, ICourse, IUserProfile, MyOrder } from '../../typings/db';
import { Button, Checkbox, Modal, ScrollArea, Text } from '@mantine/core';
import { useState, useCallback, MouseEvent, useRef, ReactNode} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';
import OrderRepository from '../../repositories/Order';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import CourseRepository from '../../repositories/Course';
import PaymentConfig from '../../config';
import MessageModal from '../../components/messageModal/MessageModal';

const { IMP } = window;
// IMP.init(process.env.REACT_APP_IAMPORT_ID);

interface PaymentSubjectSectionProps {
  course: ICourse;
}

interface PaymentMethodSectionProps {
  paymentMethod: string;
  selectMethodHandler: (e: MouseEvent<HTMLElement>) => void;
}

interface PaymentPaySectionProps {
  course: ICourse;
  agreementCheckHandler: () => void;
  paymentHandler?: () => void;
}

interface PaymentPaySectionMobileProps {
  agreementCheckHandler: () => void;
  paymentHandler: () => void;
}

interface PaymentSuccessMessageProps {
  title: string;
  orderId: string;
  paymentMethod: string;
  orderPrice: number;
}

const Tag = ({name, color, key}: {name: string, color: string, key: any}) => {
  const {classes} = useStyles();
  return (
    <div key={key} className={classes.tag} style={{backgroundColor: color}}>
      {name}
    </div>
  )
}

const PaymentSubjectSection = ({course}: PaymentSubjectSectionProps) => {
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
    <section className={cx( classes.columnFlex, classes.topSection, classes.desktop)}>
      <div className={cx(classes.pageTitle)}>
        <h2>결제하기</h2>
      </div>
      <div className={cx(classes.rowFlex, classes.product)}>
        <div className={cx(classes.checkerArea, classes.checker)}>
          <Checkbox radius={0}/>
        </div>
        <div className={cx(classes.image)}>
          <img src={require("../../static/image/payment/courseImage.png")} alt="courseImage" />
        </div>
        <div className={cx(classes.information, classes.columnFlex)}>
          <div className={cx(classes.tags, classes.rowFlex)}>
            {
              tags.map((tag, index) => <Tag key={index} name={tag.name} color={tag.color}/>)
            }
          </div>
          <div className={classes.courseTitle}>
            <h2>{course?.title as string}</h2>
          </div>
          <div className={cx(classes.instructor)}>
            <Person
              image={require("../../static/image/payment/avatar.png")}
              name={course?.instructor.name as string}
              description={course?.instructor.description as string}
              size={50.83}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const PaymentSubjectSectionMobile = ({course}: PaymentSubjectSectionProps) => {
  const {classes, cx} = useStyles();
  const navigate = useNavigate();
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
    <section className={cx( classes.columnFlex, classes.topSection, classes.mobile)}>
      <div className={cx(classes.mobileTitle)}>
        <div className={classes.pageTitle}>
          <h2>결제하기</h2>
        </div>
        <div className={classes.closeButton} onClick={() => navigate("/")}>
          <img
            onClick={() => navigate("/")}
            src={require("../../static/image/payment/X.png")}
            alt="close"
          />
        </div>
      </div>
      <div className={classes.pageTitle}><h2>주문 상품</h2></div>
      <div className={cx(classes.rowFlex, classes.product)}>
        <div className={cx(classes.information, classes.columnFlex)}>
          <div className={cx(classes.tags, classes.rowFlex)}>
            {
              tags.map((tag, index) => <Tag key={index} name={tag.name} color={tag.color}/>)
            }
          </div>
          <div className={classes.courseTitle}>
            <h2>{course?.title as string}</h2>
          </div>
          <div className={cx(classes.instructor)}>
            <Person
              image={require("../../static/image/payment/avatar.png")}
              name={course?.instructor.name as string}
              description={course?.instructor.description as string}
              size={36.64}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const PaymentMethodSection = ({paymentMethod, selectMethodHandler}: PaymentMethodSectionProps) => {
  const {classes, cx} = useStyles();
  return (
    <section className={cx(classes.paymentMethodSection, classes.columnFlex)}>
      <div className={cx(classes.columnFlex, "top")}>
        <div className={cx(classes.sectionTitle, classes.rowFlex)}>
          <h2>결제 방식</h2>
          {/* <div className={classes.desktop}>무이자할부안내</div> */}
        </div>
        <div className={cx(classes.methodBoxArea, classes.rowFlex)}>
          <div
            onClick={selectMethodHandler}
            className={cx(classes.methodBox, {[classes.activeMethod]: paymentMethod === "card"})}
            id="card"
          >
            신용카드
          </div>
          <div
            onClick={selectMethodHandler}
            className={cx(classes.methodBox, {[classes.activeMethod]: paymentMethod === "trans"})}
            id="trans"
            >
            실시간계좌이체
          </div>
          <div
            onClick={selectMethodHandler}
            className={cx(classes.methodBox, {[classes.activeMethod]: paymentMethod === "vbank"})}
            id="vbank"
            >
            가상계좌
          </div>
          <div
            onClick={selectMethodHandler}
            className={cx(classes.methodBox, {[classes.activeMethod]: paymentMethod === "tosspay"})}
            id="tosspay"
          >
            <img id="tosspay" onClick={selectMethodHandler} src={require("../../static/image/payment/tosspay.png")} alt="tosspayment" />
          </div>
        </div>
      </div>
      <div className={cx(classes.columnFlex, "bottom", classes.desktop)}>
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
      {/* <div className={cx(classes.columnFlex, "bottom", classes.mobile)}>
        <div className={cx(classes.columnFlex, classes.aggrements)}>
          <div className={cx(classes.rowFlex, classes.notice)}>
            <div>유의사항</div>
            <img src={require("../../static/image/payment/arrowDown.png")} alt="arrowDown" />
          </div>
          <div className={cx(classes.rowFlex, classes.notice)}>
            <div>개인정보 수집이용 및 제공 동의(필수)</div>
            <img src={require("../../static/image/payment/arrowDown.png")} alt="arrowDown" />
          </div>
          <div className={cx(classes.rowFlex, classes.thin, classes.agreement)}>
            <div className={classes.checker}>
              <Checkbox radius={0}/>
            </div>
            <div>위 내용을 확인하였으며 결제에 동의합니다.</div>
          </div>
        </div>
        <Button className={classes.paymentButton} radius={0}>결제하기</Button>
      </div> */}
    </section>
  )
}

const PaymentPaySectionMobile = ({
  agreementCheckHandler, paymentHandler
}: PaymentPaySectionMobileProps) => {

  const { classes, cx } = useStyles();

  return (
    <section className={cx(classes.paymentPaySectionMobile, classes.mobile)}>
      <div className={cx(classes.columnFlex, "bottom")}>
        <div className={cx(classes.columnFlex, classes.aggrements)}>
          <div className={cx(classes.rowFlex, classes.notice)}>
            <div>유의사항</div>
            <img src={require("../../static/image/payment/arrowDown.png")} alt="arrowDown" />
          </div>
          <div className={cx(classes.rowFlex, classes.notice)}>
            <div>개인정보 수집이용 및 제공 동의(필수)</div>
            <img src={require("../../static/image/payment/arrowDown.png")} alt="arrowDown" />
          </div>
          <div className={cx(classes.rowFlex, classes.thin, classes.agreement)}>
            <div className={classes.checker}>
              <Checkbox radius={0} onChange={agreementCheckHandler}/>
            </div>
            <div>위 내용을 확인하였으며 결제에 동의합니다.</div>
          </div>
        </div>
      </div>
      <Button
        className={classes.paymentButton}
        radius={0}
        onClick={paymentHandler}
      >결제하기</Button>
    </section>
  )

}
const PaymentPaySection = ({course, agreementCheckHandler, paymentHandler}: PaymentPaySectionProps) => {
  const {classes, cx} = useStyles();
  const [openAgreementModal, setOpenAgreementModal] = useState(false);
  const [openPaymentResultModal, setPaymentResultModal] = useState(false);

  return (
    <>
    {
      <Modal className={cx(classes.modal, classes.desktop)} opened={openAgreementModal} centered onClose={() => setOpenAgreementModal(false)}>
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
      <Modal className={cx(classes.modal, classes.desktop)} opened={openPaymentResultModal} centered onClose={() => setPaymentResultModal(false)}>
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
      <section className={cx(classes.columnFlex, classes.bottomRightSection)}>
        <div className={cx(classes.sectionTitle, classes.desktop)}>
          <h2>결제 금액</h2>
        </div>
        <div className={cx(classes.sectionTitle, classes.mobile)}>
          <h2>최종 결제 금액</h2>
        </div>
        <div className={cx(classes.columnFlex, classes.priceTable)}>
          <div className={cx(classes.columnFlex, classes.tableInner)}>
            <div className={cx(classes.rowFlex, classes.row, classes.bold)}>
              <div>상품금액</div>
              <div>{course?.orgPrice}원</div>
            </div>
            <div className={cx(classes.rowFlex, classes.row, classes.bold)}>
              <div>할인금액</div>
              <div>-{course?.orgPrice-course?.dcPrice}원</div>
            </div>
            <div className={cx(classes.rowFlex, classes.row, classes.thin)}>
              <div>상품할인</div>
              <div>{course?.orgPrice-(course?.orgPrice-course?.dcPrice)}</div>
            </div>
            {/* <div className={cx(classes.rowFlex, classes.row, classes.thin)}>
              <div>쿠폰적용</div>
              <div>450,000원</div>
            </div> */}
          </div>
          <div className={cx(classes.rowFlex, classes.row, classes.total)}>
            <div>총 결제 금액</div>
            <div>{course?.dcPrice}원</div>
          </div>
        </div>
        <div className={cx(classes.columnFlex, classes.buttonArea, classes.desktop)}>
          <div className={cx(classes.columnFlex, classes.agreementArea)}>
            <div className={cx(classes.rowFlex, classes.thin, classes.agreement)}>
              <div className={classes.checker}>
                <Checkbox radius={0}/>
              </div>
              <div>아래 내용을 확인하였으며 결제에 동의합니다.</div>
            </div>
            <div className={cx(classes.rowFlex, classes.thin, classes.agreement)}>
              <div className={classes.checker}>
                <Checkbox radius={0} onChange={agreementCheckHandler}/>
              </div>
              <div>개인정보 수집이용 및 제공 동의(필수)</div>
              <div className={cx(classes.thin, classes.show)} onClick={() => setOpenAgreementModal(true)}>보기</div>
            </div>
          </div>
          <Button
            className={classes.paymentButton}
            radius={0}
            onClick={paymentHandler}
            >
            결제하기
          </Button>
        </div>
      </section>
    }
  </>
  )
}

const PaymentSuccessMessage = ({title, orderId, paymentMethod, orderPrice}: PaymentSuccessMessageProps) => {
  const {classes, cx} = useStyles();
  const navigate = useNavigate();
  return (
    <div className={cx(classes.columnFlex, classes.paymentResult)}>
      <div className="title"><h2>결제완료</h2></div>
      <div className={cx(classes.columnFlex, classes.paymentResultTable)}>
        <div className={cx(classes.rowFlex, "row")}>
          <div className="name">주문상품</div>
          <div className="value">{title}</div>
        </div>
        <div className={cx(classes.rowFlex, "row")}>
          <div className="name">주문번호</div>
          <div className="value">{orderId}</div>
        </div>
        <div className={cx(classes.rowFlex, "row")}>
          <div className="name">결제정보</div>
          <div className="value">{paymentMethod} <br />승인일시: {new Date().toISOString()}</div>
        </div>
        <div className={cx(classes.rowFlex, "row")}>
          <div className="name">결제금액</div>
          <div className="value">{orderPrice}원</div>
        </div>
      </div>
      <Button onClick={()=>navigate("/myclass")} radius={0}>내 강의실 바로가기</Button>
    </div>
  )
}

const Payment = () => {
  IMP.init(process.env.REACT_APP_IAMPORT_ID)

  const {classes, cx} = useStyles();
  const [login,] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [aggrementCheckMobile, setAggrementCheckMobile] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const merchantUID = useRef("");
  const [, setRegistered] = useState(false);
  const [messageModalOpened, setMessageModalOpened] = useState<boolean>(false);
  const [message, setMessage] = useState<ReactNode | string>();
  const [course, setCourse] = useState<ICourse>();
  const location = useLocation();
  const courseId = location.state as string;
  const navigate = useNavigate();

  useEffect(
    () => {
      new CourseRepository()
      .getCourseById(login?.token as string, courseId)
      .then(
        ({course}) => setCourse(course)
      )
    }, [login, courseId, setCourse]
  )
  useEffect(
    () => {
      if (!login) {
        window.alert("결제를 진행하기 위해서는 로그인해야 합니다.");
        navigate("/login/method");
        return
      }
      new OrderRepository()
      .start(login?.token as string, courseId)
      .then((id) => {
        merchantUID.current = id;
      })
      .catch(
        ({response}) => {
          response.status === 400
          ? setMessage(
            <div>
              <Text style={{fontFamily: "NotoSansKR"}}>
                해당 강의에 대한 결제가 이미 완료되었습니다.
                <br />내강의실 페이지에서 강의를 확인해보세요.
                <br />
                <br />세부 내용: {response.data.message}
              </Text>
              <br />
              <div style={{display: "flex", justifyContent: "center"}}>
                <Button radius={0} onClick={() => navigate("/myclass")}>
                  내강의실 바로가기
                </Button>
              </div>
            </div>
          )
          : 
          setMessage(`
            결제를 진행할 수 없습니다.
            세부내용: ${response.status} / ${response.data.message}
          `);
          setMessageModalOpened(true);
        }
      )
    }, [login, courseId, merchantUID, navigate]
  )

  const selectMethodHandler = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      let target = e.target as HTMLElement;
      setSelectedMethod(target.id)
    }, [setSelectedMethod]
    );
    
  const aggrementCheckMobileHandler = useCallback(
      () => setAggrementCheckMobile(!aggrementCheckMobile),
      [setAggrementCheckMobile, aggrementCheckMobile]
    );
      
  const successPayment = useCallback(
    (result: AxiosResponse<any, any>) => {
      switch(result.status) {
        case 200:
          setMessage(
            <Text style={{fontFamily: "NotoSansKR"}}>
              가상계좌가 발급 완료되었습니다.
            </Text>
          );
          break;
        case 201:
          // setMessage("결제가 완료되었습니다. 내 강의실 페이지에서 수강현황을 확인해보세요");
          setMessage(
            <PaymentSuccessMessage
              title={course?.title as string}
              orderId={merchantUID.current}
              paymentMethod={selectedMethod}
              orderPrice={course?.dcPrice as number}
            />
          )
          setRegistered(true);
          break;
        case 400:
          
          setMessage(
            <Text style={{fontFamily: "NotoSansKR"}}>
              비정상적인 결제 요청으로 결제 프로세스가 종료되었습니다.
            </Text>
          );
          setRegistered(false);
          break;
      } 
      setMessageModalOpened(true);
    }, [setMessage, setMessageModalOpened, selectedMethod, course]
  )
  
  const failPayment = useCallback(
    (response: any) => {
      setMessage(
        <Text style={{fontFamily: "NotoSansKR"}}>
          결제 실패하였습니다.
          <br />
          세부 내용: {response.error_msg}
        </Text>
      );
      setMessageModalOpened(true);
    }, [setMessage, setMessageModalOpened]
  )

  const payCallback = useCallback(
    (response: any) => {
      if (response.success) {
        new OrderRepository()
        .completeOrderById(login?.token as string, merchantUID.current, response.imp_uid)
        .then(
          (result) => {
            successPayment(result);
          }
        )
      } else {
        failPayment(response);
      }
    }, [failPayment, successPayment, login, merchantUID]
  )

  const requestPayment = useCallback(
    (
      order: MyOrder,
      buyer: Buyer,
      pgCode: string, //pg사 이름
      pgMID: string, //상점ID
      payMethodCode: string, //결제방식
    ) => {
      const digital = true;
      IMP.request_pay({
        pg: `${pgCode}.${pgMID}`,
        pay_method: payMethodCode,
        merchant_uid: order.orderId,
        name: order.productName,
        amount: order.dcPrice,
        buyer_email: buyer.email,
        buyer_name: buyer.name,
        buyer_tel: buyer.tel,
        currency: "KRW",
        digital: digital
      }, payCallback)
      
    }, [payCallback]
  );

  const paymentHandler = useCallback(
    (paymentMethod: string, aggrementCheck: boolean, paymentCofing: PaymentConfig) => {
      if (paymentMethod === "") {
        setMessage("결제 방식을 선택해주세요.");
        setMessageModalOpened(true);
        return;
      } 
      if (!aggrementCheck) {
        setMessage("동의하기를 클릭해주세요");
        setMessageModalOpened(true);
        return;
      }
      const pgCode = paymentCofing
                      .getAvailablePGCodeByMethod(selectedMethod) as string;
      const MID = paymentCofing
                  .getPGCodeMIDMap(paymentCofing.MODE).get(pgCode) as string;
      const order = {
        orderId: merchantUID.current,
        orgPrice: course?.orgPrice as number,
        dcPrice: course?.dcPrice as number,
        productName: course?.title as string
      };
      const buyer = {
        name: login?.name as string,
        email: login?.email as string,
        tel: "010-0000-0000"
      };
      
       requestPayment(order, buyer, pgCode, MID, paymentMethod)
    }, [merchantUID, course, login, requestPayment, selectedMethod]
  )
  return (
    <>
    {
      (login) ? (   
        <MessageModal
          size={375}
          open={messageModalOpened}
          message={message}
          onCloseModal={(open) => setMessageModalOpened(!open)}
        />
      ): <></>
    }
    {
      <section className={classes.main}>
        <div className={cx(classes.contents, classes.columnFlex)}>
          <PaymentSubjectSection course={course as ICourse}/>
          <PaymentSubjectSectionMobile course={course as ICourse}/>
          <section className={cx(classes.rowFlex, classes.bottomSection, classes.desktop)}>
            <PaymentMethodSection
              paymentMethod={selectedMethod}
              selectMethodHandler={selectMethodHandler}
              />
            <PaymentPaySection
              course={course as ICourse}
              agreementCheckHandler={aggrementCheckMobileHandler}
              paymentHandler={() => {paymentHandler(selectedMethod, aggrementCheckMobile, new PaymentConfig())}}
              />
          </section>
          <section className={cx(classes.rowFlex, classes.bottomSection, classes.mobile)}>
            <PaymentPaySection
              course={course as ICourse}
              agreementCheckHandler={aggrementCheckMobileHandler}
              />
            <PaymentMethodSection paymentMethod={selectedMethod} selectMethodHandler={selectMethodHandler}/>
            <PaymentPaySectionMobile
              agreementCheckHandler={aggrementCheckMobileHandler}
              paymentHandler={() => {paymentHandler(selectedMethod, aggrementCheckMobile, new PaymentConfig())}}
            />
          </section>
        </div>
      </section>
    }
    </>
  )
}

export default Payment;
