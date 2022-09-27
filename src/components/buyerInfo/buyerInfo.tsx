import React from "react";
import { Card, Divider, Title, Container, Button } from '@mantine/core';
import useStyles from "./style";
import { Buyer } from "../../typings/db";


interface BuyerInfoProps {
  buyer: Buyer;
  onclickModificaion: () => void;
}

const BuyerInfo = ({buyer, onclickModificaion}: BuyerInfoProps) => {
  const {classes} = useStyles();

  return (
    <Card className={classes.buyerInfoSection} withBorder p={20} shadow="sm" radius="md">
      <Container className={classes.buyerInfoHeader}>
        <Title order={6}>구매자정보</Title>
        <Button variant="subtle" compact onClick={onclickModificaion}>수정하기</Button>
      </Container>
      <Divider my="sm" variant="dotted" />
      <dl className={classes.buyerInfo}>
        <div style={{display: "flex"}}>
          <dt className={classes.buyerInfoDt}>이름</dt>
          <dd className={classes.buyerInfoDD}>{buyer.name}</dd>
        </div>
        <div style={{display: "flex"}}>
          <dt className={classes.buyerInfoDt}>이메일</dt>
          <dd className={classes.buyerInfoDD}>{buyer.email}</dd>
        </div>
        <div style={{display: "flex"}}>
          <dt className={classes.buyerInfoDt}>휴대폰번호</dt>
          <dd className={classes.buyerInfoDD}>{buyer.tel}</dd>
        </div>
      </dl>
    </Card>
  )
}

export default BuyerInfo;
