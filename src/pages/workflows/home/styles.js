export const styles = {
  container: {
    display: "flex",
    backgroundColor: "yellow",
  },
  main: {
    backgroundColor: "green",
    color: "black",
    paddingLeft: "3%",
    fontSize: "5rem",
  },
  sortProjects: {
    maxWidth: "20vw",
    margin: "2% 0%",
  },
  card: {
    height: "30vh",
    width: "15vw",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: {
    display: "flex",
    flex: "0 1 auto",
    paddingBottom: 0,
    marginBottom: "10px",
    maxHeight: "5vh",
    fontWeight: "600",
  },
  cardDescription: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto", // ensures the description fills up the card space
    alignItems: "flex-start", // centers vertically
    maxHeight: "20vh",
    paddingBottom: 0,
  },
  cardDescriptionTitle: {
    justifyContent: "center",
    fontSize: "1.5rem",
    maxHeight: "5vh",
    fontWeight: "600",
  },
  cardDescriptionBody: {
    display: "-webkit-box",
    flex: "1 0 auto",
    overflow: "scroll",
    maxHeight: "100%",
    maxHeight: "10vh",
    paddingBottom: "0",
    paddingTop: "0",
  },
  cardLastModified: {
    display: "flex",
    flex: "0 1 auto",
    justifyContent: "center", // centers horizontally
    maxHeight: "5vh",
  },
  footerr: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "red",
    color: "white",
    zIndex: "1501",
    textAlign: "center",
    color: "white",
    minHeight: "10vh",
  },
};
