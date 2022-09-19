import React, { useEffect, useRef } from "react";
import { Button, Modal, Grid } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { Buyer, IUserProfile, MyOrder } from '../../typings/db';
import OrderRepository from '../../repositories/Order';
import useStyles from "./style";


const { IMP } = window;
IMP.init(process.env.REACT_APP_IAMPORT_ID && 'imp15438774');

interface PaymentMethodModalProps {
  order: MyOrder;
  buyer: Buyer;
  paymentMethods: JSX.Element[];
  opened: boolean;
  handleClose: () => void;
}

const PaymentMethodModal = (
  {
    order,
    buyer,
    paymentMethods,
    opened,
    handleClose,
  }: PaymentMethodModalProps
) => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const { classes } = useStyles();
  const merchantUID = useRef("");

  useEffect(
    () => {
      new OrderRepository()
      .start(login?.token as string, order.orderId)
      .then(({id}) => {merchantUID.current = id})
    }, [login, order.orderId]
  )

  const payCallback = (response: any) => {
    if (response.success) {
      new OrderRepository()
      .completeOrderById(login?.token as string, merchantUID.current, response.imp_uid)
      .then(
        (myorder) => {
          if (myorder.isPaid) {
            alert(
              `결제 완료되었습니다.
                결제완료금액: ${myorder.amountPaid}원
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
        pay_method: "card",
        merchant_uid: merchantUID.current,
        name: "",
        amount: order.orgPrice,
        buyer_email: buyer.email,
        buyer_name: buyer.name,
        buyer_tel: buyer.tel,
      }, payCallback)
    } else {
      // TODO: 디자인된 Modal 적용
      alert("결제를 진행하려면 로그인이 필요합니다.")
    }
  }

  return (
    <Modal
      centered
      opened={opened}
      onClose={() => handleClose()}
      title="결제수단을 선택해주세요"
    >
      <Grid className={classes.modal}>
        {
          paymentMethods.map(
            (method, index) => { 
              return (
                <Button
                  key={index}
                  className={classes.button}
                  variant="outline"
                  onClick={requestPayment}
                >
                  {method}
                </Button>
              )
            }
          )
        }
      </Grid>
    </Modal>
  )
}

export default PaymentMethodModal;