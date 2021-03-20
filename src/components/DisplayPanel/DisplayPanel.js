import "./DisplayPanel.css";
import React, { Component } from "react";
import styled from 'styled-components'

import css from 'styled-components';

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
          <div className={this.props.theme == "dark" ? "display-panel-dark":"display-panel-light"}>
          <TopDisplay num={this.props.expression} />
          <BottomDisplay num={this.props.input} />
          </div>
      
    );
  }
}
