import useSuperManagementStyles from "./superManagementStyle";

const SuperManagement = () => {
  const {classes} = useSuperManagementStyles();
  return (
    <>
      <img className={classes.main} src="/image/home/superManagement.png" alt="superManagement" />
      <img className={classes.mainMobile} src="/image/home/superManagementMobile.png" alt="superManagement" />
    </>
  )
}

export default SuperManagement;
