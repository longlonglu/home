import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Button from "@material-ui/core/Button"
import styles from "../../assets/styles/components/headerLinksStyle"
import { Link } from "react-router-dom"

const useStyles = makeStyles(styles)

export default function HeaderLinks() {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={"/"}>
          <Button color="transparent" className={classes.navLink}>
            Home
          </Button>
        </Link>
        <Link to={"/project"}>
          <Button color="transparent" className={classes.navLink}>
            Project
          </Button>
        </Link>
        <Link to={"/about"}>
          <Button color="transparent" className={classes.navLink}>
            About
          </Button>
        </Link>
      </ListItem>
    </List>
  )
}
