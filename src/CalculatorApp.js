import "./styles.css";
import React, { Component } from "react";
import DisplayPanel from "./Components/DisplayPanel/DisplayPanel";

export default class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="Calculator">
        <DisplayPanel />
        <div> Yo </div>
      </div>
    );
  }
}
