import React, { Component } from "react";
import { connect } from "react-redux";
import checkLogin from "../Redux/actions/checkLogin";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const { handleLogin, history } = this.props;
    return (
      <form>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={ email }
          name="email"
          onChange={ (event) => this.handleChange(event) }
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={ password }
          onChange={ (event) => this.handleChange(event) }
        />
        <button onClick={ () => handleLogin(history) }>Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (history) => {
    dispatch(checkLogin());
    history.push('/registered');
  }
});

export default connect(null, mapDispatchToProps)(Login);
