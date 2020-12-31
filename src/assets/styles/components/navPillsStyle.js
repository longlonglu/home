import { primaryColor } from "assets/styles/material-kit-react"

const navPillsStyle = (theme) => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
    lineHeight: "12px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit",
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  displayNone: {
    display: "none !important",
  },
  fixed: {
    overflow: "visible !important",
  },
  horizontalDisplay: {
    display: "block",
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "1px",
    minWidth: "150px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px",
  },
  pillsWithIcons: {
    borderRadius: "4px",
  },
  tabIcon: {
    width: "15px",
    height: "15px",
    display: "block",
    margin: "15px 0 !important",
    "&, & *": {
      letterSpacing: "normal !important",
    },
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0",
    },
  },
  contentWrapper: {
    marginTop: "20px",
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)",
    },
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabWrapper: {
    color: "inherit",
    position: "relative",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    "&,& *": {
      letterSpacing: "normal",
    },
  },
})

export default navPillsStyle
