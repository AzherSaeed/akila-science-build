import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import styles from "./NumericInput.module.css";

const NumericInput = ({ title, min, max, handleChange, updateValidInput }) => {
  let [inputValue, setInputValue] = useState();
  const displayValidationMessage = () => {
    if (inputValue < min || inputValue > max) {
      return (
        <Typography backgroundColor="pink" color="red" maxWidth="30vw">
          Please input a number between {min} and {max}.
        </Typography>
      );
    }
  };
  const handleUpdate = (e) => {
    setInputValue(e);
    handleChange(e);
  };

  useEffect(() => {
    if (inputValue < min || inputValue > max) {
      updateValidInput(false);
    }
    if (inputValue >= min && inputValue <= max) {
      updateValidInput(true);
    }
  }, [inputValue]);

  return (
    <div>
      <Typography variant="textBody">{title}</Typography>
      <br />
      <input
        className={styles.inputForm}
        type="number"
        id="bins"
        name="bins"
        value={inputValue}
        onChange={(e) => handleUpdate(e.target.value)}
      />
      {displayValidationMessage()}
    </div>
  );
};

export default NumericInput;
