import useBodyManagementStyles from "./bodyManagementStyle";


const BodyManagement = () => {
  const {classes} = useBodyManagementStyles();
  return (
    <>
      <section className={classes.logoTile}>
        <div className={classes.message}>
          <h2>
            취업이 될 수 있도록<br/>
            <span>제대로 관리</span>하기 때문입니다.
          </h2>
          <h2>현직 인사담당자, 개발자, 2TOP 담임제로 강의, 취업 모두 완벽하게 관리됩니다.</h2>
        </div>
        <div className={classes.management}>
          <h2>취업 전에도, 후에도 막강한 커뮤니티</h2>
          <h2>+ 슈퍼코딩 졸업생은 선발과정을 통해 멘토로 활동하며 스펙을 쌓을 수 있습니다.</h2>
        </div>
      </section>
      <section className={classes.logoTileMobile}>
        <div className={classes.messageMobile}>
          <h2>
            취업이 될 수 있도록<br/>
            <span>제대로 관리</span>하기 때문입니다.
          </h2>
          <h2>
            현직 인사담당자, 개발자, 2TOP 담임제로
            <br />강의, 취업 모두 완벽하게 관리됩니다.
          </h2>
        </div>
        <div className={classes.managementMobile}>
          <h2>
            취업 전에도
            <br />후에도
            <br />막강한 커뮤니티
          </h2>
          <h2>
            + 슈퍼코딩 졸업생은 선발과
            <br />정을 통해 멘토로 활동하며 스
            <br />펙을 쌓을 수 있습니다.
          </h2>
        </div>
      </section>
    </>
  )
};

export default BodyManagement;
