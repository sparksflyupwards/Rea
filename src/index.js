import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CalculatorApp from "./CalculatorApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CalculatorApp />
  </StrictMode>,
  rootElement
);
