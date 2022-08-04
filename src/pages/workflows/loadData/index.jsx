import React, { useState } from "react";
import { DataProcessingContext } from "@contexts/DataProcessingContext";

function LoadData() {
  // this captures each processing method selected by the user and fed into the
  // pipeline component to display each selected method to the user
  let [pipeline, setPipeline] = useState([]);
  const updatePipeline = (newStep) => {
    const newPipeline = [...pipeline, newStep];
    setPipeline(newPipeline);
  };

  const columnNames = [
    "Column 1",
    "Column 2",
    "Column 3",
    "Column 4",
    "Column 5",
    "Column 6",
    "Column 7",
    "Column 8",
    "Column 9",
  ];
  return (
    <>
      <DataProcessingContext.Provider
        value={{ columnNames, updatePipeline }}
      ></DataProcessingContext.Provider>
    </>
  );
}

export default LoadData;
