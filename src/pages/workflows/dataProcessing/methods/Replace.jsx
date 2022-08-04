import React, { useEffect, useState } from "react";
import AllColumnsSelect from "./AllColumnsSelect";
import Select from "./Select";
import SaveButton from "./SaveButton";
import InputText from "./InputText";

function Replace() {
  const [selectedColumn, setSelectedColumn] = useState("");
  const [ignoreCase, setIgnoreCase] = useState("");
  const [stringToReplace, setStringToReplace] = useState("");
  const [newString, setNewString] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [finalOperation, setFinalOperation] = useState("");

  const dropdownValues = [
    { value: "true", key: "True: ignore case" },
    { value: "false", key: "False: don't ignore case" },
  ];

  useEffect(() => {
    setFinalOperation({
      title: "replace",
      operations: { selectedColumn, ignoreCase, stringToReplace, newString },
    });
    const check1 = selectedColumn ? true : false;
    const check2 = ignoreCase != "";
    const check3 = stringToReplace != "";
    const check4 = newString != "";
    const result = ![check1, check2, check3, check4].includes(false);
    setValidInput(result);
  }, [selectedColumn, ignoreCase, stringToReplace, newString]);

  return (
    <>
      <AllColumnsSelect
        title={"Select columns to search for string:"}
        handleChange={setSelectedColumn}
      />
      <Select
        title="Ignore the case:"
        dropdownValues={dropdownValues}
        placeholder={"Ignore Case"}
        handleChange={setIgnoreCase}
      />
      <InputText
        value={stringToReplace}
        onChange={setStringToReplace}
        placeholder="String to Replace"
      />
      <InputText
        value={newString}
        onChange={setNewString}
        placeholder="New String"
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
}

export default Replace;
