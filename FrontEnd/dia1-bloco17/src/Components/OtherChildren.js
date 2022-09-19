import React, { Component } from "react";
import MyContext from "./MyContext";

class OtherChildren extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          ({ team, country }) => (
            <div style={ { border: '1px solid #000' } }>
                <p>OtherChildren</p>
                { `i'm from ${country}, my team is ${team}` }
            </div>
          )
        }
      </MyContext.Consumer>
    );
  }
}

export default OtherChildren;
