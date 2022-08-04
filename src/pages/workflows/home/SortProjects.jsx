import React, { useState } from "react";
import { Box, ListItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SortProjects() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box
        sx={{
          height: "10vh",
          width: "20vw",
          maxWdith: "20vw",
        }}
      >
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            shrink={false}
            sx={{
              fontWeight: "500",
            }}
          >
            Sort Projects
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Sort Projects"
            onChange={handleChange}
            sx={{
              backgroundColor: "#FFF",
              height: "5vh",
            }}
          >
            <MenuItem value={"alphabetical"}>Alphabetical</MenuItem>
            <MenuItem value={"most-recent"}>Most Recent</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default SortProjects;
