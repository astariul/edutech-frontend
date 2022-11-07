import React from "react";
import { useStyles } from "./style";
import { SimpleGrid, Space, Container, Center } from "@mantine/core";
import ResumeCard1 from "../../components/resume/ResumeCard1";
import ResumeCard2 from "../../components/resume/ResumeCard2";
import ResumeCard3 from "../../components/resume/ResumeCard3";
import ResumeCard4 from "../../components/resume/ResumeCard4";
import ResumeCard5 from "../../components/resume/ResumeCard5";

import { useMediaQuery } from "react-responsive";

const Resume = (): JSX.Element => {
  const { classes } = useStyles();
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1201 });
  const isTablet = useMediaQuery({ minWidth: 770, maxWidth: 1200 });
  const isMobile = useMediaQuery({ minWidth: 401, maxWidth: 769 });
  const isSmallMobile = useMediaQuery({ maxWidth: 400 });
  const isBiggerThanSmallMobile = useMediaQuery({ minWidth: 401 });

  return (
    <div>
      <div className={classes.bgSection}>
        {isBiggerThanSmallMobile && (
          <>
            <div className={classes.mainMessage}>
              차별화된 합격자 이력서,
              <br />곧 여러분의 것이 됩니다.
            </div>
            <Space h={80} />
          </>
        )}
        {isSmallMobile && (
          <>
            <div className={classes.mainMessage}>
              차별화된 <br />
              합격자 이력서,
              <br />곧 여러분의 <br />
              것이 됩니다.
            </div>
            <Space h={10} />
          </>
        )}

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
              {(isMobile || isSmallMobile) && (
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
      {isTablet && (
        <>
          <Space h={1400} />
        </>
      )}

      {isMobile && (
        <>
          <Space h={2100} />
        </>
      )}
      {isSmallMobile && (
        <>
          <Space h={2350} />
        </>
      )}
    </div>
  );
};

export default Resume;
