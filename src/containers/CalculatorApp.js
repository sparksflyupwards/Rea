import "./styles.css";
import React, { Component } from "react";

import DisplayPanel from "../components/DisplayPanel/DisplayPanel";
import Header from "../components/Header/Header";
import InputButton from "../components/InputButton/InputButton";

export default class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeToggleImage: "light",
      currentBaseColor: "#FFBF47",
      lightBaseColor: "#FFBF47",
      darkBaseColor: "#4F6367"
    };
    this.handleThemeToggle = this.handleThemeToggle.bind(this);
  }

  handleThemeToggle() {
    this.setState((state) => {
      if (state.themeToggleImage == "dark") {
        return { 
          themeToggleImage: "light",
          currentBaseColor: state.lightBaseColor
         };
      } else {
        if (state.themeToggleImage == "light") {
          return { 
            themeToggleImage: "dark",
            currentBaseColor: state.darkBaseColor
           };
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

            <InputButton id="one" class="inputButton" buttonText="1" buttonColor={this.state.currentBaseColor}/>
            <div> Yo </div>
      </div>
    );
  }
}
