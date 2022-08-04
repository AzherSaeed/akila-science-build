import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import AllColumnsSelect from "./AllColumnsSelect";
import InputText from "./InputText";
import SaveButton from "./SaveButton";

function RenameColumns() {
  const [selectedColumns, setSelectedColumns] = useState("");
  const [newColumnName, setNewColumnName] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    setFinalOperation({
      title: "renameColumn",
      operations: { selectedColumns, newColumnName },
    });
    let check1 = selectedColumns ? true : false;
    let check2 = newColumnName != "";
    const result = ![check1, check2].includes(false);
    setValidInput(result);
  }, [selectedColumns, newColumnName]);

  return (
    <Box>
      <AllColumnsSelect
        handleChange={setSelectedColumns}
        title="Column to rename:"
      />
      <br />
      <InputText
        value={newColumnName}
        onChange={setNewColumnName}
        placeholder="New Column Name"
      />

      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </Box>
  );
}

export default RenameColumns;
