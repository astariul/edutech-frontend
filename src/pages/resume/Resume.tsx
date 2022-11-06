import { useStyles } from "./style";
import {
  Grid,
  SimpleGrid,
  Card,
  Text,
  Space,
  Container,
  Center,
} from "@mantine/core";
import ResumeCard1 from "../../components/resume/ResumeCard1";
import ResumeCard2 from "../../components/resume/ResumeCard2";
import ResumeCard3 from "../../components/resume/ResumeCard3";
import ResumeCard4 from "../../components/resume/ResumeCard4";
import ResumeCard5 from "../../components/resume/ResumeCard5";

const Resume = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <div className={classes.bgSection}>
        <div className={classes.mainMessage}>
          차별화된 합격자 이력서,
          <br />곧 여러분의 것이 됩니다.
        </div>
        <Space h={80} />
        <Center>
          <Container size={1180}>
            <SimpleGrid
              cols={3}
              spacing={40}
              breakpoints={[
                { maxWidth: "xl", cols: 3, spacing: "md" },
                { maxWidth: "lg", cols: 2, spacing: "md" },
                { maxWidth: "sm", cols: 1, spacing: "sm" },
                { maxWidth: "xs", cols: 1, spacing: "sm" },
              ]}
            >
              <div>
                <ResumeCard1 />
                <Space h={40} />
                <ResumeCard4 />
              </div>
              <div>
                <ResumeCard2 />
                <Space h={40} />
                <ResumeCard5 />
              </div>
              <div>
                <ResumeCard3 />
              </div>
            </SimpleGrid>
          </Container>
        </Center>
      </div>
      <Space h={740} />
    </div>
  );
};

export default Resume;
