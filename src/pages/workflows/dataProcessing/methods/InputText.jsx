import React from "react";
import { TextField, Typography } from "@mui/material";

function InputText({ value, onChange, placeholder, title }) {
  return (
    <>
      <Typography variant="textBody">{title}</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        label={value === "" ? placeholder : ""}
        InputLabelProps={{
          shrink: false,
          style: {
            color: "black",
          },
        }}
        sx={{
          input: {
            color: "black",
            background: "white",
          },
        }}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />{" "}
      <br />
    </>
  );
}

export default InputText;
