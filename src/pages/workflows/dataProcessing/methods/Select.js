import * as React from "react";
import { Box, Typography } from "@mui/material";
import "./Select.css";

export default function Select({
  title,
  dropdownValues,
  multiple,
  handleChange,
  values,
  placeholder,
}) {
  const renderColumns = () => {
    if (multiple) {
      return (
        <Box>
          <Typography variant="textBody">{title}</Typography>
          <select
            className="select"
            multiple
            style={{ height: "40vh" }}
            onChange={(e) => handleChange(e.target.value)}
            value={values}
          >
            <option value="" disabled selected>
              {placeholder}
            </option>
            {dropdownValues.map((item, index) => (
              <option key={index} value={item.value}>
                {item.key}
              </option>
            ))}
          </select>
        </Box>
      );
    } else {
      return (
        <Box maxWidth="30vw">
          <Typography variant="textBody">{title}</Typography>
          <select
            className="select"
            onChange={(e) => handleChange(e.target.value)}
            value={values}
          >
            <option value="" disabled selected>
              {placeholder}
            </option>
            {dropdownValues.map((item, index) => (
              <option key={index} value={item.value}>
                {item.key}
              </option>
            ))}
          </select>
        </Box>
      );
    }
  };
  return <Box>{renderColumns()}</Box>;
}
