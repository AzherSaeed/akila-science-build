import { Box } from "@mui/system";
import React from "react";
import Select from "../dataProcessing/methods/Select";

const Activation = () => {
  const options = ["Activation", "Left on", "Right on"];
  return (
    <>
      <Box mt="3.2rem">
        <p className="model-subheading-text">Activation</p>
      </Box>
      <Box mt=".9rem">
        <Box mt="1.2rem" className="select-model2">
          <Select options={options} />
        </Box>
        <p className="modal-small-text line-Spacing">
          Dual or primal formulation. Dual formulation is only implemented for
          12 penalty with liblinear solver. Prefer dual=False when n_samples
          n_features
        </p>
      </Box>
    </>
  );
};

export default Activation;

