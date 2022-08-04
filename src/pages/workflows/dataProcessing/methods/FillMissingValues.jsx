import React, { useEffect, useState } from "react";
import Select from "./Select";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";
import { Box } from "@mui/material";

const FillMissingValues = () => {
  const [selectedColumns, setSelectedColumns] = useState("");
  const [fillMethod, setFillMethod] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  const fillMethodValues = [
    { value: "drop", key: "Drop:  remove all rows with a missing value" },
    {
      value: "front",
      key: "Front Fill: fill with the most recent valid value",
    },
    { value: "back", key: "Back Fill: fill with the next valid value" },
    { value: "average", key: "Average: fill with the average of the column" },
    { value: "zero", key: "Fill with a value of zero" },
  ];

  useEffect(() => {
    setFinalOperation({
      title: "fillMissingValues",
      operations: { selectedColumns, fillMethod },
    });
    let check1 = selectedColumns.length > 0;
    let check2 = fillMethod != "";
    const result = ![check1, check2].includes(false);
    setValidInput(result);
  }, [selectedColumns, fillMethod]);

  return (
    <Box>
      <AllColumnsChips
        label={"Select columns to fill missing values:"}
        handleChange={setSelectedColumns}
      />
      <br />
      <Select
        title="Select the fill method:"
        dropdownValues={fillMethodValues}
        placeholder={"Fill Method"}
        handleChange={setFillMethod}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </Box>
  );
};

export default FillMissingValues;
