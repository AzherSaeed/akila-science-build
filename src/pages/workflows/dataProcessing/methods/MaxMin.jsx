import React, { useEffect, useState } from "react";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";
import Select from "./Select";

const MaxMin = () => {
  const dropdownValues = [
    { value: "max", key: "Max" },
    { value: "min", key: "Min" },
  ];
  const [selectedColumns, setSelectedColumns] = useState("");
  const [method, setMethod] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    setFinalOperation({ title: "maxMin", operations: { method } });
    const check1 = selectedColumns != "";
    const check2 = method != "";
    const result = ![check1, check2].includes(false);
    setValidInput(result);
  }, [selectedColumns, method]);

  return (
    <>
      <AllColumnsChips
        label={"Select columns to calculate the max or min:"}
        handleChange={setSelectedColumns}
      />
      <br />
      <Select
        title="Select the method:"
        dropdownValues={dropdownValues}
        placeholder={"Max/Min"}
        handleChange={setMethod}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default MaxMin;
