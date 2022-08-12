import React, { Component } from 'react';
import Fieldset from './Fieldset';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      age: 0,
      estado: '',
      souBr: false,
      password: '',
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value});
  }

  render() {
    const keys = Object.keys(this.state);
    return (
      <div>

        <form className='form'>

          <Fieldset handleEvent={this.handleEvent}  />

          {/* <label htmlFor="age">Age:
            <input id="age" type="number" name="age" onChange={this.handleEvent} />
          </label>

          <label htmlFor="select">Estado:
            <select id='select' name="estado" onChange={this.handleEvent}>
              <option>selecione uma opção</option>
              <option>Bahia</option>
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Paraná</option>
              <option>Minas Gerais</option>
            </select>
          </label>

          <label htmlFor="im">Sou brasileiro?
            <input id="im" type="checkbox" name="souBr" onChange={this.handleEvent} />
          </label>
 */}
        </form>

        <div>
          <ol>
            { keys.map((key, index) => <li key={index}>{this.state[key]}</li>) }
          </ol>
        </div>
      </div>
    )
  }
}

export default Form;