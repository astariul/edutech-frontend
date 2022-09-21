import React from "react";
import { Center, Title, Grid, Box } from "@mantine/core";

const Survey = () => {

  return (
      <Center>
        <Grid style={{flexDirection: "column"}}>
          <Box>
            <Title>이번 강의는 어떠셨나요?</Title>
          </Box>
          
          <Title>좋았던 점을 알려주세요</Title>
          <Title>개선할 점을 알려주세요</Title>
        </Grid>
      </Center>
  );
}


export default Survey;
