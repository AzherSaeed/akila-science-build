import React from "react";
import DocumentationLeftNavbar2 from "@components/LeftNavbar/DocumentationLeftNavbar2";
import { Box } from "@mui/material";

function MachineLearningTemplate(props) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box display="flex">
        <DocumentationLeftNavbar2 />
        <Box flex="1">{props.children}</Box>
      </Box>
    </Box>
  );
}

export default MachineLearningTemplate;
