import React from "react"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import styles from "../../assets/jss/material-kit-react/views/workStyle.js"
import { Link } from "react-router-dom"

import studio1 from "assets/img/image1.jpg"
import studio3 from "assets/img/image6.jpeg"
import studio4 from "assets/img/image5.jpeg"
import studio5 from "assets/img/image7.jpg"
import work1 from "assets/img/image1.jpg"
import work2 from "assets/img/image2.jpg"
import work3 from "assets/img/image3.jpeg"
import work4 from "assets/img/image4.jpg"
import work5 from "assets/img/image5.jpeg"

const useStyles = makeStyles(styles)

export default function WorkSection() {
  const classes = useStyles()
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)

  return (
    <>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>The Some Preschool</h2>
            <h4 className={classes.description}>
              Once You Finish This Sentence, You Will Lose 2 Seconds In Your
              Life.
            </h4>
          </GridItem>
        </GridContainer>
        {/* <Divider /> */}
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Our mission</h2>
            <h4 className={classes.descriptionRed}>
              Some Preschool is committed to providing a program that focuses on
              the development of young children by creating enriching learning
              experiences through exploration, discovery and hands-on
              activities.
            </h4>
          </GridItem>
        </GridContainer>
        <Divider />

        {/* text align left     different font*/}
        <GridContainer justify="center">
          <GridItem cs={6} sm={6} md={4}>
            <h2 className={classes.title}>Our philosophy</h2>
            <h4 className={classes.descriptionLeft}>
              Some Preschool believes children are born eager and ready to
              learn! As educators, it is our responsibility to foster that
              learning by providing children with the opportunities that will
              allow them to create their own meanings to the world around them.
              We understand that it is not only important for children to
              develop the basic skills that will be the foundation for future
              learning, but they receive care from teachers who have a genuine
              love for children. TSP strives to provide exceptional care in a
              safe and nurturing environment, create an enriching learning
              experience for each child and seek out the most compassionate and
              qualified staff to care for your child.
            </h4>
            <Link to={"/contact"}>
              <Button color="primary" className={classes.navLink}>
                Contact Us
              </Button>
            </Link>
          </GridItem>
          {/* using li */}
          <GridItem cs={6} sm={6} md={4}>
            <h3 className={classes.title}>
              At Twinkling Stars Preschool the goals for children in our program
              are for them to:
            </h3>
            <ul>
              <li>
                <h4 className={classes.descriptionLeft}>
                  Be active and engaged learners.
                </h4>
              </li>
              <li>
                <h4 className={classes.descriptionLeft}>
                  Feel safe & secure when parents leave.
                </h4>
              </li>
              <li>
                <h4 className={classes.descriptionLeft}>
                  Develop positive relationships, self-confidence and
                  independence.
                </h4>
              </li>
              <li>
                <h4 className={classes.descriptionLeft}>
                  Appreciate cultural diversity. Have fun while learning!
                </h4>
              </li>
            </ul>
          </GridItem>
        </GridContainer>
        <Divider />
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Check out the fun!</h2>
          </GridItem>
          {/* img need to adjust size */}
          {/* need to change container */}
          <GridItem cs={12} sm={12} md={10}>
            <img src={studio1} alt="" className={classes.img} />
          </GridItem>
        </GridContainer>
        <Divider />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <img alt="..." src={studio3} className={navImageClasses} />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <img alt="..." src={studio5} className={navImageClasses} />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <img alt="..." src={studio4} className={navImageClasses} />
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <img alt="..." src={work1} className={navImageClasses} />
                <img alt="..." src={work2} className={navImageClasses} />
                <img alt="..." src={work3} className={navImageClasses} />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <img alt="..." src={work4} className={navImageClasses} />
                <img alt="..." src={work5} className={navImageClasses} />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </>
  )
}
