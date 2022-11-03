
import DDayTimer from '../ddayTimer/DdayTimer';
import { Button } from '@mantine/core';
import useStyles from './style';
import { useNavigate } from 'react-router-dom';

interface TimeBannerProps {
  dDay: string;
  messageColor: string;
  buttonString: string;
  onClickButton: () => void;
  message?: string;
}

const TimeBanner = ({dDay, buttonString, messageColor, onClickButton, message}: TimeBannerProps) => {
  const {classes} = useStyles({messageColor});
  const navigate = useNavigate();
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
          onClick={onClickButton}
        >
          {buttonString}
        </Button>
      </div>
    </section>
  )
}

export default TimeBanner;
