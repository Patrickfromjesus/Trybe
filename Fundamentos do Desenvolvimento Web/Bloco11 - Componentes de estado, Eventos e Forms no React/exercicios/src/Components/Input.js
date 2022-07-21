import React, { Component } from "react";

class Input extends Component {
  constructor() {
    super();
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      name: '',
    }
  }

  handleEvent({ target }) {
    if(target.value === 'patrick') {
    this.setState(() => ({
      name: target.value,
    }));
    console.log(this.state.name);
    }
  }

  render() {
    return (
      <input onKeyUp={(event) => this.handleEvent(event)} type='text' />
    )
  }
}

export default Input;