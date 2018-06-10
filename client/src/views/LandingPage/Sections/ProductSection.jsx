import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Public from "@material-ui/icons/Public";
import LockOpen from "@material-ui/icons/LockOpen";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Why Loan-Block?</h2>
            <h5 className={classes.description}>
              Loan-Block has robust reviewing process to generate RPs
              (Reputation Points) which decides the credit limit, loan interest
              rates and the ability to influence the chain. Either it be a
              wealthy person or a layman, all receive the RPs only based on
              their loan lending/repaying discipline.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Transparent"
                description="Blockchain technology ensures the data integrity."
                icon={LockOpen}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Better rate of interest"
                description="Dynamic interest rates based on their Reputation Points"
                icon={Public}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="P2P rewarding system"
                description="Ability to earn good Reputation Points by actively participating in the community"
                icon={People}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
