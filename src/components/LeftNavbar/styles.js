export const classes = () => ({
  listItemIcon: {
    minWidth: "100px",
  },
  listItemText: {
    fontSize: "1.5rem",
  },
  drawer: {
    background: "#FFF",
    position: "static",
    transition: "width .7s",
  },
  closed: {
    width: "0px",
  },
  opened: {
    width: "15vw",
    height: "100vh", // this needs to match container height in WorkflowHome/styles.js
  },
  leftNavLinks: {
    color: "black",
    padding: "0px 0vh 0px 5px",
  },
  LeftNavbar: {
    width: "15vw",
  },
});
