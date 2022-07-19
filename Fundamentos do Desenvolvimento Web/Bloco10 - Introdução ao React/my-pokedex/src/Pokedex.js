import React, { Component } from 'react';

class Pokedex extends Component {
  render() {
    const { name, type, image, weight, measurementUnit } = this.props;
    return (<div className='div-pokemon'>
      <div className='div-info'>
        <p>{name}</p>
        <p>{type}</p>
        <p>averageWeight: {weight} { measurementUnit }</p>
      </div>
      <div className='div-image'>
        <img src={image} alt={`${name}`} />
      </div>
    </div>);
  }
}

export default Pokedex;