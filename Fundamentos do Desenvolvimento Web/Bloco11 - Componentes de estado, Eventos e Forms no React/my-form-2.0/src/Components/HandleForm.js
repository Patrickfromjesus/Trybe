import React, { Component } from "react";
import Form from "./Form";

class HandleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      house: '',
      resume: '',
      cargo: '',
      cargoResume: '',
      visitCargo: 0,
      data: [],
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleCargo = this.handleCargo.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleForm({ target }){
    const { name } = target;
    const value = (target.type === 'radio') ? target.id : target.value;
    if(name === 'name') {
      this.setState({ [name]: value.toUpperCase() });
    } else this.setState({ [name]: value });
  }

  handleName({ target }) {
    return target.value.toUpperCase();
  }

  handleState({ target }) {
    if (parseInt(target.value)) return '';
    return target.value;
  }

  handleCargo() {
    this.setState((state, _props) => ({ visitCargo: state.visitCargo + 1 }));
    if(this.state.visitCargo === 0) alert('Preencha com cuidado essa informação!');
  }

  handleClickButton() {
    const entries =  Object.entries(this.state);
    console.log(entries);
    const list = []; 
    entries.forEach((entrie, index) => {
      if (entrie[0] !== 'data') {
        list.push(<p key={index}>{`${entrie[0]}: ${entrie[1]}`}</p>);
      }
    });
    this.setState({data: list});
  }

  handleClear() {
    this.setState({data: []});
  }

  render() {
    return (
      <div className="form-div">
        <Form handleClear={this.handleClear} handleState={this.handleState} handleName={this.handleName} handleCargo= {this.handleCargo} handleForm={this.handleForm}/>
        <button onClick={this.handleClickButton}>Exibir Informações</button>
        <div>{this.state.data}</div>
      </div>

    )
  }
}

export default HandleForm;