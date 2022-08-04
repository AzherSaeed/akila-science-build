import React, { useEffect, useState } from "react";
import LoadData from "../LoadData";
import Select from "./Select";
import SaveButton from "./SaveButton";

const Concat = () => {
  const [concatMethod, setConcatMethod] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  const dropdownValues = [
    { value: "vertical", key: "Append vertically" },
    { value: "horizontal", key: "Append horizontally" },
  ];

  useEffect(() => {
    setFinalOperation({ title: "concat", operations: { concatMethod } });
    let check = concatMethod != "";
    setValidInput(check);
  }, [concatMethod]);

  return (
    <div>
      <LoadData />
      <Select
        title="Select the concat method:"
        dropdownValues={dropdownValues}
        placeholder={"Concat method"}
        handleChange={setConcatMethod}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </div>
  );
};

export default Concat;
