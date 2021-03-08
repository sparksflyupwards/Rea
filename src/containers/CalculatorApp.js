import "./styles.css";
import React, { Component } from "react";
import DisplayPanel from "../Components/DisplayPanel/DisplayPanel";
import Header from "../Components/Header/Header"


export default class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeToggleImage: "light"
    }
    this.handleThemeToggle = this.handleThemeToggle.bind(this);
  }

handleThemeToggle(){
  this.setState((state)=>{
    if(state.themeToggleImage == "dark"){
      return {themeToggleImage: "light"}
    }
    else {
      if(state.themeToggleImage == "light"){
        return {themeToggleImage: "dark"}
      }
    }
  })
}
  render() {
    return (
      <div class="Calculator">
        <Header title="FCC Calculator App" themeToggleImage={this.state.themeToggleImage} handleThemeToggle={this.handleThemeToggle}/>
        <DisplayPanel/>
        <div> Yo </div>
      </div>
    );
  }
}
