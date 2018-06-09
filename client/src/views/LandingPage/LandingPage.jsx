import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Loan-Block"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 0,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Loan-Block.</h1>
                <h4>
                  A decentralized, peer-to-peer application to lend and borrow
                  money at a competitive rate of interest.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://youtu.be/Zxhj9Z-PnOw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fas fa-play"
                    style={{ marginRight: "0.75rem" }}
                  />See our pitch
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
