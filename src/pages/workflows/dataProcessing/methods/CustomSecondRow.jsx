import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import AllColumnsSelect from "./AllColumnsSelect";
import Select from "./Select";

function CustomSecondRow({ finalOperation, updateFinalOperation }) {
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [operation, setOperation] = useState("");
  const temp = finalOperation;

  const dropdownValues = [
    { key: "\u002B", value: "plus" },
    { key: "\u2212", value: "subtract" },
    { key: "\u00D7", value: "multiply" },
    { key: "\u00F7", value: "divide" },
  ];

  useEffect(() => {
    temp[1] = { column: selectedColumns, operation };
    updateFinalOperation(temp);
  }, [selectedColumns, operation]);

  return (
    <Box display="flex">
      <AllColumnsSelect handleChange={setSelectedColumns} />
      <Select
        dropdownValues={dropdownValues}
        placeholder={"Operation"}
        handleChange={setOperation}
      />
    </Box>
  );
}

export default CustomSecondRow;
