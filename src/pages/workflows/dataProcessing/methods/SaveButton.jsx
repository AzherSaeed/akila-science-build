import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataProcessingContext } from "@contexts/DataProcessingContext";

const SaveButton = ({ title, finalOperation, disabled }) => {
  const { updatePipeline } = useContext(DataProcessingContext);
  const handleSave = () => {
    updatePipeline(finalOperation);
  };

  disabled = !disabled;

  return (
    <Box marginTop="3vh">
      <Typography variant="h3">{title}</Typography>
      <Button
        key={disabled}
        variant="contained"
        size="large"
        onClick={handleSave}
        disabled={disabled}
        sx={{
          "&:disabled": {
            backgroundColor: "lightBlue.main",
            color: "white",
            opacity: 0.3,
          },
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export default SaveButton;
