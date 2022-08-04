import React from "react";
import { Box, FormControlLabel, Stack, Typography } from "@mui/material";

function BuildModel() {
  return (
    <Box>
      <Typography variant="h1">Build a Custom Model</Typography>
      <br />
      <br />
      <Typography variant="h3">Processing</Typography>
      Process this model remotely or locally:
      <br />
      <br />
      <Typography variant="h3">Load Data</Typography>
      Please load the dataset to build the model.
      <br />
      <br />
      <Typography variant="h3">Specify Key Variables</Typography>
      Identify the different types of variables:
      <br />
      <br />
      <Typography variant="h3">Select Model</Typography>
      Select the type of model.
      <br />
      <br />
      <Typography variant="h3">Submit Model for Execution</Typography>
      Select the type of model.
      <br />
      <br />
    </Box>
  );
}

export default BuildModel;
