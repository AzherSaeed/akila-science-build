import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Sidebar from "@components/Sidebar/Sidebar";
import "./Modeling.css";
import ModelingRightSide from "./ModelingRightSide";

const Modeling = () => {
  return (
    <Container>
      <Box mt="5.2rem">
        <Grid container>
          <Stack direction={{ xs: "column", md: "row" }}>
            <Grid item md={3} xs={12} mr="1rem">
              <Box>
                <Sidebar />
              </Box>
            </Grid>
            <Stack>
              <Grid item xs={12} md={9}>
                <ModelingRightSide />
              </Grid>
            </Stack>
          </Stack>
        </Grid>
      </Box>
    </Container>
  );
};

export default Modeling;
