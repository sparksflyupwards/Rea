import "./styles/calculator.css";
import React, { Component } from "react";

import DisplayPanel from "../components/DisplayPanel/DisplayPanel";
import Header from "../components/Header/Header";
import InputButton from "../components/InputButton/InputButton";

import Tour from 'reactour';

export default class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBaseColor: "light",
      expression: "",
      input: 0,
      tiltLock: false,
      isTourOpen: true,
      steps: [
        {
          selector: '[data-tut="calculator"]',
          content: `Welcome to the React 3D Calculator tour! 
                    It's got all your standard numbers and operations to press at your hearts delight, but  
                    watch out, it tilts as you touch it! (give it a try)`
      
        },
        {
          selector: '[data-tut="C"]',
          content: `If you make a mistake you can erase your recent input with the C button here.`
      
        },
        {
          selector: '[data-tut="AC"]',
          content: `To start from scratch hit the AC button to erase everything on the display.`
      
        },
        {
          selector: '[data-tut="toggle-theme"]',
          content: `Try out the dark theme if your eyes get tired`
      
        },
        {
          selector: '[data-tut="lock"]',
          content: `If you'd like your calculator to stay still hit the lock and it'll be so`
      
        },
      ]
    };

    this.handleThemeToggle = this.handleThemeToggle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleAllClear = this.handleAllClear.bind(this);
    this.handleLock = this.handleLock.bind(this);
    this.toggleTour = this.toggleTour.bind(this);

    
  }

  componentDidMount() {
    let isMobile;
    const devMode = false;
    const calculatorElement = document.getElementById("calculatorApp");

    if (
      devMode ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      isMobile = true;
    } else {
      isMobile = false;
    }

    const initiate3DTilt = (e) => {
      //if component is locked then do not create transforms
      if(this.state.tiltLock){
        return;
      }
      let xPos, yPos;

      if (!isMobile) {
        xPos = e.clientX;
        yPos = e.clientY;
      } else if (isMobile) {

        xPos = e.touches[0].clientX;
        yPos = e.touches[0].clientY;
      }

      const clickOffset_x =
        (2 * xPos - window.innerWidth) / calculatorElement.offsetWidth;
      const clickOffset_y =
        (yPos - window.innerHeight * 0.05) / calculatorElement.offsetHeight;

      const rotateMagnitude = 25;
      const rotateX = (clickOffset_y - 0.49) * -1 * rotateMagnitude;
      const rotateY = clickOffset_x * rotateMagnitude;

      const distanceFromCenter = Math.pow(
        Math.pow(Math.abs(clickOffset_x) - 0, 2) +
          Math.pow(Math.abs(clickOffset_y) - 0.5, 2),
        1 / 2
      );

      const scaleMagnitude = 0.045;
      const scale = 1 - scaleMagnitude * Math.abs(1 - distanceFromCenter);

      const calculatorTransform =
        "scale(" +
        scale +
        "," +
        scale +
        ") rotateX(" +
        rotateX +
        "deg) rotateY(" +
        rotateY +
        "deg)";

      calculatorElement.style.transform = calculatorTransform;
    };

    const finish3DTilt = (e) => {
      calculatorElement.style.transform = "rotateX(0deg)";
      calculatorElement.style.transition = "all linear .25s";
    };

    if (!isMobile) {
      calculatorElement.addEventListener("mousedown", initiate3DTilt);

      document.addEventListener("mouseup", finish3DTilt);
    } else {
      calculatorElement.addEventListener("touchstart", initiate3DTilt);

      document.addEventListener("touchend", finish3DTilt);
    }
  }

  handleThemeToggle() {
    
    this.setState(
      (state) => {
        if (state.currentBaseColor == "dark") {
          return {
            currentBaseColor: "light",
          };
        } else {
          if (state.currentBaseColor == "light") {
            return {
              currentBaseColor: "dark",
            };
          }
        }
      },

      () => {
        switch (this.state.currentBaseColor) {
          case "dark":
            document.body.style.backgroundColor = "rgb(20, 79, 155)";
            break;
          case "light":
            document.body.style.backgroundColor = "#2edfd6";
            break;
        }
      }
    );
  }

  handleInput(e) {
    const newInput = e.target.value;
    let newExpression;

    //get the last entered number
    let currentNumber = this.state.expression.split(" ");
    if (currentNumber.length == 0) {
      currentNumber = this.state.expression;
    } else {
      currentNumber = currentNumber[currentNumber.length - 1];
    }


    //if we are dealing with an operation add to espression with a space else the space isnt important

    //get the last entered key before the input
    let lastKey = this.state.expression.slice();
    let i = lastKey.length - 1;
    while (lastKey.slice(i) == " ") {
      i = i - 1;
    }
    lastKey = lastKey.slice(i, i + 1);


    //check if the newInput is an operation
    if ("/X-+".indexOf(newInput) != -1) {
      //check if the last input was an operation
      if ("/X+-".indexOf(lastKey) != -1) {
        //if the new input is a minus and the last input was divide or multiply then append the minus to the expression
        if (newInput == "-" && "/X".indexOf(lastKey) != -1) {
          newExpression =
            this.state.expression.slice(0, this.state.expression.length - 1) +
            " " +
            newInput;
        } 
        //if all other cases then we swap the new entry with the old
        else {
          newExpression =
            this.state.expression.slice(0, this.state.expression.length - 3) +
            " " +
            newInput +
            " ";
        }
      } 
      //if the last input was not an operation then append the new operation to the expression
      else {
        newExpression = this.state.expression + " " + newInput + " ";
      }
    }
    //if the new input is not an operation (is a number)
    else {
      //if first entry remove zero
      if (this.state.expression == "0") {
        newExpression = newInput;
      } else {
        //if user trying to enter decimal twice dont let them
        if (newInput == "." && currentNumber.indexOf(".") != -1) {
          newExpression = this.state.expression;
        } else {
          newExpression = this.state.expression + newInput;
        }
      }
    }

    this.setState((state) => {
      return { input: newInput, expression: newExpression };
    });
  }

  
  handleLock(){
    //toggle the lock
    this.setState({tiltLock: this.state.tiltLock ? false : true}, ()=>{

      if(this.state.tiltLock){
        if(this.state.isMobile){
          document.removeEventListener("mousedown");
        } 

      }
    })

  }
  handleEvaluate() {
    let sum;
    if(this.state.expression && this.state.expression.indexOf("X") != -1){

      sum = eval(this.state.expression.replace("X", "*"));
    }
    else {
       try {
          if(!this.state.expression){
            this.setState((state) => {
              return {
                input: "Invalid input",
              };
            });

            return
          } 
         sum = eval(this.state.expression);
       }
       catch(exception) {
          console.log(exception);
          sum = "error calculating sum"
       }
    }

    sum = JSON.stringify(sum);
    //changes the input state
    this.setState((state) => {
      return {
        expression: sum,
        input: sum,
      };
    });
  }
  handleClear() {
    this.setState((state) => {
      return {
        input: 0,
        expression: state.expression.slice(0, state.expression.length - 2),
      };
    });
  }

  handleAllClear() {
    this.setState((state) => {
      return { input: 0, expression: "0" };
    });
  }

  toggleTour(){
    this.setState({isTourOpen: !this.state.isTourOpen});
  }

  render() {
    return (
      <div
        className={
          this.state.currentBaseColor == "dark"
            ? "calculator-dark"
            : "calculator"
        } 
        id="calculatorApp"
        data-tut="calculator"
      >

        <Tour
        steps={this.state.steps}
        isOpen={this.state.isTourOpen}
        onRequestClose={this.toggleTour}></Tour>
        <Header
          title="FCC Calculator App"
          themeToggleImage={this.state.currentBaseColor}
          handleThemeToggle={this.handleThemeToggle}
        />

        <DisplayPanel
          theme={this.state.currentBaseColor}
          input={this.state.input}
          expression={this.state.expression}
          displayHelp={this.state.displayHelp}
        />

        <div className="numberPad">
          <InputButton
            id="clear"
            class="inputButton"
            buttonText="AC"
            onClick={this.handleAllClear}
            theme={this.state.currentBaseColor}
          />

          <InputButton
            id="clearLine"
            class="inputButton"
            buttonText="C"
            onClick={this.handleClear}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="divide"
            class="inputButton"
            buttonText="/"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="multiply"
            class="inputButton"
            buttonText="X"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />

          <InputButton
            id="seven"
            class="inputButton"
            buttonText="7"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="eight"
            class="inputButton"
            buttonText="8"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="nine"
            class="inputButton"
            buttonText="9"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="subtract"
            class="inputButton"
            buttonText="-"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />

          <InputButton
            id="four"
            class="inputButton"
            buttonText="4"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="five"
            class="inputButton"
            buttonText="5"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="six"
            class="inputButton"
            buttonText="6"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="add"
            class="inputButton"
            buttonText="+"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />

          <InputButton
            id="one"
            class="inputButton"
            buttonText="1"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="two"
            class="inputButton"
            buttonText="2"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="three"
            class="inputButton"
            buttonText="3"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="equals"
            class="bigInputButton"
            buttonText="="
            onClick={this.handleEvaluate}
            theme={this.state.currentBaseColor}
          />

          <InputButton
            id="lock"
            class="inputButton"
            buttonText="lock"
            buttonImage="lock"
            onClick={this.handleLock}
            theme={this.state.currentBaseColor}
           
          />
          <InputButton
            id="zero"
            class="inputButton"
            buttonText="0"
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
          <InputButton
            id="decimal"
            class="inputButton"
            buttonText="."
            onClick={this.handleInput}
            theme={this.state.currentBaseColor}
          />
        </div>
      </div>
    );
  }
}
