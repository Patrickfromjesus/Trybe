import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import orderNames from '../Redux/actions/order';
import removeClient from '../Redux/actions/removeClient';
/* import PropTypes from 'prop-types'; */

class Registered extends Component {
  render() {
    const { clients, logged, removeClients, orderClients, order } = this.props;
    if (!logged) return (
      <div>
        <p>Login não efetuado</p>
        <Link to="/login">Ir para página Login </Link>
      </div>
    )
    const clientsOrder = order ? [...clients].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1) : clients;
    const client = clientsOrder.map((client, index) => (
    <div className="clients-div" key={ index }>
      <div className="clients">
        <p>{ client.name }</p>
        <p>{ client.age }</p>
        <p>{ client.email }</p>
      </div>
      <span className="click-remove" onClick={ () => removeClients(client) }>X</span>
    </div>))
    return (
      <div>
          {
            (clients.length !== 0) ? (
              <div>
              <button onClick={ () => orderClients() }>Ordenar por nome</button>
              {client}
              </div>
              ) :
              <p>Nenhum cliente cadastrado</p>
          }
          <Link to="/register">Ir para página de cadastro</Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  clients: state.reducer.clients,
  logged: state.reducerCheck.logged,
  order: state.reducerSort.order,
});

const mapDispatchToProps = (dispatch) => ({
  removeClients: (state) => dispatch(removeClient(state)),
  orderClients: () => dispatch(orderNames()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Registered);
