import "./styles.css";
import React, { Component } from "react";
import DisplayPanel from "../components/DisplayPanel/DisplayPanel";
import Header from "../components/Header/Header";

export default class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeToggleImage: "light",
    };
    this.handleThemeToggle = this.handleThemeToggle.bind(this);
  }

  handleThemeToggle() {
    this.setState((state) => {
      if (state.themeToggleImage == "dark") {
        return { themeToggleImage: "light" };
      } else {
        if (state.themeToggleImage == "light") {
          return { themeToggleImage: "dark" };
        }
      }
    });
  }
  render() {
    return (
      <div className={this.state.themeToggleImage == "dark" ? "calculator-dark" : "calculator"}>

            <Header
              title="FCC Calculator App"
              themeToggleImage={this.state.themeToggleImage}
              handleThemeToggle={this.handleThemeToggle}
            />
            <DisplayPanel theme={this.state.themeToggleImage}/>
            <div> Yo </div>
      </div>
    );
  }
}
