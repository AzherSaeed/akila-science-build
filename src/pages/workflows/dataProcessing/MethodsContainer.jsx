import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

function MethodsContainer({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginTop="5vh"
      marginLeft="auto"
      marginRight="auto"
      paddingLeft="5vw"
      width="100%"
      color="white"
      paddingBottom="5%"
      minHeight="70vh"
    >
      {children}
    </Box>
  );
}

export default MethodsContainer;
