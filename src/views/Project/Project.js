import React, { useEffect } from "react"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../Header/Header"
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import HeaderLinks from "../Header/HeaderLinks.js"
import Parallax from "components/Parallax.js"
import Divider from "@material-ui/core/Divider"
import styles from "assets/jss/material-kit-react/views/enrollment.js"
import WorkSection from "./WorkSection.js"
import bottonRightNav from "assets/jss/buttonRightNav"
import cover from "../../store/ProgramStore/store"

const dashboardRoutes = []
const useStyles = makeStyles(styles)
const bottonRightNavSytles = makeStyles(bottonRightNav)
export default function Contact(props) {
  const classes = useStyles()
  const bottonRightNavClasses = bottonRightNavSytles()
  const { ...rest } = props
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Some Preschool"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "littleWhite",
        }}
        {...rest}
      />
      <Parallax filter image={cover.img}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{cover.title}</h1>
              <h4>{cover.description}</h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WorkSection />
        </div>
      </div>
    </div>
  )
}
