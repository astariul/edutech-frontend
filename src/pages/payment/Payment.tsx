import { useCallback, useEffect, useRef, useState } from "react"
import { Center, Space } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { useLocation } from "react-router-dom";
import { ICourse, IUserProfile } from "../../typings/db";
import AuthenticationForm from "../../components/AuthentificationForm";
import PaymentSection from "../../components/paymentSection/PaymentSection";
import PaymentMethodModal from "../../components/paymentMethodModal/PaymentMethodModal";
import BuyerInfo from "../../components/buyerInfo/buyerInfo";
import useStyles from "./style";
import BuyerInfoModifiable from "../../components/buyerInfoModifiable/buyerInfoModifiable";
import PaymentCart from "../../components/paymentCart/paymentCart";
import OrderRepository from "../../repositories/Order";


const Payment = () => {

  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [coursesInCart] = useLocalStorage<ICourse[] | []>({ key: "coursesInCart", defaultValue: [] });
  const [formType, setFormType] = useState<"register" | "login">("login");
  const [opened, setOpened] = useState(false);
  const [modification, setModification] = useState(false);
  const [name, setName] = useState(login?.name as string);
  const [email, setEmail] = useState(login?.email as string)
  const [tel, setTel] = useState("010-0000-0000");
  const {classes} = useStyles();
  const location = useLocation();
  const course = location.state as ICourse;
  const merchantUID = useRef("");

  useEffect(
    () => {
      new OrderRepository()
      .start(login?.token as string, course.id)
      .then((id) => {
        merchantUID.current = id;
      })
    }, [login, course, merchantUID]
  )

  const paymentMethods = (
    ["신용카드", "가상계좌"].map(
      (method) => {
        return <span key={method}>{method}</span>
      }
    )
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
      new OrderRepository()
      .completeOrderById(login?.token as string, merchantUID.current, 0)
      .then(
        () => window.alert("수강신청 완료되었습니다. 강의실 페이지에서 수강현황을 확인해보세요")
      )
      .catch(
        (err) => {
          window.alert(`수강신청에 실패했습니다. 다시 시도해주세요. 에러코드: ${err.response.status}` )
        }
      )
    }, [login]
  )

  return (
    <>
    {
      (login) && (
        <PaymentMethodModal
          order={{
            orderId: merchantUID.current,
            orgPrice: course.orgPrice
          }}
          buyer={{
            name: login.name,
            email: login.email,
            tel: tel
          }}
          opened={opened}
          paymentMethods={paymentMethods}
          handleClose={() => setOpened(false)}
        />
      )
    }
    {
      (login) && (
        <section style={{"display": "block"}}>
          <div className={classes.layout}>
            <section className={classes.cart}>
              <PaymentCart courses={coursesInCart}/>
            </section>
            <aside className={classes.cartAside}>
              <section className={classes.sectionPayment}>
                <PaymentSection onClickHandler={course.orgPrice === 0 ? registerCourse : showPaymentMethodModal}/>
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
                    buyer={{name:name, email: email, tel: tel}}
                    onclickModificaion={() => setModification(true)}
                  />
                }
              </section>
            </aside>
          </div>
        </section>
      )
    }
    {
      (!login) && (
        <Center sx={{paddingTop: 100}}>
          <AuthenticationForm formType={formType} setFormType={setFormType} modalSetOpened={() => void(0)} />
        </Center>
      )
    }
    </>
  )
}

export default Payment;