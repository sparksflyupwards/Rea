import "./Header.css";
import React, { Component } from "react";
import ThemeToggleIcon from "./ThemeToggleIcon/ThemeToggleIcon";


function AppTitle(props){
    return(<div id="title">{props.title}</div>)
}

function ThemeToggle(props){
    return(
    <div id="themeToggle">
        <button id="themeToggleBtn" onClick={props.handleThemeToggle}>
            <img src={ThemeToggleIcon[props.themeToggleImage]["icon"]} alt="switch theme"/>
        </button>
    </div>
    )
}


export default class DisplayPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <AppTitle title={this.props.title} />
        <ThemeToggle handleThemeToggle={this.props.handleThemeToggle} themeToggleImage = {this.props.themeToggleImage}/>
      </div>
    );
  }
}