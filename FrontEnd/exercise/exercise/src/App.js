import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Registered from './Pages/Registered';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/registered" component={ Registered } />
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
      </Switch>
    </div>
  );
}
}

export default App;
