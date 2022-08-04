import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";

function DropColumns() {
  const [selectedColumns, setSelectedColumns] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    setFinalOperation({
      title: "dropColumns",
      operations: { selectedColumns },
    });
    selectedColumns.length > 0 ? setValidInput(true) : setValidInput(false);
  }, [selectedColumns]);

  return (
    <Box>
      <AllColumnsChips
        label={"Select columns for identifying duplicates:"}
        handleChange={setSelectedColumns}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </Box>
  );
}

export default DropColumns;
