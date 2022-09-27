import { Button, Card, Container, TextInput, Title, Text } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React from "react";
import { Buyer } from "../../typings/db";
import useStyles from "./style";

interface BuyerInfoModifiableProps {
  buyer: Buyer;
  saveValues: (name: string, email: string, tel: string) => void;
}

const BuyerInfoModifiable = ({buyer, saveValues}: BuyerInfoModifiableProps) => {
  const {classes} = useStyles();
  const form = useForm({
    initialValues: {
      name: buyer.name,
      email: buyer.email,
      tel: buyer.tel,
    },

    validationRules: {
      name: (value) => value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      tel: (value) => true,
    },

    errorMessages: {
      email: "이메일 형식이 올바르지 않습니다.",
      tel: "전화번화 형식이 올바르지 않습니다.",
    },
  });

  return (
    <Card withBorder p={20} shadow="sm" radius="md">
      <form onSubmit={form.onSubmit(() => saveValues(form.values.name, form.values.email, form.values.tel))}>
        <Container className={classes.buyerInfoHeader}>
          <Title order={6}>구매자정보</Title>
          <Button variant="subtle" compact type="submit">저장하기</Button>
        </Container>
        <div className={classes.buyerInfo}>
          <div style={{display: "flex"}}>
            <Text className={classes.buyerInfoText}>이름</Text>
            <TextInput
              placeholder={buyer.name}
              {...form.getInputProps("name")}
            />
          </div>
          <div style={{display: "flex"}}>
            <Text className={classes.buyerInfoText}>이메일</Text>
            <TextInput
             placeholder={buyer.email}
             {...form.getInputProps("email")}
            />
          </div>
          <div style={{display: "flex"}}>
            <Text className={classes.buyerInfoText}>휴대폰번호</Text>
            <TextInput
             placeholder={buyer.tel}
             {...form.getInputProps("tel")}
            />
          </div>
        </div>
      </form>
    </Card>
  )
}

export default BuyerInfoModifiable;
