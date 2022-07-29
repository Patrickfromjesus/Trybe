import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/about' component={ About } />
        <Route exact path='/' component={ Home } />
      </BrowserRouter>
    );
  }
}

export default App;
