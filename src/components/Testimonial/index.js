
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Testimonial extends Component {
  static propTypes = {
    image: PropTypes.string,
    body: PropTypes.string,
    quotee: PropTypes.string,
  };

  render() {
    const { image, body, quotee, classes } = this.props;

    return (
      <div className={classes}>
        <div className="testimonial">
          <img className="testimonial-image" src={image} alt={quotee}></img>
          <p className="testimonial-body">"{body}"</p>
          <p className="testimonial-quotee">- {quotee}</p>
        </div>
      </div>
    );
  }
}
export default Testimonial;
