import React, { useState } from "react";
import { Box } from "@mui/system";
import styles from "./home.module.scss";

const LoadData = () => {
  const [fileName, setFileName] = useState();
  return (
    <Box>
      <Box>
        <Box>
          <h4 mt={2} className={styles["load-head"]}>
            Load Data
          </h4>
        </Box>
      </Box>
      <Box className={styles["loadData-section"]}>
        <Box mt="2.3rem" sx={{ display: "flex", alignItems: "center" }} gap={2}>
          <label className={styles["btn-blue"]}>
            Choose File
            <input
              onChange={(event) => setFileName(event.target.files[0].name)}
              type="file"
              style={{ display: "none" }}
              name="image"
            />
          </label>
          <p className={styles["btn-blue-text"]}>
            {fileName ? fileName : "No file Choosen"}
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default LoadData;
