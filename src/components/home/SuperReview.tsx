import useSuperReivewStyles from "./superReivewStyle";

const SuperReivew = () => {
  const {classes} = useSuperReivewStyles();
  const cardContents = [
    [
      require("../../static/image/home/superReviewImage1.png"),
      "슈코만나서 6수만에 드디어 삼성전자 합격했습니다.", 
      "제레미",
      "슈코1기 삼성전자합격"
    ],
    [
      require("../../static/image/home/superReviewImage2.png"),
      "슈코만나서 6수만에 드디어 삼성전자 합격했습니다.", 
      "제레미",
      "슈코1기 배달의민족 합격"
    ],
    [
      require("../../static/image/home/superReviewImage3.png"),
      "슈코만나서 6수만에 드디어 삼성전자 합격했습니다.", 
      "제레미",
      "슈코1기 삼성전자합격"
    ]
  ]

  const Card = (imagePath: string, title: string, footerName: string, footerDescription: string) => (
    <div key={imagePath} className={classes.card}>
      <img className={classes.cardImage} src={imagePath} alt={imagePath}/>
      <div className={classes.cardTextArea}>
        <div className={classes.cardTitle}>{title}</div>
        <div className={classes.cardFooter}>
          <div className={classes.footerName}>{footerName}</div>
          <div className={classes.footerDescription}>{footerDescription}</div>
        </div>
      </div>
    </div>
  )
  return (
    <div className={classes.main}>
      <div className={classes.category}>
        SUPER REIVEW
      </div>
      <div className={classes.title}>
        슈퍼코딩 취업 사례와 수강 후기.
        <br />
        여러분도 할 수 있습니다.
      </div>
      <div className={classes.titleMobile}>
        슈퍼코딩의
        <br />
        취업사례와 수강후기,
        <br />
        여러분도 할 수 있습니다.
      </div>
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
  )
}

export default SuperReivew;
