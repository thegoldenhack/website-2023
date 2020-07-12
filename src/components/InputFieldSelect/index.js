import React, { Component } from "react";

import Select, { createFilter } from "react-select";

import styles from "./styles.module.css";

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRequired: this.props.isRequired,
      placeholder: this.props.placeholder,
      label: this.props.label,
      name: this.props.name,
      value: this.props.value,
      onChange: this.props.onChange,
      options: this.props.options,
      defaultValue: this.props.defaultValue,

      error: false,
    };
  }

  render() {
    const selectStyles = {
      control: (base, state) => ({
        ...base,
        borderRadius: 20,
        boxShadow: null,
        "&:hover": {},
      }),
      menu: (base) => ({
        ...base,
        borderRadius: "0 0 20 20",
        marginTop: 0,
      }),
      menuList: (base) => ({
        ...base,
        padding: 0,
      }),
    };

    return (
      <div className={styles.container}>
        <p className={styles.title}>{this.state.label}</p>

        {this.props.multiSelect ? (
          <div>
            <p className={styles.multiSubtitle}>Select as many as apply.</p>
            <Select
              isMulti
              styles={selectStyles}
              name={this.state.name}
              value={this.state.value}
              onChange={this.state.onChange}
              options={this.state.options}
              defaultValue={this.state.defaultValue}
              // apparently createFilter makes it go faster but idk if it actually does
              filterOption={createFilter({ ignoreAccents: false })}
            />
          </div>
        ) : (
          <Select
            styles={selectStyles}
            name={this.state.name}
            value={this.state.value}
            onChange={this.state.onChange}
            options={this.state.options}
          />
        )}
      </div>
    );
  }
}
