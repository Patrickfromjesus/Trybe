import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      qntClicks1: 0,
      qntClicks2: 0,
      qntClicks3: 0,
    };
  }

  handleClick(cliques, { target }) {
    this.setState((lastState, _props) => ({
      [cliques]: lastState[cliques] + 1,
    }));
    if((this.state[cliques] + 1) % 2 === 0) target.className ="green";
    else target.className = "red";
    console.log(target.className);
  }

  render() {
    return( 
      <div>
        <button className="green" onClick={(event) => this.handleClick('qntClicks1', event)}>{this.state.qntClicks1}</button>
        <button className="green" onClick={(event) => this.handleClick('qntClicks2', event)}>{this.state.qntClicks2}</button>
        <button className="green" onClick={(event) => this.handleClick('qntClicks3', event)}>{this.state.qntClicks3}</button>
      </div>
  )}
}

export default Button;
