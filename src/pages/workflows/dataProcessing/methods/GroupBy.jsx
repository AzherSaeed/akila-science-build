import React, { useEffect, useState } from "react";
import Select from "./Select";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";

const GroupBy = () => {
  const [selectedColumns, setSelectedColumns] = useState("");
  const [aggregateMethod, setAggregateMethod] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);
  const dropdownValues = [
    { value: "count", key: "Count" },
    { value: "average", key: "Average" },
    { value: "median", key: "Median" },
    { value: "min", key: "Min" },
    { value: "max", key: "Max" },
    { value: "standard-deviation", key: "Standard Deviation" },
    { value: "sum", key: "Sum" },
    { value: "variance", key: "Variance" },
  ];
  useEffect(() => {
    setFinalOperation({
      title: "groupBy",
      operations: { selectedColumns, aggregateMethod },
    });
    let check1 = selectedColumns.length > 0;
    let check2 = aggregateMethod != "";
    const result = ![check1, check2].includes(false);
    setValidInput(result);
  }, [selectedColumns, aggregateMethod]);
  return (
    <>
      <AllColumnsChips
        label={"Select columns to group by:"}
        handleChange={setSelectedColumns}
      />
      <br />
      <Select
        title="Select the aggregate method:"
        dropdownValues={dropdownValues}
        placeholder={"Aggregate Method"}
        handleChange={setAggregateMethod}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default GroupBy;
