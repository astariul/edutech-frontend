
import { useEffect, useState } from 'react';
import useStyles from './style';

interface DDayTimerProps {
  dDay: string,
  interval: number,
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (dDay: string): TimeLeft=> {
  const difference = +new Date(dDay) - +new Date();
  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return timeLeft;
};

const DDayTimer = ({dDay, interval}: DDayTimerProps) => {
  
  const {classes} = useStyles();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(dDay) as TimeLeft);

  useEffect(
    () => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft(dDay));
      }, interval);
    }
  )

  return (
    <div className={classes.main}>
      <div className={classes.contents}>
        <div>D-{timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초</div>
        {/* <div className={classes.day}>
          <div className={cx(classes.boxStyle, classes.D)}>
            <div>D</div>
            <div>-</div>
          </div>
          <div className={classes.boxStyle}>{`${100 + timeLeft.days}`.slice(1,2)}</div>
          <div className={cx(classes.boxStyle, classes.boxStyleWithTag)}>
            <div className="timeLeftNumber">{`${100 + timeLeft.days}`.slice(2,3)}</div>
            <div className="timeLeftNumberTag">Day</div>
          </div>
        </div>
        <div className={classes.colon}>:</div>
        <div className={classes.hour}>
          <div className={classes.boxStyle}>{`${100 + timeLeft.hours}`.slice(1,2)}</div>
          <div className={cx(classes.boxStyle, classes.boxStyleWithTag)}>
            <div className="timeLeftNumber">{`${100 + timeLeft.hours}`.slice(2,3)}</div>
            <div className="timeLeftNumberTag">Hour</div>
          </div>
        </div>
        <div className={classes.colon}>:</div>
        <div className={classes.minutes}>
          <div className={classes.boxStyle}>{`${100 + timeLeft.minutes}`.slice(1,2)}</div>
          <div className={cx(classes.boxStyle, classes.boxStyleWithTag)}>
            <div className="timeLeftNumber">{`${100 + timeLeft.minutes}`.slice(2,3)}</div>
            <div className="timeLeftNumberTag">minutes</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default DDayTimer;
