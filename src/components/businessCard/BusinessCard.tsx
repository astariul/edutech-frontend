import useStyles from "./style";

interface BusinessCardProps {
  image: string;
  name: string;
  position: string;
  className?: string;
}

const BusinessCard = ({
  image, name, position, className,
}: BusinessCardProps) => {

  const {classes, cx} = useStyles();
  return (
    <div className={cx(classes.main, className)}>
      <img src={image} alt="companylogo"/>
      <div className={classes.nameAndPosition}>
        <div className={classes.name}>
          <div>{name}</div>
          <img src={require("../../static/image/checkIndicatorLargeEdge.png")} alt="chcekIndicator" />
        </div>
        <div className={classes.position}>
          {position}
        </div>
      </div>
    </div>
  )
};

export default BusinessCard;
