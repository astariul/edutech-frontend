import React from "react";
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

import { useMediaQuery } from "react-responsive";

export const Mobile = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:480px)",
  });
  return <>{isMobile ? true : null}</>;
};

export const Pc = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:481px)",
  });
  return <>{isDesktop}</>;
};

const Resume = (): JSX.Element => {
  const { classes, cx } = useStyles();
  const isDesktopOrLaptop = useMediaQuery(
    { minDeviceWidth: 421 }
    // { deviceWidth: 1600 } // `device` prop
  );
  const isMobile = useMediaQuery(
    { maxDeviceWidth: 420 }
    // { deviceWidth: 1600 } // `device` prop
  );

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
                { maxWidth: "xl", cols: 3, spacing: 40 },
                { maxWidth: "lg", cols: 2, spacing: 40 },
                { maxWidth: "sm", cols: 1, spacing: "sm" },
                { maxWidth: "xs", cols: 1, spacing: "sm" },
              ]}
            >
              <div>
                <>
                  <ResumeCard1 />
                  <Space h={40} />
                  <ResumeCard4 />
                </>
              </div>
              {isMobile && (
                <>
                  <Space h={15} />
                </>
              )}
              <div>
                <ResumeCard2 />
                <Space h={40} />
                <ResumeCard5 />
              </div>
              {isMobile && (
                <>
                  <Space h={15} />
                </>
              )}
              <div>
                <ResumeCard3 />
              </div>
            </SimpleGrid>
          </Container>
        </Center>
      </div>

      {isDesktopOrLaptop && (
        <>
          <Space h={800} />
        </>
      )}
      {isMobile && (
        <>
          <Space h={2100} />
        </>
      )}
    </div>
  );
};

export default Resume;
