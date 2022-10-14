
import { Button, Grid, Modal } from "@mantine/core";
import useStyles from "./style";

interface PaymentPGModalProps {
  pgNameCodeMap: Map<string, string>; //결제 지원할 pg사와 pg사 iamport 코드 Map
  opened: boolean;
  modalCloser: (arg: boolean) => void;
  onSelectItem: (item: string) => void;
}

const PaymentPGModal = (
  {
    pgNameCodeMap,
    opened,
    modalCloser,
    onSelectItem
  }: PaymentPGModalProps) => {

  const { classes } = useStyles();

  return (
    <Modal
      centered
      opened={opened}
      onClose={() => modalCloser(true)}
      title="PG사를 선택해주세요"
    >
      <Grid className={classes.modal}>
        {
          Array.from(pgNameCodeMap).map(
            (each, index) => {
              const [pgName, code] = each;
              return (
                <Button
                  key={index}
                  className={classes.button}
                  variant="outline"
                  // 아이템을 선택하면 모달 창이 닫친다
                  onClick={() => { modalCloser(true); onSelectItem(code);}}
                  type="button"
                >
                  {pgName}
                </Button>
              )
            }
          )
        }
      </Grid>
    </Modal>
  )
}

export default PaymentPGModal;