import * as React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SingleSelectDropdown({ dropdownValues }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={dropdownValues}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {dropdownValues.map((value) => {
            return <MenuItem value={value}>{value}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
