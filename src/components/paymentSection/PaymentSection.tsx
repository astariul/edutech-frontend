import { useCallback } from "react";
import { Button, Card } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { ICourse } from "../../typings/db";
import useStyles from "./style";


interface PaymentSectionProps {
  onClickHandler: () => void;
}

const PaymentSection = ({onClickHandler} : PaymentSectionProps) => {
  const { classes } = useStyles();
  const [coursesInCart,] = useLocalStorage<ICourse[] | []>({ key: "coursesInCart", defaultValue: [] });
  const sumPrice = useCallback(
    (courses: ICourse[]) => {
      let ret = 0;
      courses.forEach(
        course => {
          ret += course.dcPrice
        }
      )
      return ret;
    }, []
  )

  return (
    <Card withBorder p="xl" shadow="sm" radius="md">
      <div className={classes.orgPrice}>
        <span>정가</span>
        <div className={classes.priceNumberUnit}>
          <span>{coursesInCart[0].orgPrice}</span>
          <span>원</span>
        </div>
      </div>
      <div className={classes.discountPrice}>
        <span>할인 금액</span>
        <div className={classes.priceNumberUnit}>
          <span style={{color: "#e5503c"}}>-</span>
          <span style={{color: "#e5503c"}}>{coursesInCart[0].orgPrice - coursesInCart[0].dcPrice}</span>
          <span style={{color: "#e5503c"}}>원</span>
        </div>
      </div>
      <div className={classes.totalPrice}>
        <span>최종결제 금액</span>
        <div className={classes.priceNumberUnit}>
          <span style={{color: "#1b1c1d", fontWeight: 700}}>{sumPrice(coursesInCart)}</span>
          <span style={{color: "#1b1c1d", fontWeight: 700}}>원</span>
        </div>
      </div>
      <Button
        color="blue"
        variant="light"
        fullWidth mt="md"
        radius="md"
        onClick={onClickHandler}
      >
       {sumPrice(coursesInCart) === 0 ? "무료 수강하기" : "결제하기"}
      </Button>
    </Card>
  );
}

export default PaymentSection;
