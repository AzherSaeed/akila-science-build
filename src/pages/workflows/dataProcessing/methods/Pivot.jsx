import React, { useEffect, useState } from "react";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";

const Pivot = () => {
  const [indexColumns, setIndexColumns] = useState("");
  const [newColumns, setNewColumns] = useState("");
  const [valueColumns, setValueColumns] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [finalOperation, setFinalOperation] = useState("");

  useEffect(() => {
    setFinalOperation({
      title: "pivot",
      operations: { indexColumns, newColumns, valueColumns },
    });
    const check1 = indexColumns != "";
    const check2 = newColumns != "";
    const check3 = valueColumns != "";
    const result = ![check1, check2, check3].includes(false);
    setValidInput(result);
  }, [indexColumns, newColumns, valueColumns]);

  return (
    <>
      <AllColumnsChips
        label={"ID Variables: column(s) to use as identifier variables:"}
        handleChange={setIndexColumns}
      />
      <br />
      <AllColumnsChips
        label={"New Columns: column(s) to use in the new dataset:"}
        handleChange={setNewColumns}
      />
      <br />
      <AllColumnsChips
        label={"Values: Column(s) to use for populating new frame’s values. :"}
        handleChange={setValueColumns}
      />
      <br />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default Pivot;
