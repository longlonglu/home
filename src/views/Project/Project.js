import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../Header/Header"
import Grid from "@material-ui/core/Grid"
import HeaderLinks from "../Header/HeaderLinks.js"
import Parallax from "components/Parallax.js"
import styles from "assets/styles/views/project"
import NavPills from "components/NavPills.js"
import Camera from "@material-ui/icons/Camera"
import Palette from "@material-ui/icons/Palette"
import store from "../../assets/store/ProjectStore/store"
import Three from "../Home/ThreeTest"

const useStyles = makeStyles(styles)
export default function Contact(props) {
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
      <Parallax image={store.cover}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Three />
              <h1 className={classes.title}>{store.title}</h1>
              <h4>{store.description}</h4>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classes.mainRaised}>
        <div className={classes.container}>
          <Grid container justify="center">
            <Grid item xs={12} sm={12} md={8}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Demo",
                    tabIcon: Camera,
                    tabContent: (
                      <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={4}>
                          <a href={store.leetcodeProjctLink}>
                            <img
                              alt="..."
                              src={store.leetcodeProjct}
                              className={classes.imgGallery}
                            />
                          </a>
                        </Grid>
                      </Grid>
                    ),
                  },
                  {
                    tabButton: "Source Code",
                    tabIcon: Palette,
                    tabContent: (
                      <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={4}>
                          <a href={store.leetcodeProjectSourceCodeLink}>
                            <img
                              alt="..."
                              src={store.leetcodeProjct}
                              className={classes.imgGallery}
                            />
                          </a>
                        </Grid>
                      </Grid>
                    ),
                  },
                ]}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}
