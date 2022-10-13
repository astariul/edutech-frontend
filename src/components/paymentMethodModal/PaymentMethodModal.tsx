import { Button, Modal, Grid } from '@mantine/core';
import useStyles from "./style";


interface PaymentMethodModalProps {
  paymentMethods: string[]; //결제방식
  paymentMethodCodeMap: Map<string, string>; //결제 방식명과 결제방식 iamport 코드 Map
  opened: boolean;
  modalCloser: (close: boolean) => void;
  onSelectItem: (item: string) => void;
}

const PaymentMethodModal = (
  {
    paymentMethods,
    paymentMethodCodeMap,
    opened,
    modalCloser,
    onSelectItem,
  }: PaymentMethodModalProps
) => {
  const { classes } = useStyles();

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
            (payMethod, index) => {
              return (
                <Button
                  key={index}
                  className={classes.button}
                  variant="outline"
                  onClick={
                    () => {
                      modalCloser(true);
                      onSelectItem(paymentMethodCodeMap.get(payMethod) as string);
                    }
                  }
                  type="button"
                >
                  {payMethod}
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