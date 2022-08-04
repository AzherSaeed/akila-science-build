import React from "react";
import { Box } from "@mui/material";
import "./RadioButtonsScroll.css";

const RadioScrollProcess = ({ newLabels, handleChange }) => {
  return (
    <Box className="radio-button-main">
      {newLabels.map((value, idx) => (
        <Box mt="2.2rem" display="flex" alignItems="center" key={idx}>
          <label class="container" key={idx + "label"}>
            {value}
            <input
              value={value}
              onChange={(event) => handleChange(event.target.value)}
              type="radio"
              name="radio"
              key={idx + "value"}
            />
            <span class="checkmark" key={idx + "checkmark"}></span>
          </label>
        </Box>
      ))}
    </Box>
  );
};

export default RadioScrollProcess;
