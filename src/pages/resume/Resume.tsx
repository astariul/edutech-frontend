import { useStyles } from "./style";

const Resume = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <div className={classes.topSection}>
        <div className={classes.mainMessage}>
          차별화된 합격자 이력서,
          <br />곧 여러분의 것이 됩니다.
        </div>
      </div>
    </div>
  );
};

export default Resume;
