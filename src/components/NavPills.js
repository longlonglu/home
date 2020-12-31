import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Grid from "@material-ui/core/Grid"
import styles from "assets/styles/components/navPillsStyle"

const useStyles = makeStyles(styles)

export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active)
  const handleChange = (event, active) => {
    setActive(active)
  }
  const handleChangeIndex = (index) => {
    setActive(index)
  }
  const classes = useStyles()
  const { tabs, direction, color, horizontal, alignCenter } = props
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined,
  })
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone,
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {}
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined,
        })
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper,
            }}
          />
        )
      })}
    </Tabs>
  )
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop, key) => {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          )
        })}
      </SwipeableViews>
    </div>
  )
  return horizontal !== undefined ? (
    <Grid container>
      <Grid item {...horizontal.tabsGrid}>
        {tabButtons}
      </Grid>
      <Grid item {...horizontal.contentGrid}>
        {tabContent}
      </Grid>
    </Grid>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  )
}

NavPills.defaultProps = {
  active: 0,
  color: "primary",
}

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node,
    })
  ).isRequired,
  color: "primary",
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object,
  }),
  alignCenter: PropTypes.bool,
}
