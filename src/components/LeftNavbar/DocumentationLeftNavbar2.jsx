import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Box } from "@mui/material";
import { home } from "@assets/index";
import DisplayList from "./DisplayList";
import dataProcessingMethods from "@utils/dataProcessingMethods";
import { mlModels } from "@utils/machineLearningModels";

function DocumentationLeftNavbar2() {
  return (
    <Box
      PaperProps={{
        sx: {
          overflow: "auto",
        },
      }}
      sx={{
        display: "flex",
        minWidth: "20vw",
        maxWidth: "20vw",
        height: "100%",
        overflow: "auto",
        top: "20vh",
        marginTop: "10vh",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          backgroundColor: "#ffffff",
          overflow: "auto",
          top: "15vh",
          minWidth: "20vw",
          maxWidth: "20vw",
        }}
        PaperProps={{
          sx: {
            zIndex: 1,
            overflow: "scroll",
            minWidth: "20vw",
            maxWidth: "20vw",
          },
        }}
      >
        <List>
          <Link to="/documentation">
            <ListItem
              button
              key="home-button"
              sx={{ color: "black", paddingTop: "0px", marginLeft: "10px" }}
            >
              <span width="5vw">
                <img src={home} alt="" height="25px" width="25px" />
              </span>
              <ListItemText
                primary="Home"
                color="black"
                sx={{
                  paddingLeft: "10px",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              />
            </ListItem>
          </Link>
          <DisplayList
            methods={dataProcessingMethods}
            title="Data Processing"
            path="data-processing"
          />
          <DisplayList
            methods={mlModels}
            title="Machine Learning"
            path="machine-learning"
          />
        </List>
      </Box>
    </Box>
  );
}

export default DocumentationLeftNavbar2;
