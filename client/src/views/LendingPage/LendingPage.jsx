import React from "react";
import axios from "custom-axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "material-ui/List";
import { InputAdornment } from "material-ui/Input";
import Table, { TableRow, TableBody, TableCell } from "material-ui/Table";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

// const users = [
//   {
//     id: 1,
//     reputationPoints: 20,
//     firstName: "Maaz",
//     lastName: "Adeeb",
//     creditScore: 200,
//     city: "Test",
//     country: "India",
//     salary: 200000,
//     country: "India"
//   },
//   {
//     id: 2,
//     reputationPoints: 40,
//     firstName: "Maaz",
//     lastName: "Adeesdsadb",
//     creditScore: 200,
//     city: "Test",
//     country: "India",
//     salary: 400000,
//     country: "India"
//   },
//   {
//     id: 3,
//     reputationPoints: 60,
//     firstName: "Maaz",
//     lastName: "Adeecsafdsafb",
//     creditScore: 200,
//     city: "Test",
//     country: "India",
//     salary: 600000,
//     country: "India"
//   }
// ];

class LendingPage extends React.Component {
  state = {
    currentUserId: null,
    users: []
  };

  componentDidMount() {
    axios.get("/reviewedBorrowerList").then(response => {
      this.setState({
        users: response.data,
        currentUserId: response.data.length && response.data[0].ssn
      });
    });
  }

  handleApprove = () => {
    //alert(this.state.currentUserId + " " + this.approvedAmount.value);
  };

  render() {
    const { classes, ...rest } = this.props;
    const currentUser = this.state.currentUserId
      ? this.state.users.find(({ ssn: id }) => this.state.currentUserId === id)
      : null;
    return (
      <div>
        <Header
          color="transparent"
          brand="Loan-Block"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 0,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title} style={{ color: "#fff" }}>
                  Lend Money
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={4}>
                <List component="nav">
                  <ListSubheader>{`Available Endorsements (${
                    this.state.users.length
                  })`}</ListSubheader>
                  {this.state.users.map(
                    ({
                      firstname: firstName,
                      lastname: lastName,
                      reputationpoints: reputationPoints,
                      ssn: id
                    }) => {
                      return (
                        <ListItem
                          onClick={() => {
                            this.setState({ currentUserId: id });
                          }}
                          button
                          key={id}
                        >
                          <ListItemIcon>
                            <People />
                          </ListItemIcon>
                          <ListItemText
                            primary={firstName + " " + lastName}
                            secondary={reputationPoints}
                          />
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </GridItem>
              {currentUser && (
                <GridItem xs={12} sm={8}>
                  <h2>
                    {currentUser.firstname} {currentUser.lastname}
                  </h2>
                  <Table>
                    <TableBody>
                      {this.getReviewTableRow(
                        "Reputation Points",
                        currentUser.reputationpoints
                      )}
                      {this.getReviewTableRow(
                        "Credit Score",
                        currentUser.creditscore
                      )}
                      {this.getReviewTableRow(
                        "Loan Amount Requested",
                        currentUser.loanamount
                      )}
                      {this.getReviewTableRow("Interest Rate", "7.8")}
                    </TableBody>
                  </Table>
                  <CustomInput
                    labelText="Approved amount..."
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      inputRef: input => (this.approvedAmount = input),
                      type: "number",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People />
                        </InputAdornment>
                      )
                    }}
                  />
                  <Button onClick={this.handleApprove} color="primary">
                    Approve
                  </Button>
                </GridItem>
              )}
            </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  getReviewTableRow(lhs, rhs) {
    return (
      <TableRow>
        <TableCell>
          <h4>{lhs}</h4>
        </TableCell>
        <TableCell>
          <h4>{rhs}</h4>
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(profilePageStyle)(LendingPage);
