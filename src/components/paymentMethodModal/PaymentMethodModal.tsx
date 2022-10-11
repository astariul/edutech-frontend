import { Button, Modal, Grid } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { Buyer, IOrder, IUserProfile, MyOrder } from '../../typings/db';
import OrderRepository from '../../repositories/Order';
import useStyles from "./style";


const { IMP } = window;
IMP.init(process.env.REACT_APP_IAMPORT_ID && 'imp15438774');

interface PaymentMethodModalProps {
  order: MyOrder;
  buyer: Buyer;
  paymentMethods: string[];
  opened: boolean;
  modalCloser: (close: boolean) => void;
  onSuccessHandler?: (order: IOrder) => void;
  onFailHandler?: () => void;
}

const PaymentMethodModal = (
  {
    order,
    buyer,
    paymentMethods,
    opened,
    modalCloser,
    onSuccessHandler = (order: IOrder) => {},
    onFailHandler = () => {},
  }: PaymentMethodModalProps
) => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const { classes } = useStyles();

  const payCallback = (response: any) => {
    if (response.success) {
      new OrderRepository()
      .completeOrderById(login?.token as string, order.orderId, response.imp_uid)
      .then(
        (myorder) => {
          // Note: onSuccessHandler가 결제 성공시 로직을 담당한다.
          onSuccessHandler(myorder)
        })
    } else {
      // Note: onFailHandler이 결제 실패 로직을 담당한다.
      onFailHandler()
    }
  };
  const requestPayment = (order: MyOrder, buyer: Buyer, method: string) => {
    let payMethod;
    switch (method) {
      case "신용카드":
        payMethod = "card"
        break;
      case "가상계좌":
        payMethod = ""
        break;
    }
    if (login) {
      IMP.request_pay({
        pg: "html5_inicis",
        pay_method: payMethod,
        merchant_uid: order.orderId,
        name: order.productName,
        amount: order.dcPrice,
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
      onClose={() => modalCloser(true)}
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
                  onClick={() => { modalCloser(true); requestPayment(order, buyer, method)}}
                  type="button"
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