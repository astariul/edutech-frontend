import React from "react";
import { Card, createStyles, Text } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import IamPortPaymentButton from './PaymentButton';
import { IUserProfile } from '../dto/UserProfile';

interface PaymentSectionProps {
  courseID: string;
  courseName: string;
  price: number;
}

const useStyles = createStyles((theme) => ({
  price: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px ${theme.spacing.lg}px 0`,
  },

  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  }
}));

const getMerchantUID = () => {
  // TODO
  // url [POST]: order/start
  return "ORD20180131-0000011"
}

const PaymentSection = (props: PaymentSectionProps) => {

    const { classes } = useStyles()
    const merchantUID = getMerchantUID()
    const [login] = useLocalStorage<IUserProfile | null>({key: 'login', defaultValue: null});

    return (
      <>
        <Card withBorder p="xl" shadow="sm" radius="md">
          <Text weight={700} size="xl" className={classes.price}>{props.price.toLocaleString("en-US")}원</Text>
          <IamPortPaymentButton
            courseName={props.courseName}
            price={props.price}
            merchantUID={merchantUID}
            name={login? login.name: ''}
            email={login? login.email : ''}
            tel={"010-6490-4878"} // TODO 결제 사용자 전화번호 입력받도록
          />
        </Card>
      </>
    );
}

export default PaymentSection;
