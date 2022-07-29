import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <div>
        <Link to='/'>Voltar para Home</Link>
        <h1>About</h1>
      </div>
    );
  }
}

export default About;