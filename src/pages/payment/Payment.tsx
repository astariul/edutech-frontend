import { useCallback, useEffect, useRef, useState } from "react"
import { Space } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { Buyer, ICourse, IUserProfile, MyOrder } from "../../typings/db";
import PaymentSection from "../../components/paymentSection/PaymentSection";
import PaymentMethodModal from "../../components/paymentMethodModal/PaymentMethodModal";
import BuyerInfo from "../../components/buyerInfo/buyerInfo";
import useStyles from "./style";
import BuyerInfoModifiable from "../../components/buyerInfoModifiable/buyerInfoModifiable";
import PaymentCart from "../../components/paymentCart/paymentCart";
import OrderRepository from "../../repositories/Order";
import AuthRepository from "../../repositories/Auth";
import PaymentPGModal from "../../components/paymentPGModal/PaymentPGModal";
import PaymentConfig from "../../config";
import { AxiosResponse } from "axios";
import MessageModal from '../../components/messageModal/MessageModal';

const { IMP } = window;
IMP.init(process.env.REACT_APP_IAMPORT_ID);

const Payment = () => {

  const [login,] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [coursesInCart] = useLocalStorage<ICourse[] | []>({ key: "coursesInCart", defaultValue: [] });
  const [pgModalOpened, setPGModalOpened] = useState(false);
  const [payMethodModalOpened, setPayMethodModalOpened] = useState(false);
  const [modification, setModification] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const {classes} = useStyles();
  const location = useLocation();
  const course = location.state as ICourse;
  const merchantUID = useRef("");
  const [registered, setRegistered] = useState(false);
  const naviagate = useNavigate();
  const config = new PaymentConfig()
  const [pgCode, setPGCode] = useState("");
  const [messageModalOpened, setMessageModalOpened] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  useEffect(
    () => {
      if (!login) {
        window.alert("결제를 진행하기 위해서는 로그인해야 합니다.");
        naviagate("/login/method");
        return
      }
      new AuthRepository()
      .me(login?.token as string)
      .then(
        ({data}) => {
          data.myCourses.forEach(
            (each) => {
              if (each.courseId === course?.id) {
                setRegistered(true);
                return;
              }
              else{
                setRegistered(false);
              }
            }
            )
          }
          )
      setName(login?.name as string);
      setEmail(login?.email as string);
      setTel("010-0000-0000");
      return () => { setRegistered(false); setPGCode(""); };
    }, [login, course, setRegistered, naviagate]
  )

  useEffect(
    () => {
      if (!login) {
        window.alert("결제를 진행하기 위해서는 로그인해야 합니다.");
        naviagate("/login/method");
        return
      }
      new OrderRepository()
      .start(login?.token as string, course.id)
      .then((id) => {
        merchantUID.current = id;
      })
    }, [login, course, merchantUID, naviagate]
  )

  const showPGModal = useCallback(
    () => {
      if (!registered) {
        setPGModalOpened(true);
      } else {
        setMessage("결제완료된 건입니다. 내강의실 페이지에서 수강현황을 확인해보세요");
        setMessageModalOpened(true);
      }
    }, [registered, setMessage, setPGModalOpened, setMessageModalOpened]
  )

  const showPayMethodModal = useCallback(
    () => setPayMethodModalOpened(true), []
  )

  const saveModifiedValues = useCallback(
    (name: string, email: string, tel: string) => {
      setName(name);
      setEmail(email);
      setTel(tel);
      setModification(false);
    }, []
  )

  const registerCourse = useCallback(
    () => {
      if (registered) {
        window.alert("수강중인 강의입니다. 강의실 페이지에서 수강현황을 확인해보세요")
      }
      else {
        new OrderRepository()
        .completeOrderById(login?.token as string, merchantUID.current, 0)
        .then(
          () => window.alert("수강신청 완료되었습니다. 내강의실 페이지에서 수강현황을 확인해보세요")
        )
        .catch(
          (err) => {  
            new OrderRepository()
            .deleteOrderById(login?.token as string, merchantUID.current)
            .then(
              () => window.alert(`수강신청에 실패했습니다. 다시 시도해주세요. 에러코드: ${err.response.status}` )
            )
          }
        )
      }
    }, [login, registered]
  )
  
  const successPayment = useCallback(
    (result: AxiosResponse<any, any>) => {
      switch(result.status) {
        case 200:
          setMessage("가상계좌가 성공적으로 발급되었습니다.");
          break;
        case 201:
          setMessage("결제 완료되었습니다. 내 강의실 페이지에서 수강현황을 확인해보세요");
          setRegistered(true);
          break;
        case 400:
          setMessage("비정상적인 결제 요청으로 결제 프로세스가 종료되었습니다.");
          setRegistered(false);
          break;
      }
      setMessageModalOpened(true);
    }, [setMessage, setMessageModalOpened]
  )

  const failPayment = useCallback(
    (response: any) => {
      setMessage(
        `결제 실패하였습니다. |
         세부 내용: ${response.error_msg}`
      );
      setMessageModalOpened(true);
    }, [setMessage, setMessageModalOpened]
  )

  const payCallback = (response: any) => {
    if (response.success) {
      new OrderRepository()
      .completeOrderById(login?.token as string, merchantUID.current, response.imp_uid)
      .then(
        (result) => {
          successPayment(result);
        })
    } else {
      failPayment(response);
    }
  };

  const requestPayment = (
    order: MyOrder,
    buyer: Buyer,
    pgCode: string, //pg사 이름
    pgMID: string, //상점ID
    payMethodCode: string, //결제방식
  ) => {
    const digital = true;
    if (login) {
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
    } else {
      // TODO: 디자인된 Modal 적용
      alert("결제를 진행하려면 로그인해야 합니다.")
    }
  }

  return (
    <>
    {
      (login) && (   
        <MessageModal
          open={messageModalOpened}
          mainMessage={message.split("|")[0]}
          detailMessage={message.split("|")[1]}
          onCloseModal={(open) => setMessageModalOpened(!open)}
        />
      )
    }
    {
      // 결제하기 클릭시 PG사 선택모달이 먼저 열림
      (login) && (
        <PaymentPGModal
          pgNameCodeMap={config.getPGCodeMap()}
          opened={pgModalOpened}
          modalCloser={(close: boolean) => setPGModalOpened(!close)}
          onSelectItem={(code: string) => {setPGCode(code); showPayMethodModal();}}
        />
      )
    }
    {
      // PG사를 선택하면 결제방식을 선택하는 모달창 열림
      (login && pgCode !== "") && (
        <PaymentMethodModal
          paymentMethods={config.getPayMethodsByPG(pgCode)}
          paymentMethodCodeMap={config.getPaymentMethodCodeMap()}
          opened={payMethodModalOpened}
          modalCloser={(close: boolean) => setPayMethodModalOpened(!close)}
          onSelectItem={(payMethodCode: string) => { 
            requestPayment(
              {
                orderId: merchantUID.current,
                orgPrice: course.orgPrice,
                dcPrice: course.dcPrice,
                productName: course.title
              },
              {
                name: login.name,
                email: login.email,
                tel: tel
              },
              pgCode,
              config.getPGCodeMIDMap(config.MODE).get(pgCode) as string,
              payMethodCode
            )
          }}
        />
      )
    }
    {
      (login) && (
        <div className={classes.main}>
          <div className={classes.layout}>
            <section className={classes.cart}>
              <PaymentCart courses={coursesInCart}/>
            </section>
            <aside className={classes.cartAside}>
              <section className={classes.sectionPayment}>
                <PaymentSection onClickHandler={course.dcPrice === 0 ? registerCourse : showPGModal}/>
              </section>
              <section className={classes.sectionBuyerInfo}>
                <Space h={10}/>
                {
                  modification ?
                  <BuyerInfoModifiable
                    buyer={{name:name, email: email, tel: tel}}
                    saveValues={saveModifiedValues}
                  />
                  :
                  <BuyerInfo
                    buyer={{
                      name: name,
                      email: email,
                      tel: tel
                    }}
                    onclickModificaion={() => setModification(true)}
                  />
                }
              </section>
            </aside>
          </div>
        </div>
      )
    }
    </>
  )
}

export default Payment;
