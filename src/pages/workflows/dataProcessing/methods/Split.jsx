import React, { useEffect, useState } from "react";
import AllColumnsSelect from "./AllColumnsSelect";
import SaveButton from "./SaveButton";
import InputText from "./InputText";

function Split() {
  const [selectedColumn, setSelectedColumn] = useState("");
  const [splitOn, setSplitOn] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [finalOperation, setFinalOperation] = useState("");

  useEffect(() => {
    setFinalOperation({
      title: "split",
      operations: { selectedColumn, splitOn },
    });
    const check1 = selectedColumn ? true : false;
    const check2 = splitOn != "";
    const result = ![check1, check2].includes(false);
    setValidInput(result);
  }, [selectedColumn, splitOn]);

  return (
    <>
      <AllColumnsSelect
        title={"Select columns to split on:"}
        handleChange={setSelectedColumn}
      />
      <InputText
        value={splitOn}
        onChange={setSplitOn}
        placeholder="String to Split On"
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
}

export default Split;
