import LockIcon from '../../media/icons/lock.svg'
import "./styles/InputButton.css";
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
            <div className={this.props.class}>
                <button className= {this.props.class+"-"+this.props.theme}
                 id={this.props.id} 
                 onClick={this.props.onClick}
                 value={this.props.buttonText}>
                     {this.props.buttonText    ? 
                     this.props.buttonText :  
                     <img className= {"lock-button-"+this.props.theme} src={LockIcon}
          alt="lock calculator" />}
                     
                </button>
            </div>
            
        )
    }
    
}

