import React, { Component } from "react";
import OtherChildren from "./OtherChildren";

class Children extends Component {
  render() {
    return (
      <div>
        <p>Children</p>
        <OtherChildren />
      </div>
    );
  }
}

export default Children;
