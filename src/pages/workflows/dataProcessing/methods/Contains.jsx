import React, { useEffect, useState } from "react";
import AllColumnsSelect from "./AllColumnsSelect";
import Select from "./Select";
import SaveButton from "./SaveButton";
import InputText from "./InputText";

const Contains = () => {
  const [selectedColumn, setSelectedColumn] = useState("");
  const [ignoreCase, setIgnoreCase] = useState("");
  const [string, setString] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [finalOperation, setFinalOperation] = useState("");

  const dropdownValues = [
    { value: "true", key: "True: ignore case" },
    { value: "false", key: "False: don't ignore case" },
  ];

  useEffect(() => {
    setFinalOperation({
      title: "contains",
      operations: { selectedColumn, ignoreCase, string },
    });

    const check1 = selectedColumn ? true : false;
    const check2 = ignoreCase != "";
    const check3 = string != "";
    const result = ![check1, check2, check3].includes(false);
    setValidInput(result);
  }, [selectedColumn, ignoreCase, string]);

  return (
    <>
      <AllColumnsSelect
        title={"Select columns to search for string:"}
        handleChange={setSelectedColumn}
      />
      <br />
      <Select
        title="Ignore the case:"
        dropdownValues={dropdownValues}
        placeholder={"Ignore Case"}
        handleChange={setIgnoreCase}
      />
      <br />
      <InputText
        value={string}
        onChange={setString}
        placeholder="Text to search for:"
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default Contains;
