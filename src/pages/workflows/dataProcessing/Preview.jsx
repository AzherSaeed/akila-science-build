import React, { useEffect } from "react";
import { Box } from "@mui/material";

function Preview() {
  return (
    <div>
      <Box mt="4rem">
        <p className="model-heading-text"> Preview</p>

        <Box mt="2.5rem" display="flex">
          <button className="modal-small-text submit-btn">Preview</button>
          <Box ml="2rem">
            <button px="2rem" className="modal-small-text submit-btn">
              Hide
            </button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Preview;
