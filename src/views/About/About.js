import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../Header/Header"
import Grid from "@material-ui/core/Grid"
import HeaderLinks from "../Header/HeaderLinks.js"
import Parallax from "components/Parallax"
import styles from "assets/styles/views/about"
import store from "assets/store/AboutStore/store"
import Three from "../Home/ThreeTest"
import WorkSection from "./WorkSection.js"

const useStyles = makeStyles(styles)

export default function About(props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />

      <Parallax image={require("assets/img/image2.jpg")}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Three />
              <h1 className={classes.title}>{store.title}</h1>
              <h4>{store.description}</h4>
              <br />
            </Grid>
          </Grid>
        </div>
      </Parallax>

      <div className={classes.mainRaised}>
        <div>
          <WorkSection />
        </div>
      </div>
    </div>
  )
}
