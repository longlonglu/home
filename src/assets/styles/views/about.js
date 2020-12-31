import { container, title } from "assets/styles/material-kit-react"

const aboutStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  mainRaised: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#7B84DB",
    textDecoration: "none",
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem",
    borderRadius: "6px !important",
  },
}

export default aboutStyle
