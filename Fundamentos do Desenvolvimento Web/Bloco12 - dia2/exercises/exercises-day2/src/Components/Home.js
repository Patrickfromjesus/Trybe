import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <Link to='/About'>ir para About</Link>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;