import React from "react";
import Slider from "react-nouislider";
import axios from "custom-axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Table, { TableRow, TableBody, TableCell } from "material-ui/Table";
// @material-ui/icons
import Palette from "@material-ui/icons/Palette";
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
        currentUserId: response.data.length && response.data[0].id
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
    alert(this.state.currentRating, this.state.currentUserId);
  };

  render() {
    const { classes, ...rest } = this.props;
    const currentUser = this.state.currentUserId
      ? this.state.users.find(({ id }) => this.state.currentUserId === id)
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
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div style={{ marginLeft: 0 }} className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={4}>
                <List component="nav">
                  {this.state.users.map(
                    ({ firstName, lastName, reputationPoints, id }) => {
                      return (
                        <ListItem
                          onClick={() => {
                            this.resetRating();
                            this.setState({ currentUserId: id });
                          }}
                          button
                          key={id}
                        >
                          <ListItemIcon>
                            <Palette />
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
                    {currentUser.firstName} {currentUser.lastName}
                  </h2>
                  <Table>
                    <TableBody>
                      {this.getReviewTableRow(
                        "Reputation Points",
                        currentUser.reputationPoints
                      )}
                      {this.getReviewTableRow(
                        "Credit Score",
                        currentUser.creditScore
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
