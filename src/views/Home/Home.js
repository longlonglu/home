import React, { useEffect } from "react"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../Header/Header"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Parallax from "../../components/Parallax"
import HeaderLinks from "../Header/HeaderLinks"
import styles from "assets/jss/material-kit-react/views/components.js"
import bottonRightNav from "../../assets/jss/buttonRightNav"
import WorkSection from "./WorkSection.js"
import { cover } from "../../store/HomeStore/store"

const useStyles = makeStyles(styles)
const bottonRightNavSytles = makeStyles(bottonRightNav)

export default function Home(props) {
  useEffect(() => {
    document.title = "Some Preschool Home"
  })
  const classes = useStyles()
  const bottonRightNavClasses = bottonRightNavSytles()
  const { ...rest } = props
  return (
    <div>
      <Header
        brand="Some Preschool"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/image1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>{cover.title}</h1>
                <h3 className={classes.subtitle}>{cover.description}</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <WorkSection />
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
