import { useCallback, useEffect, useRef, useState } from "react"
import { Space } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { ICourse, IOrder, IUserProfile } from "../../typings/db";
import PaymentSection from "../../components/paymentSection/PaymentSection";
import PaymentMethodModal from "../../components/paymentMethodModal/PaymentMethodModal";
import BuyerInfo from "../../components/buyerInfo/buyerInfo";
import useStyles from "./style";
import BuyerInfoModifiable from "../../components/buyerInfoModifiable/buyerInfoModifiable";
import PaymentCart from "../../components/paymentCart/paymentCart";
import OrderRepository from "../../repositories/Order";
import AuthRepository from "../../repositories/Auth";


const Payment = () => {

  const [login,] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [coursesInCart] = useLocalStorage<ICourse[] | []>({ key: "coursesInCart", defaultValue: [] });
  const [opened, setOpened] = useState(false);
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
              setRegistered(false);
            }
            )
          }
          )
      setName(login?.name as string);
      setEmail(login?.email as string);
      setTel("010-0000-0000");
      return () => setRegistered(false);
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

  const showPaymentMethodModal = useCallback(
    () => setOpened(true), []
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
          () => window.alert("수강신청 완료되었습니다. 강의실 페이지에서 수강현황을 확인해보세요")
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
    (order: IOrder) => {
      if (order.isPaid) {
        window.alert(
          `결제 완료되었습니다.
            결제완료금액: ${order.amountPaid}원
          `
        )
      } else {
        window.alert(
         `주문하신 상품이 최종 결제되지 않았습니다.
          다시 한번 확인해주세요`
        )
      }

    }, []
  )

  const failPayment = useCallback(
    () => {
      window.alert(
        `결제가 실패하였습니다. 다시 시도해주세요`
      )
    }, []
  )

  return (
    <>
    {
      (login) && (
        <PaymentMethodModal
          order={{
            orderId: merchantUID.current,
            orgPrice: course.orgPrice,
            dcPrice: course.dcPrice,
            productName: course.title
          }}
          buyer={{
            name: login.name,
            email: login.email,
            tel: tel
          }}
          opened={opened}
          paymentMethods={["신용카드"]}
          modalCloser={(close: boolean) => setOpened(!close)}
          onSuccessHandler={successPayment}
          onFailHandler={failPayment}
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
                <PaymentSection onClickHandler={course.dcPrice === 0 ? registerCourse : showPaymentMethodModal}/>
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
