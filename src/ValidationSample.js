import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  input = React.createRef();

  state = {
    password: "",
    clicked: false,
    validated: false
  };

  handleFocus = () => {
    this.input.current.focus();
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "000"
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          ref={ref => (this.input = ref)}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
