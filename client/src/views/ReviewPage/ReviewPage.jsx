import React from "react";
import Slider from "react-nouislider";
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
import Divider from "material-ui/Divider";
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

class ReviewPage extends React.Component {
  state = {
    currentRating: 0,
    currentUserId: null,
    users: []
  };

  componentDidMount() {
    axios.get("/borrowerList").then(response => {
      this.setState({
        users: response.data,
        currentUserId: response.data.length && response.data[0].ssn
      });
    });
  }

  resetRating = () => {
    this.setState(() => ({ currentRating: 0 }));
  };

  handleSliderSet = values => {
    this.setState(() => ({ currentRating: values[0] }));
  };

  handleRatingSubmit = () => {
    //alert(this.state.currentRating, this.state.currentUserId);
  };

  render() {
    const { classes, ...rest } = this.props;
    const currentUser = this.state.currentUserId
      ? this.state.users.find(({ ssn }) => this.state.currentUserId === ssn)
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
                  Endorse your peers
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div style={{ maxWidth: "100%" }} className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={4}
                style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
              >
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
                        <React.Fragment>
                          <ListItem
                            onClick={() => {
                              this.resetRating();
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
                          <Divider />
                        </React.Fragment>
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
                      {this.getReviewTableRow("City", currentUser.city)}
                      {this.getReviewTableRow("Country", currentUser.country)}
                      {this.getReviewTableRow("Salary", currentUser.salary)}
                    </TableBody>
                  </Table>
                  <h3>Rating</h3>
                  <div style={{ margin: "3rem 0" }}>
                    <Slider
                      pips={{
                        mode: "count",
                        values: 11
                      }}
                      style={{ height: "5px" }}
                      start={[this.state.currentRating]}
                      connect={[true, false]}
                      step={1}
                      range={{ min: 0, max: 10 }}
                      onSet={this.handleSliderSet}
                    />
                  </div>
                  <Button onClick={this.handleRatingSubmit} color="primary">
                    Rate
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

export default withStyles(profilePageStyle)(ReviewPage);
