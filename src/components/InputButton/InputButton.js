import "./InputButton.css";
import React from "react";

export default class InputButton extends React.Component{
 
    constructor(props){
        super(props);

        this.state = {
            
            buttonStyles : {
                color: this.props.buttonColor, 
            },
        }
    }
    


    render(){
        return (
            <div>
                <button class= {this.props.class} style={{backgroundColor:this.props.buttonColor}} id={this.props.id} onClick={this.props.onClick}>{this.props.buttonText}</button>
            </div>
            
        )
    }
    
}

