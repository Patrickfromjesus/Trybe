import './App.css';
import { Component } from 'react';
import ValidationForm from './Components/ValidationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEmail: '',
      clicked: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ email: value });
  }

  handleClick() {
    const { email } = this.state;
    this.setState({ saveEmail: email, email: '', clicked: true });
  }

  render() {
    const { saveEmail, email, clicked } = this.state;
    return (
      <div className="App">
        <input
          type="email"
          data-testid="input-email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="button"
          data-testid="input-btn"
          onClick={ this.handleClick }
          value="adicionar email"
        />
        <h2
          data-testid="email-show"
        >
          { clicked ? <ValidationForm email={ saveEmail } /> : null }
        </h2>
      </div>
    );
  }
}

export default App;
