
import DDayTimer from '../ddayTimer/DdayTimer';
import { Button } from '@mantine/core';
import useStyles from './style';

interface TimeBannerProps {
  dDay: string,
  messageColor: string,
  message?: string,
}

const TimeBanner = ({dDay, message, messageColor}: TimeBannerProps) => {
  const {classes} = useStyles({messageColor});
  return (
    <section className={classes.main}>
      <div className={classes.contents}>
        <DDayTimer dDay={dDay} interval={1000}/>
        <div className={classes.message}>
          <h2>{message}</h2>
        </div>
        <Button
          className={classes.paymentButton}
          radius={6.47}
        >
          지금바로구매
        </Button>
      </div>
    </section>
  )
}

export default TimeBanner;
