import React, { useEffect, useState } from "react";
import Select from "./Select";
import AllColumnsSelect from "./AllColumnsSelect";
import SaveButton from "./SaveButton";

const ValueCounts = () => {
  const dropdownValues = [
    { value: "true", key: "True" },
    { value: "false", key: "False" },
  ];

  const [selectedColumn, setSelectedColumn] = useState("");
  const [normalize, setNormalize] = useState("");
  const [sort, setSort] = useState("");
  const [ascending, setAscending] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    setFinalOperation({
      title: "valueCounts",
      operations: { selectedColumn, normalize, sort, ascending },
    });
    const check1 = selectedColumn ? true : false;
    const check2 = normalize != "";
    const check3 = sort != "";
    const check4 = ascending != "";
    const result = ![check1, check2, check3, check4].includes(false);
    setValidInput(result);
  }, [selectedColumn, normalize, sort, ascending]);

  return (
    <>
      <AllColumnsSelect
        title={"Select column to perform value counts:"}
        handleChange={setSelectedColumn}
      />
      <br />
      <Select
        title="Normalize: if True then the object returned will contain the relative frequencies of the unique values:"
        dropdownValues={dropdownValues}
        placeholder={"Normalize"}
        handleChange={setNormalize}
      />
      <br />
      <Select
        title="Sort: sort by frequencies:"
        dropdownValues={dropdownValues}
        placeholder={"Sort"}
        handleChange={setSort}
      />
      <br />
      <Select
        title="Sort in ascending order:"
        dropdownValues={dropdownValues}
        placeholder={"Ascending"}
        handleChange={setAscending}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default ValueCounts;
