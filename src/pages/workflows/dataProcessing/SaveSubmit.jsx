import { Box } from "@mui/material";
import React from "react";

function SaveSubmit() {
  return (
    <div>
      <Box>
        <Box mt="4rem">
          <p className="model-heading-text">Save & Submit</p>
        </Box>
        <Box mt="2.5rem">
          <button className="modal-small-text submit-btn">Submit</button>
        </Box>
      </Box>
    </div>
  );
}

export default SaveSubmit;
