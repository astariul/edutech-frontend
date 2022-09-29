import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  price: {
    padding: '20px 24px 20px 0'
  },
  orgPrice: {
    display: "flex",
    fontWeight: 400,
    lineHeight: 1.43,
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#858a8d"
  },
  discountPrice: {
    display: "flex",
    fontWeight: 400,
    lineHeight: 1.43,
    fontSize: "14px",
    justifyContent: "space-between",
    color: "#e5503c"
  },
  totalPrice: {
    lineHeight: 1.47,
    fontSize: "15px",
    fontWeight: 700,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: "10px",
    color: "#1b1c1d",
  },
  priceNumberUnit: {
    fontWeight: 400,
    lineHeight: 1.43,
    fontSize: "14px",
    display: "flex",
    flexShrink: 0,
    color: "#858a8d",
  }
}));

export default useStyles;
