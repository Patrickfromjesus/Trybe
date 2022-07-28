import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) { //primeiro a ser executado
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("construtor");
  }

  componentDidMount() { //faz algo após a renderização
    console.log("componentDidMount");
    console.log("--------------");
  }

  shouldComponentUpdate(nextProps, nextState) { //executado logo antes da atualização, permitindo ou não que eal aconteça.
    console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) { //Ao final da atualização é executado
    console.log("componentDidUpdate", this.state, prevState) ;
  }

  render() { //executa após o constructor
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;