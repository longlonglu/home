import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import styles from "../../assets/styles/views/workStyle"

const useStyles = makeStyles(styles)

export default function WorkSection() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.section}>
        <Grid container justify="center">
          <Grid item cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Longlong Lu</h2>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Still Working For It</h2>
          </Grid>
        </Grid>
        <Divider />
      </div>
    </>
  )
}
