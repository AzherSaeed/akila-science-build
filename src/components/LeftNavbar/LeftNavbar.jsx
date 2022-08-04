import React from "react";
import { Link } from "react-router-dom";
import {
  connections,
  database,
  circle,
  eye,
  brain,
  calendar,
  home,
  documentIcon,
} from "@assets/index";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from "@mui/material";
const icons = [
  {
    text: "Home",
    image: home,
    dashboardLink: "/workflows/home",
  },
  {
    text: "Data Connections",
    image: connections,
    dashboardLink: "/workflows/data-connections",
  },
  { text: "My Data", image: database, dashboardLink: "/workflows/my-data" },
  {
    text: "Data Processing",
    image: circle,
    dashboardLink: "/workflows/data-processing",
  },
  {
    text: "Visualizations",
    image: eye,
    dashboardLink: "/workflows/visualizations",
  },
  {
    text: "Machine Learning",
    image: brain,
    dashboardLink: "/workflows/machine-learning",
  },
  { text: "Scheduler", image: calendar, dashboardLink: "/workflows/scheduler" },
  {
    text: "Documentation",
    image: documentIcon,
    dashboardLink: "/documentation",
  },
];

function LeftNavbar() {
  return (
    <div>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            width: "15vw",
            paddingTop: "15vh", // ensures the icons are not behind the Appbar
            height: "80vh",
          },
        }}
        sx={{
          position: "static",
          width: "15vw", // ensure the main content does not go behind the toolbar
          height: "80vh",
        }}
      >
        <Box>
          <List>
            {icons.map((item, idx) => (
              <Link to={item.dashboardLink} key={idx}>
                <ListItem
                  button
                  key={item.text}
                  sx={{ color: "black", marginTop: "1vh" }}
                >
                  <ListItemIcon>
                    <img src={item.image} alt="" height="30px" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
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

export default LeftNavbar;
