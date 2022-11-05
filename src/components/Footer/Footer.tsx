import { useBooleanToggle } from "@mantine/hooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BizInfo from "../bizInfo/BizInfo";
import useStyles from "./style";

const Footer = () => {
  const [hidden, setHidden] = useBooleanToggle(false);
  const { classes } = useStyles({hidden});
  const location = useLocation();

  useEffect(
    () => {
      if (
        location.pathname.startsWith("/signup")
        || location.pathname.startsWith("/login")
        || location.pathname.startsWith("/myclass")
      ) {
        setHidden(true);
      }
      return () => setHidden(false);
    }, [location, setHidden]
  );

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <img className={classes.logo} src={require("../../static/image/supercodingbi.png")} alt="SUPERCODING LOGO" />
          <div className={classes.bizInfo}>
            <BizInfo/>
          </div>
        </div>
        <div className={classes.contentRight}>
          <div className={classes.iconBox}>
            <img className={classes.icon} src={require("../../static/image/logo/Facebook.png")} alt="facebook" />
            <img className={classes.icon} src={require("../../static/image/logo/Slack.png")} alt="slack" />
            <img className={classes.icon} src={require("../../static/image/logo/Instagram.png")} alt="insta" />
            <img className={classes.icon} src={require("../../static/image/logo/Youtube.png")} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  )  
}

export default Footer;