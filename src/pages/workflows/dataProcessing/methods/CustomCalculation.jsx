import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { DataProcessingContext } from "@contexts/DataProcessingContext";
import SaveButton from "./SaveButton";
import styles from "./CustomCalculation.module.css";

function CustomCalculation() {
  // #171649 light blue
  // #8b8ba5 light grey
  const { columnNames } = useContext(DataProcessingContext);
  const [formula, setFormula] = useState("");
  const [incorrectColumns, setIncorrectColumns] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [finalOperation, setFinalOperation] = useState("");
  const updateIncorrectColumns = (newCol) => {
    incorrectColumns.length === 0 && newCol ? setIncorrectColumns(newCol) : "";

    incorrectColumns.length > 0
      ? setIncorrectColumns(incorrectColumns + ", " + newCol)
      : "";
  };

  const displayColumns = () => {
    return columnNames.map((col) => {
      return (
        <li
          key={col}
          style={{ listStyleType: "none", cursor: "pointer" }}
          id={styles["customFormulaScrollBar"]}
          onClick={() => setFormula(formula + " " + "[" + col + "]")}
        >
          {col}
        </li>
      );
    });
  };

  useEffect(() => {
    const identifyColumns = /\[.*?\]/g;
    let enteredColumns = [...formula.matchAll(identifyColumns)];
    enteredColumns = enteredColumns.map((ele) => {
      return ele[0];
    });

    const cleanedColumns = enteredColumns.map((col) => {
      return col.replace(/[\[\]']+/g, "");
    });
    const nonMatchingColumns = cleanedColumns.filter(
      (col) => !columnNames.includes(col)
    );
    nonMatchingColumns.length > 0
      ? setIncorrectColumns(nonMatchingColumns.join(", "))
      : "";
    nonMatchingColumns.length === 0 ? setIncorrectColumns("") : "";
    //updateIncorrectColumns(incorrectColumns);
  }, [formula]);

  useEffect(() => {
    setFinalOperation({
      title: "customCalculation",
      operations: { formula },
    });
    const check1 = true;
    const result = ![check1].includes(false);
    setValidInput(result);
  }, [formula]);
  return (
    <>
      <Grid container columnSpacing={3} rowSpacing={3}>
        <Grid item xs={12} md={2}>
          <Box
            display="flex"
            flexDirection="column"
            minHeight="30vh"
            sx={{
              backgroundColor: "#171649",
              border: 1,
              borderColor: "#8b8ba5",
              marginLeft: "-5vw",
            }}
          >
            {displayColumns()}
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <Box>
            <TextField
              style={{
                width: "50vw",
                height: "25vh",
                marginBottom: "1vh",
              }}
              type="text"
              label="label"
              value={formula}
              InputProps={{ style: { fontSize: "12", color: "white" } }}
              variant="outlined"
              multiline
              onChange={(e) => setFormula(e.target.value)}
              rows={3}
            />
            <Box
              backgroundColor="red"
              style={{ display: incorrectColumns.length > 0 ? "" : "none" }}
            >
              <Typography
                fontSize="20"
                color="white"
                backgroundColor="red"
                sx={{ padding: "2%" }}
              >
                {incorrectColumns.length > 0
                  ? "Error: the following columns could not be found:" +
                    incorrectColumns
                  : ""}{" "}
                <br />
              </Typography>
            </Box>
            <br />
            <Typography>
              <Typography fontWeight={1000}>
                Custom Formula Builder <br />
              </Typography>
              Select columns from the left. The following symbols can be
              utilized to build formulas: +, -, *, /, (, ) <br />
              Note: all columns need to be surrounded by square brackets and
              they're case sensitive
              <br />
              <br />
              An example query looks like this: ([Column 1] + [Column 2]) *
              [Column 3] <br /> <br />
            </Typography>
          </Box>
          <SaveButton finalOperation={finalOperation} disabled={validInput} />
        </Grid>
      </Grid>
    </>
  );
}

export default CustomCalculation;
