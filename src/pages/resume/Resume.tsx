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
        <Center>
          <Container size={1180}>
            <SimpleGrid
              cols={3}
              spacing="xl"
              breakpoints={[
                { maxWidth: "xl", cols: 3, spacing: "md" },
                { maxWidth: "lg", cols: 2, spacing: "md" },
                { maxWidth: "sm", cols: 1, spacing: "sm" },
                { maxWidth: "xs", cols: 1, spacing: "sm" },
              ]}
            >
              <div>
                <ResumeCard1 />
                <Space h={30} />
                <ResumeCard1 />
              </div>
              <div>
                <ResumeCard2 />
                <Space h={30} />
                <ResumeCard1 />
              </div>
              <div>
                <ResumeCard1 />
              </div>
            </SimpleGrid>
          </Container>
        </Center>
      </div>
    </div>
  );
};

export default Resume;
