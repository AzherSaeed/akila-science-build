import React from "react";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import styles from "./CustomForm.module.css";

function ProgressBar({ displayRegisterOrPayment }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      maxWidth="500px"
      marginLeft="auto"
      marginRight="auto"
    >
      <Box>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <CheckCircleIcon />
        </Box>
        Register
        <br />
      </Box>
      <span className={styles.divider}></span>
      <Box>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          {displayRegisterOrPayment ? (
            <CheckCircleIcon />
          ) : (
            <RadioButtonCheckedIcon />
          )}
        </Box>
        Payment
        <br />
      </Box>
    </Box>
  );
}

export default ProgressBar;
