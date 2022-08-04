import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ButtonGroup from "@components/ButtonsGroup/ButtonGroup";
import LoadData from "../dataProcessing/LoadData";
import RadioScrollModel from "@components/RadioButtonsScroll/RadioScrollModel";
import TabsContainer from "@components/TabsContainer/TabsContainer";
import Dual from "./Dual";
import ClassWeight from "./ClassWeight";
import SelectModel from "./SelectModel";
import C from "./Gamma";
import HiddenLayerSizes from "./HiddenLayerSizes";
import Activation from "./Activation";
import Kernal from "./Kernal";
import Gamma from "./Gamma";

export const modelLabelContext = React.createContext();
export const getValueContext = React.createContext();

const ModelingRightSide = () => {
  const options = [
    "Logistic Model",
    "Support Vector Machine",
    "Neural Network",
  ];
  const [getMyComponent, setGetMyComponent] = useState(null);
  const [radioComponent, setRadioComponent] = useState(null);
  const [newLabels, setNewLabels] = useState(null);

  let [tabValue, setTabValue] = useState("");

  const getTabValue = (value) => {
    setTabValue(value);
    console.log(value);
  };
  const modelLabels = [
    {
      title: "Logistic Model",
      labels: [
        "Dual",
        "Class Weight",
        "Penalty",
        "Tolerance",
        "C",
        "Fit Intercept",
        "Intercept Scaling",
        "Solver",
        "Max Iterations",
        "Multi Class",
        "Warm Start",
        "L1 Ratio",
      ],
    },
    {
      title: "Support Vector Machine",
      labels: [
        "Kernel",
        "Gamma",
        "C",
        "Degree",
        "coef0",
        "Shrinking",
        "Probability",
        "Tolerance",
        "Decision Function Shape",
        "Class Weight",
        "Break Ties",
      ],
    },
    {
      title: "Neural Network",
      labels: [
        "Hidden Layer Sizes",
        "Activation",
        "Solver",
        "Alpha",
        "Batch Size",
        "Learning Rate",
        "Learning Rate Init",
        "Power T",
        "Max Iterations",
        "Shuffle",
        "Random State",
        "Tolerance",
        "Warm Start",
        "Momentum",
        "Nesterovs Momentum",
        "Early Stopping",
        "Validation Fraction",
        "Beta 1",
        "Beta 2",
        "Epsilon",
        "Max Number of Epochs",
        "Max Function",
      ],
    },
  ];
  const dataTransforms = [
    {
      title: "Dual",
      component: Dual,
    },
    {
      title: "Class Weight",
      component: ClassWeight,
    },
    {
      title: "Kernel",
      component: Kernal,
    },
    {
      title: "Activation",
      component: Activation,
    },
    {
      title: "Hidden Layer Sizes",
      component: HiddenLayerSizes,
    },
    {
      title: "Gamma",
      component: Gamma,
    },
  ];

  const getValue = (value) => {
    const result = dataTransforms.find((data) => value === data.title);

    setGetMyComponent(result.component);
  };

  const getModelValue = (value) => {
    const result = modelLabels.find((data) => value === data.title);
    setNewLabels(result);
  };

  const tabs = ["Numeric Variable", "Categorical Variable", "Target Variable"];
  const labels = [
    "Dual",
    "Class Weight",
    "Penalty",
    "Tolerance",
    "C",
    "Fit Intercept",
    "Intercept Scaling",
    "Solver",
    "Max Iterations",
    "Multi Class",
    "Warm Start",
    "L1 Ratio",
  ];
  return (
    <Box id="modeling-right-side" mt="3rem">
      <Container>
        <Box>
          <h4 mt={2} className="load-head">
            Load Data
          </h4>
        </Box>
        <LoadData />
        <Box mt="8rem">
          <h3 className="model-heading-text">Specify Key Variables</h3>
          <Box mt="2.3rem">
            <p className="model-subheading-text">
              Identify the different types of variable
            </p>
          </Box>
          <Box mt="2.3rem">
            <TabsContainer tabs={tabs} sendTabValue={getTabValue} />
          </Box>
          <Box mt="2rem">
            <p className="model-subheading-text">
              Select the appropriate for each variable type
            </p>
            <Grid
              container
              mt={3}
              alignItems="center"
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item xs={12} md={5} lg={5}>
                <Box
                  sx={{
                    height: "146px",
                    bgcolor: "rgba(255, 255, 255, 0.13);",
                  }}
                />
              </Grid>
              <Box
                display={{
                  xs: "none",
                  md: "unset",
                }}
                fontSize="6rem"
              >
                <Grid item md={2} lg={2}>
                  {" "}
                  <Box component="p" sx={{ lineHeight: 0, color: "#FFFFFF" }}>
                    &#8594;
                  </Box>
                  <Box component="p" color="#FFFFFF">
                    &#8592;
                  </Box>
                </Grid>
              </Box>
              <Box
                my="3rem"
                mx="auto"
                display={{
                  xs: "unset",
                  md: "none",
                }}
                fontSize="6rem"
              >
                <Grid item md={2} lg={2}>
                  {" "}
                  <Box
                    mx="auto"
                    component="p"
                    sx={{ lineHeight: 0, color: "#FFFFFF", marginLeft: "3rem" }}
                  >
                    &#8593;
                  </Box>
                  <Box
                    mx="auto"
                    component="p"
                    sx={{ lineHeight: 0, color: "#FFFFFF" }}
                  >
                    &#8595;
                  </Box>
                </Grid>
              </Box>
              <Grid xs={12} md={5} lg={5} item>
                <Box
                  sx={{
                    height: "146px",
                    bgcolor: "rgba(255, 255, 255, 0.13);",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt="8rem">
          <p className="model-heading-text">Select Model</p>
        </Box>
        <Box mt="2rem">
          <p className="model-subheading-text">Select the type of model</p>
          <ButtonGroup />
        </Box>
        <Box mt="2.3rem" className="model-subheading-text">
          <p>Build a new model</p>
          <Box className="select-model">
            <SelectModel sendModelValue={getModelValue} options={options} />
          </Box>
        </Box>
        <Box mt="8rem">
          <p className="model-heading-text">Model Parameters</p>
        </Box>
        <Box mt="2.3rem">
          <Grid container columnSpacing={3} rowSpacing={3}>
            <Grid item xs={12} lg={6}>
              <Box>
                <modelLabelContext.Provider value={labels}>
                  <getValueContext.Provider value={getValue}>
                    <RadioScrollModel newLabels={newLabels} />
                  </getValueContext.Provider>
                </modelLabelContext.Provider>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <p className="model-heading-text">Update Parameter</p>
              </Box>
              {!getMyComponent || getMyComponent === "undefined" ? (
                <Dual />
              ) : (
                getMyComponent
              )}
            </Grid>
          </Grid>
        </Box>
        <Box mt="8rem">
          <p className="model-heading-text"> Submit Model for Execution</p>
        </Box>
        <Box mt="2.5rem">
          <button className="modal-small-text submit-btn">Submit</button>
        </Box>
      </Container>
    </Box>
  );
};

export default ModelingRightSide;
