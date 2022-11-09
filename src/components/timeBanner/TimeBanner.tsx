
import DDayTimer from '../ddayTimer/DdayTimer';
import { Button } from '@mantine/core';
import useStyles from './style';

interface TimeBannerProps {
  dDay: string;
  messageColor: string;
  buttonString: string;
  onClickButton: () => void;
  message?: string;
}

const TimeBanner = ({dDay, buttonString, messageColor, onClickButton, message}: TimeBannerProps) => {
  const {classes, cx} = useStyles({messageColor});
  return (
    <section className={classes.main}>
      <div className={cx(classes.contents, classes.mobile)}>
        <div className={classes.leftSection}>
          <DDayTimer dDay={dDay} interval={1000}/>
          <div className={classes.message}>
            <h2>{message}</h2>
          </div>
        </div>
        <Button
          className={classes.paymentButton}
          radius={1.68}
          onClick={onClickButton}
        >
          {buttonString}
        </Button>
      </div>
      <div className={cx(classes.contents, classes.desktop)}>
        <DDayTimer dDay={dDay} interval={1000}/>
        <div className={classes.message}>
          <h2>{message}</h2>
        </div>
        <Button
          className={classes.paymentButton}
          radius={6.47}
          onClick={onClickButton}
        >
          {buttonString}
        </Button>
      </div>
    </section>
  )
}

export default TimeBanner;
