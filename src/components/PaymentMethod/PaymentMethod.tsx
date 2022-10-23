import useStyles from "./style";
import { Button } from "@mantine/core";

const PaymentMethod = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <h2 style={{ padding: "2% 10% 0% 10%" }}>결제 방식</h2>
      <div className={classes.container} style={{ padding: "0% 10%" }}>
        <div>
          <div style={{ width: 200 }}>
            <Button variant="outline" color="gray">
              KG 이니시스
            </Button>
          </div>
          <button>t</button>
          <Button variant="outline" color="gray">
            카카오페이
          </Button>
          <Button variant="outline" color="gray">
            토스
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
