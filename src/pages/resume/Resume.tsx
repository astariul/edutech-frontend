import { useStyles } from "./style";
import { Grid, SimpleGrid, Card, Text } from "@mantine/core";

const Resume = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <div className={classes.topSection}>
        <div className={classes.mainMessage}>
          차별화된 합격자 이력서,
          <br />곧 여러분의 것이 됩니다.
        </div>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <div>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              {/* <Text weight={900}>Norway Fjord Adventures</Text> */}
              {/* <img src="./image/resume/supperresume1.png" /> */}
              <img
                className={classes.cardIcon}
                src="./image/resume/superresume1.png"
              />

              <div className={classes.cardTitle}>슈퍼 이력서</div>
              <div className={classes.cardBody}>
                슈퍼코딩 강의를 수강하고 프로젝트를 완료하면 회사에서 요구하는
                실무 역량이 이력서에 반영되는 경험을 하게됩니다.
              </div>
            </Card>
          </div>
          <div>2</div>
          <div>3</div>
        </SimpleGrid>

        {/* <Grid justify="center" align="flex-start">
          <Grid.Col span={3} md={6} lg={3} style={{ minHeight: 150 }}>
            1
          </Grid.Col>
          <Grid.Col span={3} md={6} lg={3} style={{ minHeight: 150 }}>
            2
          </Grid.Col>
          <Grid.Col span={3} md={6} lg={3} style={{ minHeight: 300 }}>
            3
          </Grid.Col>
        </Grid> */}
      </div>
    </div>
  );
};

export default Resume;
