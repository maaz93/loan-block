import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import InputAdornment from "material-ui/Input/InputAdornment";
import withStyles from "material-ui/styles/withStyles";
import Stepper from "material-ui/Stepper/Stepper";
import Step from "material-ui/Stepper/Step";
import StepLabel from "material-ui/Stepper/StepLabel";
import StepContent from "material-ui/Stepper/StepContent";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Phone from "@material-ui/icons/Phone";
import Home from "@material-ui/icons/Home";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import Domain from "@material-ui/icons/Domain";
import AttachMoney from "@material-ui/icons/AttachMoney";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  state = {
    activeStep: 0,
    done: false,
    ssn: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    address: "",
    company: "",
    account: "",
    salary: ""
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  handleFinish = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
      done: true
    });
  };

  getSteps() {
    return [
      "Personal Details",
      "Finance Details",
      "Accept Terms and Conditions"
    ];
  }

  getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <CustomInput
              labelText="SSN..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.ssn,
                ref: ref => (this.ssnRef = ref),
                onChange: e => this.setState({ ssn: e.target.value }),
                type: "number",
                endAdornment: (
                  <InputAdornment position="end">
                    <People />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="First Name..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.firstName,
                ref: ref => (this.firstNameRef = ref),
                onChange: e => this.setState({ firstName: e.target.value }),
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <People />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Last Name..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.lastName,
                ref: ref => (this.lastNameRef = ref),
                onChange: e => this.setState({ lastName: e.target.value }),
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <People />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Phone Number..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.phoneNo,
                ref: ref => (this.phoneNoRef = ref),
                onChange: e => this.setState({ phoneNo: e.target.value }),
                type: "number",
                endAdornment: (
                  <InputAdornment position="end">
                    <Phone />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Address..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.address,
                ref: ref => (this.addressRef = ref),
                onChange: e => this.setState({ address: e.target.value }),
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <Home />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Company..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.company,
                ref: ref => (this.companyRef = ref),
                onChange: e => this.setState({ company: e.target.value }),
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <Domain />
                  </InputAdornment>
                )
              }}
            />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <CustomInput
              labelText="Account Number..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.account,
                ref: ref => (this.accountRef = ref),
                onChange: e => this.setState({ account: e.target.value }),
                type: "number",
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountBalanceWallet />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Salary..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.salary,
                ref: ref => (this.salaryRef = ref),
                onChange: e => this.setState({ salary: e.target.value }),
                type: "number",
                endAdornment: (
                  <InputAdornment position="end">
                    <AttachMoney />
                  </InputAdornment>
                )
              }}
            />
          </React.Fragment>
        );
      case 2:
        return "List of terms and conditions which nobody reads. Also, GDPR compliance.";
      default:
        return "Unknown step";
    }
  };
  render() {
    const { classes, ...rest } = this.props;
    const { activeStep, done } = this.state;
    const steps = this.getSteps();
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
                  Apply for Loan
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      {this.getStepContent(index)}
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            tabIndex={activeStep === 0 ? -1 : 0}
                            onClick={this.handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={
                              activeStep < steps.length - 1
                                ? this.handleNext
                                : this.handleFinish
                            }
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
            {done && (
              <SnackbarContent
                message={
                  <span>
                    <b>Success!</b> Your loan has been sent for approval.
                  </span>
                }
                close
                color="success"
                icon={Check}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
