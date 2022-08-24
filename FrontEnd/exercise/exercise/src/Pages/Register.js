import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import addClient from "../Redux/actions/addClient";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      age: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, id } = target;
    this.setState({ [id]: value });
  }
  
  render() {
    const { handleClick } = this.props;
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={ (event) => this.handleChange(event) }
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          onChange={ (event) => this.handleChange(event) }
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          onChange={ (event) => this.handleChange(event) }
        />
        <button type="reset" onClick={ () => handleClick(this.state) }>Gerar Cadastro</button>
        <Link to="/registered">Ver clientes cadastrados</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (state) => dispatch(addClient(state)),
});

export default connect(null, mapDispatchToProps)(Register);
