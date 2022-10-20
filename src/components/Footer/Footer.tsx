import BizInfo from "../bizInfo/BizInfo";
import useStyles from "./style";

const Footer = () => {
  const {classes} = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <img className={classes.logo} src="./supercodingbi.png" alt="SUPERCODING LOGO" />
          <div className={classes.bizInfo}>
            <BizInfo/>
          </div>
        </div>
        <div className={classes.contentRight}>
          <div className={classes.iconBox}>
            <img className={classes.icon} src="image/logo/facebook.png" alt="facebook" />
            <img className={classes.icon} src="image/logo/slack.png" alt="slack" />
            <img className={classes.icon} src="image/logo/instagram.png" alt="insta" />
            <img className={classes.icon} src="image/logo/youtube.png" alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  )  
}

export default Footer;