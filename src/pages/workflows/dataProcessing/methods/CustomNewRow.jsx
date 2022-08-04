import React, { useEffect, useState } from "react";
import AllColumnsSelect from "./AllColumnsSelect";
import Select from "./Select";
import { Box } from "@mui/material";
import xIcon from "@assets/xIcon.svg";

function CustomNewRow({
  finalOperation,
  updateFinalOperation,
  indexValue,
  deleteRow,
  tempState,
  updateTempState,
}) {
  const [selectedColumn, setSelectedColumn] = useState([]);
  const [operation, setOperation] = useState("");
  let temp = [...finalOperation];

  const dropdownValues = [
    { key: "\u002B", value: "plus" },
    { key: "\u2212", value: "subtract" },
    { key: "\u00D7", value: "multiply" },
    { key: "\u00F7", value: "divide" },
  ];

  const [displayRow, setDisplayRow] = useState("Show");

  const removeRow = () => {
    deleteRow(indexValue, finalOperation);
    setDisplayRow("Don't Show");
  };

  useEffect(() => {
    temp[indexValue] = { column: "", operation: "" };
    temp[indexValue] = { column: selectedColumn, operation };
    updateFinalOperation(temp);
    updateTempState(indexValue, selectedColumn, operation);
  }, [selectedColumn, operation]);

  return (
    <Box>
      <h3>Selected column: {selectedColumn}</h3>
      <h3>Display Row: {displayRow}</h3>
      <h3>
        finalOperation[2].column: {finalOperation[2].column}: {indexValue}
      </h3>
      <h3>finalOperation[2].column: {finalOperation[2].column}</h3>
      <Box display="flex" sx={{ gap: "20px" }}>
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
    </Box>
  );
}

export default CustomNewRow;
