import "./DisplayPanel.css";
import React, { Component } from "react";

function TopDisplay(props) {
  return <div id="display"> {props.num} </div>;
}

function BottomDisplay(props) {
  return <div id="input-display"> {props.num} </div>;
}
export default class DisplayPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="display-panel">
        <TopDisplay num={2} />
        <BottomDisplay num={4} />
      </div>
    );
  }
}
