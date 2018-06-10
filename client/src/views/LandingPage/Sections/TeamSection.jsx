import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/20840740_1628923867149762_3908633823514779756_n.jpg?_nc_cat=0&oh=057f3bf7d3f839668633852cbc9f3c74&oe=5BC3D5AA"
                    alt="..."
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Shreyas BM
                  <br />
                  <small className={classes.smallTitle}>
                    Research Staff at Indian Institute of Science
                  </small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-instagram"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-facebook"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/33308713_2067524643257945_878110856850702336_n.jpg?_nc_cat=0&oh=9ded13a917467590a30263eca3560258&oe=5BBF4838"
                    alt="..."
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Shabaz Ahmed
                  <br />
                  <small className={classes.smallTitle}>
                    Software Developer at Microsoft
                  </small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/22406506_1966787010204342_8787382099513993494_n.jpg?_nc_cat=0&oh=5609d793b2bad05516da1bf0e371c194&oe=5BA8377F"
                    alt="..."
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Nikhil NJ
                  <br />
                  <small className={classes.smallTitle}>
                    Data Scientist at LinkedIn
                  </small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-instagram"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-facebook"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={2} />
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/12373266_10153362019585677_2562709341862387856_n.jpg?_nc_cat=0&oh=dfde39c688bb567b3aeef4050f452048&oe=5BABFEF4"
                    alt="..."
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Maaz Adeeb
                  <br />
                  <small className={classes.smallTitle}>
                    Software Developer at SAP Labs
                  </small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-instagram"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-facebook"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Sharath Holla
                  <br />
                  <small className={classes.smallTitle}>
                    Senior Software Developer at Microsoft
                  </small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-instagram"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-facebook"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={2} />
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
