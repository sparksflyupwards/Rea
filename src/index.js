import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CalculatorApp from "./containers/CalculatorApp";
import Home from "./components/Home/Home"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  rootElement
);
