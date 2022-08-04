import React, { useEffect, useState } from "react";
import AllColumnsSelect from "./AllColumnsSelect";
import SaveButton from "./SaveButton";
import NumericInput from "./NumericInput";
import Select from "./Select";

const RollingCalculations = () => {
  const dropdownValues = [
    { value: "rollingSum", key: "Rollilng Sum" },
    { value: "rollingSubtraction", key: "Rolling Subtraction" },
    { value: "rollingPctChange", key: "Rolling Percentage Change" },
  ];
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [calculation, setCalculation] = useState("");
  const [lookbackPeriod, setLookbackPeriod] = useState("");
  const [validNumericInput, setValidNumericInput] = useState(true);
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  const updateValidInput = (value) => {
    setValidNumericInput(value);
  };

  useEffect(() => {
    setFinalOperation({
      title: "rollingCalculations",
      operations: { selectedColumns, calculation, lookbackPeriod },
    });
    const check1 = selectedColumns ? true : false;
    const check2 = calculation != "";
    const check3 = validNumericInput;
    const result = ![check1, check2, check3].includes(false);
    setValidInput(result);
  }, [selectedColumns, calculation, validNumericInput, lookbackPeriod]);

  return (
    <>
      <AllColumnsSelect
        title={"Select columns to calculate rolling calculation:"}
        handleChange={setSelectedColumns}
      />
      <br />
      <Select
        title="Select the calculation method:"
        dropdownValues={dropdownValues}
        placeholder={"Calculation"}
        handleChange={setCalculation}
      />
      <br />
      <NumericInput
        title={"Set the lookback period (1-1000):"}
        min={1}
        max={1000}
        handleChange={setLookbackPeriod}
        updateValidInput={updateValidInput}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default RollingCalculations;
