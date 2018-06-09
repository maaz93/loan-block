import React from "react";
import Slider from "react-nouislider";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import InputAdornment from "material-ui/Input/InputAdornment";
import withStyles from "material-ui/styles/withStyles";
import Stepper from "material-ui/Stepper/Stepper";
import Step from "material-ui/Stepper/Step";
import StepLabel from "material-ui/Stepper/StepLabel";
import StepContent from "material-ui/Stepper/StepContent";
import Paper from "material-ui/Paper";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Table, {
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "material-ui/Table";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
// core components
import Primary from "components/Typography/Primary";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

const users = [
  {
    id: 1,
    reputationPoints: 20,
    firstName: "Maaz",
    lastName: "Adeeb",
    creditScore: 200,
    city: "Test",
    country: "India",
    salary: 200000,
    country: "India"
  },
  {
    id: 2,
    reputationPoints: 40,
    firstName: "Maaz",
    lastName: "Adeeb",
    creditScore: 200,
    city: "Test",
    country: "India",
    salary: 400000,
    country: "India"
  },
  {
    id: 3,
    reputationPoints: 60,
    firstName: "Maaz",
    lastName: "Adeeb",
    creditScore: 200,
    city: "Test",
    country: "India",
    salary: 600000,
    country: "India"
  }
];

class ReviewPage extends React.Component {
  state = {
    currentRating: 0
  };

  resetRating = () => {
    this.setState(() => ({ currentRating: 0 }));
  };

  handleSliderSet = values => {
    this.setState(() => ({ currentRating: values[0] }));
  };

  render() {
    const { classes, ...rest } = this.props;
    const currentUser = users[0];
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
                  {users.map(
                    ({ firstName, lastName, reputationPoints, id }) => {
                      return (
                        <ListItem button kdy={id}>
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
                <CustomButton color="primary">Rate</CustomButton>
              </GridItem>
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
