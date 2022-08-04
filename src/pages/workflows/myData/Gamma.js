import { Box } from "@mui/system";
import React from "react";
import Select from "../dataProcessing/methods/Select";

const Gamma = () => {
  const options = ["Gamma", "Left on", "Right on"];
  return (
    <>
      <Box mt="3.2rem">
        <p className="model-subheading-text">Gamma</p>
      </Box>
      <Box mt=".9rem">
        <Box mt="1.2rem" className="select-model2">
          <Select options={options} />
        </Box>
        <p className="modal-small-text line-Spacing">
          Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’. If gamma='scale'
          (default) is passed then it uses 1 / (n_features * X.var()) as value
          of gamma. If ‘auto’, uses 1 / n_features.
        </p>
      </Box>
    </>
  );
};

export default Gamma;

