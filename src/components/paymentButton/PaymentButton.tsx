import React from "react";
import { Button } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { IUserProfile } from '../../typings/db';
import OrderRepository from '../../repositories/Order';


const { IMP } = window;
IMP.init(process.env.REACT_APP_IAMPORT_ID && 'imp15438774');

interface PaymentButtonProps {
  courseName: string;
  email: string;
  name: string;
  tel: string;
  price: number;
  merchantUID: string;
  buttonClickHandler?: () => {}
  payMethod?: string,
}

const IamPortPaymentButton = (
  {
    courseName,
    email,
    name,
    tel, 
    price, 
    merchantUID, 
    payMethod,
    buttonClickHandler
  }: PaymentButtonProps
) => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });

  const payCallback = (response: any) => {
    if (response.success) {
      new OrderRepository()
      .completeOrderById(login?.token as string, merchantUID, response.imp_uid)
      .then(
        (order) => {
          if (order.isPaid) {
            alert(
              `결제 완료되었습니다.
                결제완료상품: ${courseName}
                결제완료금액: ${order.amountPaid}원
              `
            )
          }
        }
      )
    } else {
      // TODO: 결제실패 로직 구현
      alert("결제 실패하였습니다.")
    }
  };
  const requestPayment = () => {
    if (login) {
      IMP.request_pay({
        pg: "html5_inicis",
        pay_method: payMethod? payMethod : "card",
        merchant_uid: merchantUID,
        name: courseName,
        amount: price,
        buyer_email: email,
        buyer_name: name,
        buyer_tel: tel,
      }, payCallback)
    } else {
      // TODO: 디자인된 Modal 적용
      alert("결제를 진행하려면 로그인이 필요합니다.")
    }
  }

  return (
    <Button
      color="blue"
      variant="light"
      fullWidth mt="md"
      radius="md"
      onClick={buttonClickHandler}
    >
      {price === 0 ? "수강하기" : "결제하기"}
    </Button>
  );
}

export default IamPortPaymentButton;
