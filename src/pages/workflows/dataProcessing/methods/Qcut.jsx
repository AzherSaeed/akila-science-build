import React, { useEffect, useState } from "react";
import NumericInput from "./NumericInput";
import AllColumnsSelect from "./AllColumnsSelect";
import SaveButton from "./SaveButton";

const Qcut = () => {
  const [selectedColumn, setSelectedColumn] = useState("");
  const [bins, setBins] = useState("");
  const [validNumericInput, setValidNumericInput] = useState(true);
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  const updateValidInput = (value) => {
    setValidNumericInput(value);
  };

  useEffect(() => {
    setFinalOperation({ title: "cut", operations: { selectedColumn, bins } });
    const check1 = selectedColumn ? true : false;
    const check2 = bins != "";
    const check3 = validNumericInput;
    const result = ![check1, check2, check3].includes(false);
    setValidInput(result);
  }, [selectedColumn, bins, validNumericInput]);
  return (
    <>
      <AllColumnsSelect
        title={"Select columns to apply Q Cut:"}
        handleChange={setSelectedColumn}
      />
      <br />
      <NumericInput
        title={"Number of bins (1-100):"}
        min={1}
        max={100}
        handleChange={setBins}
        updateValidInput={updateValidInput}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default Qcut;
