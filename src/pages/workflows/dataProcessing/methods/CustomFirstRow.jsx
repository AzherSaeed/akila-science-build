import React, { useEffect, useState } from "react";
import AllColumnsSelect from "./AllColumnsSelect";

function CustomFirstRow({ finalOperation, updateFinalOperation }) {
  const [selectedColumns, setSelectedColumns] = useState([]);
  const temp = finalOperation;
  temp[0] = { column: selectedColumns };

  useEffect(() => {
    temp[0] = { column: selectedColumns };
    updateFinalOperation(temp);
  }, [selectedColumns]);
  return (
    <>
      <AllColumnsSelect handleChange={setSelectedColumns} />
    </>
  );
}

export default CustomFirstRow;
