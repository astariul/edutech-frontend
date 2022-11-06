import { useStyles } from "./style";
import { Grid, SimpleGrid, Card, Text, Space } from "@mantine/core";
import ResumeCard1 from "../../components/resume/ResumeCard1";

const Resume = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <div className={classes.topSection}>
        <div className={classes.mainMessage}>
          차별화된 합격자 이력서,
          <br />곧 여러분의 것이 됩니다.
        </div>
        <Space h={80} />
        <SimpleGrid
          cols={3}
          spacing={10}
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <div>
            <ResumeCard1 />
            <ResumeCard1 />
          </div>
          <div>
            <ResumeCard1 />
            <ResumeCard1 />
          </div>
          <div>
            <ResumeCard1 />
          </div>
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
