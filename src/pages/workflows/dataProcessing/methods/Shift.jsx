import React, { useEffect, useState } from "react";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";
import NumericInput from "./NumericInput";

const Shift = () => {
  const [selectedColumns, setSelectedColumns] = useState("");
  const [shift, setShift] = useState("");
  const [validNumericInput, setValidNumericInput] = useState(false);
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);
  const updateValidInput = (value) => {
    setValidNumericInput(value);
  };

  useEffect(() => {
    setFinalOperation({
      title: "shift",
      operations: { selectedColumns, shift },
    });
    const check1 = selectedColumns.length > 0;
    const check2 = bins != "";
    const check3 = validNumericInput;
    const result = ![check1, check2, check3].includes(false);
    setValidInput(result);
  }, [selectedColumns, shift, validNumericInput]);

  return (
    <div>
      <AllColumnsChips
        label={"Columns to shift:"}
        handleChange={setSelectedColumns}
      />
      <br />
      <NumericInput
        title={"Number of periods to shift (1-1000):"}
        min={1}
        max={1000}
        handleChange={setShift}
        updateValidInput={updateValidInput}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </div>
  );
};

export default Shift;
