import { Avatar, Indicator } from "@mantine/core";
import useStyles from "./style";

interface PersonProps {
  image: string;
  name: string;
  description: string;
  size?: number;
  className?: string;
  indicator?: boolean;
  indicatorSize?: number;
}

const Person = ({
  image, name, description, size, className, indicator=true, indicatorSize=14.83
}: PersonProps) => {

  const {classes, cx} = useStyles({indicator});
  return (
    <div className={cx(classes.main, className)}>
      <Indicator
        className={classes.indicator}
        inline
        size={indicatorSize}
        position="bottom-end"
        label={
          <img
            src={require("../../static/image/checkIcon.png")}
            alt="checkIcon"
          />}
      >
        <Avatar size={size} src={image} alt="personImage" />
      </Indicator>
      <div className={classes.nameAndDescription}>
        <div className={classes.name}>
          {name}
        </div>
        <div className={classes.description}>
          {description}
        </div>
      </div>
    </div>
  )
};

export default Person;
