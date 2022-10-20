
import useSuperCurriculumStyles from "./superCurriculumStyle";

const SuperCurriculum = () => {
  const {classes} = useSuperCurriculumStyles();
  const cardContents = [
    [
      "/image/home/superCurriculumImageCard1.png",
      "단기간 학습해서 입사하신 분들 얼마 못 버티고 다시 공부합니다.", 
      "이경엽",
      "스페이스워크CTO"
    ],
    [
      "/image/home/superCurriculumImageCard2.png",
      "프로젝트 중심으로 학습하지 않아서 문제 해결 능력이 많이 부족합니다.", 
      "이경엽",
      "스페이스워크CTO"
    ],
    [
      "/image/home/superCurriculumImageCard3.png",
      "슈코 커리큘럼은 수료후 저희가 보증하고 취업시켜드릴수 있을만큼 완벽합니다.", 
      "이경엽",
      "스페이스워크CTO"
    ],
    [
      "/image/home/superCurriculumImageCard4.png",
      "업계 최고의 분들이 함께 만든 슈코 커리큐럼! 실전형 미니프로젝트까지!!!", 
      "이경엽",
      "스페이스워크CTO"
    ]
  ]  
  const Card = (imagePath: string, title: string, footerName: string, footerDescription: string) => (
    <div key={title} className={classes.card}>
      <img className={classes.cardImage} src={imagePath} alt={imagePath}/>
      <div className={classes.cardTextArea}>
        <div className={classes.cardTitle}>{title}</div>
        <div className={classes.cardFooter}>
          <div className={classes.footerName}>{footerName}</div>
          <img
            className={classes.checkCircleSmall}
            src={"/image/home/superCurriculumImageCheckSmall.png"}
            alt="CheckMarker"
          />
          <div className={classes.footerDescription}>{footerDescription}</div>
        </div>
      </div>
    </div>
  )
  return (
    <div className={classes.main}>
      <div className={classes.textArea}>
        <div className={classes.category}>SUPER CURRICULUM</div>
        <div className={classes.title}>
          "우리는 이런 개발자를 원합니다"
          <br />
          기업이 원하는 인재를 만들기 위한 <span style={{color:"#0094FF"}}>100인의 업계최고</span>들의
          <br />
          적극적인 참여로 <span style={{color:"#0094FF"}}>커리큘럼을 완성</span>시켰습니다.
        </div>
        <div className={classes.titleMobile}>
          "우리는 이런 개발자를 원합니다"
          <br />
          기업이 원하는 인재를 만들기 위한
          <br />
          <span style={{color:"#0094FF"}}>100인의 업계최고</span>들의 적극적인 참여로
          <br />
          <span style={{color:"#0094FF"}}>커리큘럼을 완성</span>시켰습니다.
        </div>
      </div>
      <div className={classes.imageTopContainer}>
        <img
          className={classes.imageTop}
          src={"/image/home/superCurriculumImage1.png"}
          alt=""
        />
      </div>
      <div className={classes.imageBottom}>
      </div>
      <div className={classes.cardArea}>
        <div className={classes.cards}>
          {
            cardContents.map(
              (each) => {
                const  [image, title, name, description] = each;
                return Card(image, title, name, description)
              }
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SuperCurriculum;
