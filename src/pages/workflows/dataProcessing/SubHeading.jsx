import React from "react";
import { Box } from "@mui/material";

function SubHeading() {
  return (
    <Box mt="2.3rem">
      <p
        mt={2}
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          lineHeight: "1.5rem",
          color: "white",
          marginTop: "3rem",
        }}
        className="heading"
      >
        Create pipeline
      </p>
    </Box>
  );
}

export default SubHeading;
