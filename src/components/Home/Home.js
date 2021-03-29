
import "./styles/Home.css";
import React from "react";
import CalculatorApp from "./../../containers/CalculatorApp";
import Typing from 'react-typing-animation';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";


import * as PageTransitionRules from "./styles/pageTransitionRules/pageTranisitionRules"



const Home = ()=>{
    return(

        <Router>

      
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <AnimatePresence exitBeforeEnter>
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

    return(
        
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        transition={PageTransitionRules.pageTransition}
        style={PageTransitionRules.pageStyle}
        variants={PageTransitionRules.pageVariants}
      >
        <div class="home">
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>  
        <nav>
            
            <div className="entryPad">

            <Link to="/">
                    <h1>3D Calculator</h1>
            </Link>
                    <Link to="/CalculatorTutorial">
                        <button type="button" className="entryButton">
                            Take a tutorial
                        </button>
                    </Link>
                    <Link to="/Calculator">
                        <button type="button" className="entryButton">
                            Just get started
                        </button>
                    </Link>
            </div>
      </nav>
      </div>
      </motion.div>
)
}


export default Home;