import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Select from "./Select";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";

function DropDuplicates() {
  const [selectedColumns, setSelectedColumns] = useState("");
  const [dropMethod, setDropMethod] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  const dropdownValues = [
    { value: "first", key: "Keep First, Drop All Others" },
    { value: "last", key: "Keep Last, Drop All Others" },
    { value: "drop", key: "Drop All Duplicates" },
  ];

  useEffect(() => {
    setFinalOperation({
      title: "dropDuplicates",
      operations: { selectedColumns, dropMethod },
    });
    let check1 = selectedColumns.length > 0;
    let check2 = dropMethod != "";
    const result = ![check1, check2].includes(false);
    setValidInput(result);
  }, [selectedColumns, dropMethod]);

  return (
    <Box>
      <AllColumnsChips
        label={"Select columns for identifying duplicates:"}
        handleChange={setSelectedColumns}
      />
      <br />
      <Select
        title="Select the drop method:"
        dropdownValues={dropdownValues}
        placeholder={"Values to Keep"}
        handleChange={setDropMethod}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </Box>
  );
}

export default DropDuplicates;
