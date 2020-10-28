import React, { useEffect } from "react"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import Camera from "@material-ui/icons/Camera"
import Palette from "@material-ui/icons/Palette"
import Header from "../Header/Header"
import Button from "@material-ui/core/Button"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import HeaderLinks from "../Header/HeaderLinks.js"
import NavPills from "components/NavPills.js"
import Parallax from "../../components/Parallax"
import bottonRightNav from "../../assets/jss/buttonRightNav"
import studio3 from "assets/img/image6.jpeg"
import studio4 from "assets/img/image5.jpeg"
import studio5 from "assets/img/image7.jpg"
import work1 from "assets/img/image1.jpg"
import work2 from "assets/img/image2.jpg"
import work3 from "assets/img/image3.jpeg"
import work4 from "assets/img/image4.jpg"
import work5 from "assets/img/image5.jpeg"
import styles from "assets/jss/material-kit-react/views/about.js"

const useStyles = makeStyles(styles)
const bottonRightNavSytles = makeStyles(bottonRightNav)

export default function About(props) {
  useEffect(() => {
    document.title = "Some Preschool About"
  })
  const classes = useStyles()
  const bottonRightNavClasses = bottonRightNavSytles()

  const { ...rest } = props
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
  return (
    <div>
      <Header
        color="transparent"
        brand="Some Preschool"
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
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>About</h1>
                <h4 className={classes.subtitle}>This Is An About Page</h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>{" "}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                {/* <div className={classes.brand}>
                  <h1 className={classes.title}>Some Preschool</h1>
                </div> */}
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Some Preschool</h3>
                    <div className={classes.description}>
                      Once You Finish This Sentence, You Will Lose 2 Seconds In
                      Your Life.
                    </div>
                    <div className={classes.description}>Follow Us On:</div>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Saito Asuka",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "BackGround",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div className={bottonRightNavClasses.buttonRight}>
        <a className={bottonRightNavClasses.navText} href={"#01"}>
          01
        </a>
        <a className={bottonRightNavClasses.navText} href={"#02"}>
          02
        </a>
      </div>
    </div>
  )
}
