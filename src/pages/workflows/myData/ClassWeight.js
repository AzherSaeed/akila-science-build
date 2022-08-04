import { Box } from "@mui/system";
import React from "react";
import Select from "../dataProcessing/methods/Select";

const ClassWeight = () => {
  const options = ["Class Weight", "Left on", "Right on"];
  return (
    <>
      <Box mt="3.2rem">
        <p className="model-subheading-text">Class Weight</p>
      </Box>
      <Box mt=".9rem">
        <Box mt="1.2rem" className="select-model2">
          <Select options={options} />
        </Box>
        <p className="modal-small-text line-Spacing">
          The “balanced” mode uses the values of y to automatically adjust
          weights inversely proportional to class frequencies in the input data
          as n_samples / (n_classes * np.bincount(y)).
        </p>
      </Box>
    </>
  );
};

export default ClassWeight;

