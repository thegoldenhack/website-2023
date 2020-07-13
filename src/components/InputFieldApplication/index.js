import React, { Component } from "react";

import { Form } from "react-bootstrap";

import styles from "./styles.module.css";

export default class InputFieldApplication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: this.props.label,
      type: this.props.type,
      name: this.props.name,
      required: this.props.required,
      placeholder: this.props.placeholder,
      onChange: this.props.onChange,
      defaultValue: this.props.defaultValue,
      longAnswer: this.props.longAnswer,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {!this.state.required ? (
          <div>
            <p className={styles.optionalHeading}>{this.state.label}</p>
            <p className={styles.optionalSubhedding}>(Optional)</p>
          </div>
        ) : (
          <p className={styles.requiredHeading}>{this.state.label}</p>
        )}

        {this.state.longAnswer ? (
          <Form>
            <Form.Group>
              <Form.Control
                className={styles.longAnswer}
                name={this.state.name}
                type={this.state.type}
                placeholder={this.state.placeholder}
                onChange={this.state.onChange}
                defaultValue={this.state.defaultValue}
                as="textarea"
              />
            </Form.Group>
          </Form>
        ) : (
          <Form>
            <Form.Group>
              <Form.Control
                className={styles.formControl}
                name={this.state.name}
                type={this.state.type}
                placeholder={this.state.placeholder}
                onChange={this.state.onChange}
                defaultValue={this.state.defaultValue}
              />
            </Form.Group>
          </Form>
        )}
      </div>
    );
  }
}
