import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { home } from "@assets/index";

function DocumentationLeftNavbar(props) {
  const { methods } = props;
  return (
    <div>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            width: "15vw",
            marginTop: "40vh", // ensures the icons are not behind the Appbar
            height: "80vh",
          },
        }}
        sx={{
          position: "static",
          width: "15vw",
          height: "80vh",
        }}
      >
        <Box>
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
            {methods.map((item) => (
              <Link to={item.path}>
                <ListItem
                  button
                  key={item.name}
                  sx={{ color: "black", paddingTop: "0px" }}
                >
                  <ListItemText
                    primary={item.name}
                    color="black"
                    sx={{ paddingLeft: "10px" }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default DocumentationLeftNavbar;
