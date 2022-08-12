import React, { Component } from "react";

class Fieldset extends Component {
  render() {
    const { handleEvent } = this.props;
    return (
      <fieldset>
        <legend>Login</legend>

        <label htmlFor="name">Name:
          <input onChange={handleEvent} id="name" name="name" type="text" />
        </label>

        <label htmlFor="email">Email:
          <input id="email" type="email" onChange={handleEvent} name="email"/>
        </label>

        <label htmlFor="password">Senha:
          <input id="password" type="password" onChange={handleEvent} name="password"/>
        </label>

        <label htmlFor="age">Age:
            <input id="age" type="number" name="age" onChange={handleEvent} />
          </label>

          <label htmlFor="select">Estado:
            <select id='select' name="estado" onChange={handleEvent}>
              <option>selecione uma opção</option>
              <option>Bahia</option>
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Paraná</option>
              <option>Minas Gerais</option>
            </select>
          </label>

          <label htmlFor="im">Sou brasileiro?
            <input id="im" type="checkbox" name="souBr" onChange={handleEvent} />
          </label>

      </fieldset>
    )
  }
}

export default Fieldset;