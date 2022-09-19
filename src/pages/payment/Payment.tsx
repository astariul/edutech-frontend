import React, { useCallback, useState } from "react"
import { Card, Center, Divider, Grid, Space, Title, Container } from '@mantine/core';
import useStyles from "./style";
import { useLocalStorage } from "@mantine/hooks";
import { ICourse, IUserProfile } from "../../typings/db";
import AuthenticationForm from "../../components/AuthentificationForm";
import PaymentSection from "../../components/payment/PaymentSection";
import { useLocation } from "react-router-dom";
import { Button } from '@mantine/core';
import PaymentMethodModal from "../../components/paymentMethodModal/PaymentMethodModal";

const Payment = () => {

  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [formType, setFormType] = useState<"register" | "login">("login");
  const [opened, setOpened] = useState(false);
  const [tel] = useState("010-xxxx-xxxx");
  const {classes} = useStyles();
  const location = useLocation();
  const course = location.state as ICourse;

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

  return (
    <>
    {
      (login) && (
        <PaymentMethodModal
          order={{
            orderId: course.id,
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
        <Grid className={classes.layout}>
          <Grid.Col className={classes.cart}>
            장바구니 영역
          </Grid.Col>
          <Grid.Col className={classes.payment}>
            <PaymentSection price={course.orgPrice} onClickHandler={showPaymentMethodModal}/>
            <Space h={10}/>
            <Card className={classes.buyerInfoSection} withBorder p={20} shadow="sm" radius="md">
              <Container className={classes.buyerInfoHeader}>
                <Title order={6}>구매자정보</Title>
                <Button variant="subtle" compact>수정하기</Button>
              </Container>
              <Divider my="sm" variant="dotted" />
              <dl className={classes.buyerInfo}>
                <div style={{display: "flex"}}>
                  <dt className={classes.buyerInfoDt}>이름</dt>
                  <dd className={classes.buyerInfoDD}>{login.name}</dd>
                </div>
                <div style={{display: "flex"}}>
                  <dt className={classes.buyerInfoDt}>이메일</dt>
                  <dd className={classes.buyerInfoDD}>{login.email}</dd>
                </div>
                <div style={{display: "flex"}}>
                  <dt className={classes.buyerInfoDt}>휴대폰번호</dt>
                  <dd className={classes.buyerInfoDD}>{tel}</dd>
                </div>
              </dl>
            </Card>
          </Grid.Col>
        </Grid>
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