import { Box } from "@mui/system";
import React from "react";
import Select from "../dataProcessing/methods/Select";

const Kernal = () => {
  const options = ["Kernal", "Left on", "Right on"];
  return (
    <>
      <Box mt="3.2rem">
        <p className="model-subheading-text">Kernal</p>
      </Box>
      <Box mt=".9rem">
        <Box mt="1.2rem" className="select-model2">
          <Select options={options} />
        </Box>
        <p className="modal-small-text line-Spacing">
          Specifies the kernel type to be used in the algorithm. It must be one
          of ‘linear’, ‘poly’, ‘rbf’, ‘sigmoid’, ‘precomputed’ or a callable. If
          none is given, ‘rbf’ will be used. If a callable is given it is used
          to pre-compute the kernel matrix from data matrices; that matrix
          should be an array of shape (n_samples, n_samples).
        </p>
      </Box>
    </>
  );
};

export default Kernal;

