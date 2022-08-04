import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { DataProcessingContext } from "@contexts/DataProcessingContext";

export default function AllColumnsChips({ label, handleChange }) {
  const { columnNames } = useContext(DataProcessingContext);
  const [selectedColumns, setSelectedColumns] = useState([]);

  useEffect(() => {
    handleChange(selectedColumns);
  }, [selectedColumns]);

  return (
    <div>
      <Typography color="white">{label}</Typography>
      <FormControl
        sx={{
          mt: 1,
        }}
        variant="filled"
        color="primary"
      >
        <InputLabel
          id="demo-multiple-chip-label"
          sx={{ color: "white" }}
          shrink={false}
        >
          {selectedColumns.length === 0 ? "Select Columns" : ""}
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedColumns}
          onChange={(e) => {
            setSelectedColumns(e.target.value);
          }}
          input={
            <OutlinedInput id="select-multiple-chip" label="Chip" sx={{}} />
          }
          sx={{
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            minWidth: "20vw",
          }}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{ color: "white", backgroundColor: "purple" }}
                />
              ))}
            </Box>
          )}
        >
          {columnNames.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
