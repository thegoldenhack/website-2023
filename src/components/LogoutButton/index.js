import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import { signOut } from "../../utils/Cognito/index.js";

const handleLogout = () => {
  signOut();
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
