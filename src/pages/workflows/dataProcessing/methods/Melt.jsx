import React, { useEffect, useState } from "react";
import AllColumnsChips from "./AllColumnsChips";
import SaveButton from "./SaveButton";

const Melt = () => {
  const [idVariables, setIdVariables] = useState("");
  const [variableNames, setVariableNames] = useState("");
  const [finalOperation, setFinalOperation] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    setFinalOperation({
      title: "melt",
      operations: { idVariables, variableNames },
    });
    const check1 = idVariables != "";
    const check2 = variableNames != "";
    const result = ![check1, check2].includes(false);
    setValidInput(result);
  }, [idVariables, variableNames]);

  return (
    <>
      <AllColumnsChips
        label={"ID Variables: column(s) to use as identifier variables:"}
        handleChange={setIdVariables}
      />
      <br />
      <AllColumnsChips
        label={"Variable Name: column(s) to unpivot:"}
        handleChange={setVariableNames}
      />
      <SaveButton finalOperation={finalOperation} disabled={validInput} />
    </>
  );
};

export default Melt;
