
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    label: PropTypes.string,
    classes: PropTypes.string
  };

  render() {
    const { label, classes } = this.props;

    return (
      <div className={classes}>
        <div className="header"># {label}</div>
      </div>
    );
  }
}
export default Header;
