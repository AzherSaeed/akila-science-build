import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItem, ListItemText, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function DisplayList(props) {
  const { methods, title, path } = props;
  const location = useLocation();
  const [showList, setShowList] = useState("");
  const updateShowListOnClick = () => {
    //This works to display the list if the user clicks on the arrow
    showList === "" ? setShowList("none") : setShowList("");
  };

  const updateShowListOnRender = () => {
    const actualPath = location.pathname;
    const checkPath = actualPath.includes(path);
    checkPath ? setShowList("") : setShowList("none");
  };

  useEffect(() => {
    updateShowListOnRender();
  }, []);
  return (
    <Box>
      <ListItem>
        <ListItemText
          primary={title}
          color="black"
          sx={{
            width: "10vw", // ensures the drop down arrows are aligned
          }}
        />
        <ListItemText
          primary={<KeyboardArrowDownIcon />}
          onClick={() => {
            updateShowListOnClick();
          }}
          sx={{ cursor: "pointer" }}
        />
      </ListItem>
      <Box sx={{ display: showList }}>
        {methods.map((item, idx) => (
          <Link to={item.path} key={idx}>
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
      </Box>
    </Box>
  );
}

export default DisplayList;
