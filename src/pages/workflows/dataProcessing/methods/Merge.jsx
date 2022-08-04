import React, { useEffect, useState } from "react";
import Select from "./Select";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";
import LoadData from "../LoadData";

const Merge = () => {
  const [mergeMethod, setMergeMethod] = useState("");
  const [selectedColumns, setSelectedColumns] = useState("");
  const [selectedColumns2, setSelectedColumns2] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  const dropdownValues = [
    { value: "left", key: "Left" },
    { value: "right", key: "Right" },
    { value: "outer", key: "Outer" },
    { value: "inner", key: "Inner" },
  ];

  useEffect(() => {
    setFinalOperation({
      title: "mergeDatasets",
      operations: { selectedColumns, selectedColumns2, mergeMethod },
    });
    let check1 = mergeMethod != "";
    let check2 = selectedColumns.length > 0;
    let check3 = selectedColumns2.length > 0;
    const result = ![check1, check2, check3].includes(false);
    setValidInput(result);
  }, [mergeMethod, selectedColumns, selectedColumns2]);

  return (
    <>
      <LoadData />
      <Select
        title="Select the merge method:"
        dropdownValues={dropdownValues}
        placeholder={"How to merge"}
        handleChange={setMergeMethod}
      />
      <br />
      <AllColumnsChips
        label={"Select columns in the existing dataset to merge on:"}
        handleChange={setSelectedColumns}
      />
      <br />
      <AllColumnsChips
        label={"Select columns in the new dataset to merge on:"}
        handleChange={setSelectedColumns2}
      />
      <br />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default Merge;
