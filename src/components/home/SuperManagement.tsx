import useSuperManagementStyles from "./superManagementStyle";

const SuperManagement = () => {
  const {classes} = useSuperManagementStyles();
  return (
    <>
      <section className={classes.logoTile}>
        <div className={classes.textArea}>
          <div className={classes.category}>SUPER MANAGEMENT</div>
          <div className={classes.title}>
            취업이 될 수 있도록
            <br />
            제대로 관리합니다.
          </div>
          <div className={classes.titleMobile}>
            취업이 될 수 있도록
            <br />
            제대로 관리합니다.
          </div>
        </div>
        <div className={classes.message}>
          <h2>취업전에도 후에도 막강한 커뮤니티.</h2>
          <h2>현직 개발자 100인의 멘토와 동료가 될 수 있습니다.</h2>
        </div>
      </section>
      <img className={classes.mainMobile} src={require("../../static/image/home/superManagementMobile.png")} alt="superManagement" />
    </>
  )
}

export default SuperManagement;
