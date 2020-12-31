import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../Header/Header"
import Grid from "@material-ui/core/Grid"
import Parallax from "../../components/Parallax"
import HeaderLinks from "../Header/HeaderLinks"
import styles from "assets/styles/views/home"
import WorkSection from "./WorkSection.js"
import store from "../../assets/store/HomeStore/store"
import Three from "./ThreeTest"

const useStyles = makeStyles(styles)

export default function Home(props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />

      <Parallax image={store.cover}>
        <div className={classes.container}>
          <Grid container>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <Three className={classes.threePosition} />

                <h1 className={classes.title}>{store.title}</h1>
                <h4>{store.description}</h4>
                <br />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Parallax>

      <div className={classes.mainRaised}>
        <WorkSection />
      </div>
    </div>
  )
}
