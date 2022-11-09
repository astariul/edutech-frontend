
import useNoticStyles from './noticeStyles';

const Notice = () => {
  const {classes} = useNoticStyles();
  return (
    <section className={classes.main}>
      <div className={classes.contents}>
        <div className={classes.headers}>
          <div>유의사항</div>
        </div>
      </div>
    </section>
  )
}

export default Notice;
