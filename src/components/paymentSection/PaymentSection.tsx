import { useCallback } from "react";
import { Button, Card, Text } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { ICourse, IUserProfile } from "../../typings/db";
import useStyles from "./style";
import OrderRepository from '../../repositories/Order';


interface PaymentSectionProps {
  onClickHandler: () => void;
}

const PaymentSection = ({onClickHandler} : PaymentSectionProps) => {
  const { classes } = useStyles();
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [coursesInCart,] = useLocalStorage<ICourse[] | []>({ key: "coursesInCart", defaultValue: [] });
  const sumPrice = useCallback(
    (courses: ICourse[]) => {
      let ret = 0;
      courses.forEach(
        course => {
          ret += course.orgPrice
        }
      )
      return ret;
    }, []
  )

  return (
    <Card withBorder p="xl" shadow="sm" radius="md">
      <Text weight={700} size="xl" className={classes.price}>
        {sumPrice(coursesInCart) === 0 ? "무료" : sumPrice(coursesInCart).toString() + "원"}
        
      </Text>
      <Button
        color="blue"
        variant="light"
        fullWidth mt="md"
        radius="md"
        onClick={onClickHandler}
      >
       {sumPrice(coursesInCart) === 0 ? "수강하기" : "결제하기"}
      </Button>
    </Card>
  );
}

export default PaymentSection;
