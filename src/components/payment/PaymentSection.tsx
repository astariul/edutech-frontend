import React from "react";
import { Button, Card, createStyles, Text } from '@mantine/core';


interface PaymentSectionProps {
  price: number;
  onClickHandler: () => void;
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

const PaymentSection = ({price, onClickHandler} : PaymentSectionProps) => {
  const { classes } = useStyles();

  return (
    <Card withBorder p="xl" shadow="sm" radius="md">
      <Text weight={700} size="xl" className={classes.price}>{price.toLocaleString("en-US")}원</Text>
      <Button
        color="blue"
        variant="light"
        fullWidth mt="md"
        radius="md"
        onClick={onClickHandler}
      >
       결제하기
      </Button>
    </Card>
  );
}

export default PaymentSection;
