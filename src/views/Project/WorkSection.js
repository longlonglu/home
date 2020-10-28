import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import styles from "assets/jss/material-kit-react/views/workStyle.js"

const useStyles = makeStyles(styles)

export default function WorkSection(props) {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}></GridItem>
      </GridContainer>
    </div>
  )
}
