import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import AWS from "aws-sdk";

const awsRegion = process.env.REACT_APP_AWS_REGION;

AWS.config.update({ region: awsRegion });
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

const handleLogout = () => {
  cognitoIdentityServiceProvider.globalSignOut();
};

class LogoutButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    classes: PropTypes.string,
  };

  render() {
    const { label, classes } = this.props;

    return (
      <div className={classes}>
        <Button
          variant="danger"
          className="logout-button"
          onClick={handleLogout}
        >
          {label}
        </Button>
      </div>
    );
  }
}

export default LogoutButton;
