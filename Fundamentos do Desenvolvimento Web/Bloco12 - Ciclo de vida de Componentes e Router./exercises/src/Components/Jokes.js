import React, { Component } from 'react';

class Jokes extends Component {
  constructor(props){
    super(props);
    this.saveJoke = this.saveJoke.bind(this);
    this.state = {
        storageJokes: [],
        dadJokes: undefined,
        loading: true,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true }, async() => { // Se quiser atualizar o estado baseado no estado anterior, basta passar callback no primeiro parâmetro também! em vez de { loading: true }, use (prevState) => { loading: true }.
    const headersRequest = { headers: { Accept: 'application/json' } };
    const response = await fetch('https://icanhazdadjoke.com/', headersRequest);
    const data = await response.json();
    this.setState({ dadJokes: data, loading: false });
  });
  }

  saveJoke() {
    this.componentDidMount();
    this.setState(({ storageJokes, dadJokes }) => ({ storageJokes: [...storageJokes, dadJokes] }));
    /* this.state.storageJokes.push(this.state.dadJokes); */
  }

  render() {
    const { dadJokes, storageJokes, loading } = this.state;
    const listJokes = storageJokes.map(({ joke, id }) => <h2 key={ id }>{ joke }</h2>);
    return (
      <div>
        { storageJokes.length !== 0 ? listJokes : null }
        { !loading ? <h2>{ dadJokes.joke }</h2> : <h1>LOADING...</h1> }
        <button onClick={ this.saveJoke }>Mais uma</button>
      </div>
    );
  }
}

export default Jokes;