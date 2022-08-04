import { Typography } from "@mui/material";
import * as React from "react";
import Select from "./Select";
import { Box } from "@mui/material";

function AllColumnsDropdown({ multiple, title }) {
  const columns = [
    "Column 1",
    "Column 2",
    "Column 3",
    "Column 4",
    "Column 5",
    "Column 6",
  ];
  return (
    <Box marginTop="2vh">
      <Typography variant="workflowDropdownHeader">{title}</Typography>

      <Select dropdownValues={columns} multiple={multiple} />
    </Box>
  );
}

export default AllColumnsDropdown;
