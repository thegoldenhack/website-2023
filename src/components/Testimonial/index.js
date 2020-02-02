
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Testimonial extends Component {
  static propTypes = {
    image: PropTypes.string,
    quote: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const { image, quote, name, classes } = this.props;

    return (
      <div className={classes}>
        <div className="testimonial">
          <img className="testimonial-image" src={image} alt={name}></img>
          <p className="testimonial-quote">"{quote}"</p>
          <p className="testimonial-name">- {name}</p>
        </div>
      </div>
    );
  }
}
export default Testimonial;
