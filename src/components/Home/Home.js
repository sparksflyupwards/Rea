
import "./Home.css";
import React from "react";
import CalculatorApp from "./../../containers/CalculatorApp";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = ()=>{
    return(

        <Router>

      
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <AnimatePresence>
                <Switch>
                    <Route path="/Calculator">
                    <CalculatorApp isTourOpen ={false} />
                    </Route>
                    <Route path="/CalculatorTutorial">
                        <CalculatorApp isTourOpen ={true} />
                    </Route>
                    <Route path="/">
                        <Navigation/>
                    </Route>
                </Switch>
          </AnimatePresence>
     
      </Router>
      
      );
}

const Navigation = ()=>{
    return(<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Without a tutorial</Link>
          </li>
          <li>
            <Link to="/CalculatorTutorial">With a tutorial</Link>
          </li>
        </ul>
      </nav>
)
}


export default Home;