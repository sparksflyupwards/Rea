import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CalculatorApp from "./containers/CalculatorApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>

    <CalculatorApp />
    V0.0
  </StrictMode>,
  rootElement
);
