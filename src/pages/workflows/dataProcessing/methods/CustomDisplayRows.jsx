import React, { useEffect, useState } from "react";
import AllColumnsSelect from "./AllColumnsSelect";
import Select from "./Select";
import { Box } from "@mui/material";

function CustomDisplayRows() {
  return (
    <>
      <Box display="flex" sx={{ gap: "20px", display: displayRow }}>
        <AllColumnsSelect
          handleChange={setSelectedColumn}
          value={selectedColumn}
        />
        <Select
          dropdownValues={dropdownValues}
          placeholder={"Operation"}
          handleChange={setOperation}
          values={operation}
        />
        <Box marginTop="auto">
          <img src={xIcon} height="30px" onClick={removeRow} />
        </Box>
      </Box>
    </>
  );
}

export default CustomDisplayRows;
