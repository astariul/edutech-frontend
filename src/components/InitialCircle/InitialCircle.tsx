import { CSSObject, Text, Container } from '@mantine/core';

interface initialCircleProps {
  initial: string,
  circleSize: string;
  fontSize: string;
  backgroundColor: string;
  initialColor: string
  fontFamily: string
  fontWeight: number,
}
const InitialCircle = (
  {
    initial,
    circleSize,
    fontSize,
    fontWeight,
    backgroundColor,
    initialColor,
    fontFamily,
  }: initialCircleProps) => {

  const circleStyle: CSSObject = {
    height: circleSize,
    width: circleSize,
    backgroundColor: backgroundColor,
    borderRadius: "50%",
    display: "inline-block",
    padding:0
  };

  const circleTextStyle: CSSObject = {
    color: initialColor,
    textAlign: "center",
    fontFamily: fontFamily,
    fontStyle: "normal",
    fontWeight: fontWeight,
    fontSize: fontSize,
    textTransform: "uppercase",
    lineHeight: 1.6,
    height: circleSize,
    width: circleSize,
  };

  return (
    <Container sx={circleStyle}>
      <Text sx={circleTextStyle}>
        {initial}
      </Text>
    </Container>
  );
};

export default InitialCircle;