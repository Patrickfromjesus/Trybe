import React from "react";
import Pokemon from './Pokemon';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      pokemon: this.props.typePkm[0],
    }
  }

  handleClick(target) {
    if(this.props.typePkm.indexOf(this.state.pokemon) !== this.props.typePkm.length - 1) {
      this.setState((state, _props) =>({
        pokemon: this.props.typePkm[this.props.typePkm.indexOf(state.pokemon) + 1],
      }));
    }
    else {
      this.setState(() =>({
        pokemon: this.props.typePkm[0],
      }));
    }
  }

  render() {
    return (
      <div className="pkm-btn-next">
        <div className='div-pokedex'>
          <Pokemon pokemon={this.state.pokemon} />
        </div>
        <button className='pkm-btn' onClick={(event) => this.handleClick(event.target)}>Próximo</button>
      </div>
    )
  }
}

export default Button;