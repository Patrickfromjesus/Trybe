import React, { Component } from 'react';
import estados from './estados';

class Form extends Component {
  render() {
    const Estados = estados.map((estado, index) => <option key={index}>{estado}</option>);
    const { handleForm, handleState, handleCargo, handleName, handleClear } = this.props;

    return (<div>
      <form>
        <fieldset>
          <legend>Formulário de Cadastro</legend>

          <label htmlFor='name'>Name:
          <input onKeyUp={(event) => event.target.value = handleName(event)} onChange={handleForm} maxLength='40' required type="text" name="name" id='name'/></label>

          <label htmlFor='email'>Email:
          <input onChange={handleForm} maxLength='50' required type="email" name='email' id='email'/></label>

          <label htmlFor='cpf'>Cpf:
          <input onChange={handleForm} maxLength='11' required type="text" name='cpf' id='cpf'/></label>

          <label htmlFor='endereço'>Endereço:
          <input onChange={handleForm} maxLength='200' required type="text" name='endereço' id='endereço'/></label>

          <label htmlFor='cidade'>Cidade:
          <input onBlur={(event) => event.target.value = handleState(event)} onChange={handleForm} maxLength='28' required type="text" name='cidade' id='cidade'/></label>

          <label htmlFor='estado'>Estado:
          <select onChange={handleForm} name='estado' required>
            {Estados}
          </select></label>

          <label htmlFor='casa'>
          Casa:<input onChange={handleForm} type="radio" name='house' id='casa'/></label>
          <label htmlFor='apartamento'>
          Apartamento:<input onChange={handleForm} required type="radio" name='house' id='apartamento'/></label>
        
        </fieldset>

        <fieldset>
          <legend>Último emprego</legend>

          <label htmlFor='resume'>Resumo do currículo:
          <textarea onChange={handleForm} maxLength='1000' required name='resume' id='resume'/></label>

          <label htmlFor='cargo'>Cargo:
          <input onMouseDown={handleCargo} onChange={handleForm} maxLength='40' type='text' required name='cargo' id='cargo'/></label>

          <label htmlFor='cargo-resume'>Resumo do Cargo:
          <textarea onChange={handleForm} maxLength='500' required name='cargoResume' id='cargo-resume'/></label>

        </fieldset>
        <input type="submit" id='btn'/>
        <input onClick={handleClear} type="reset" id='btn'/>
      </form>
      </div>
    )
  }
}

export default Form;