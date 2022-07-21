import './App.css';
import React, { Component } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Button text="Clicou" />
        <Input />
      </div>
    );

  }
}

export default App;
