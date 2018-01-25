import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderPokemonList = this.renderPokemonList.bind(this);
  }
// ========================================
// Methods
// ========================================

  componentWillMount() {
    this.props.requestAllPokemon();
  }

// ========================================
// Render
// ========================================

  renderPokemonListItem(poke, id) {
    return (
      <li key={id} className="pokemon-list-item">
        <img src={poke.image_url}></img>
        <p>{poke.name}</p>
      </li>
    );
  }

  renderPokemonList(pokemon) {
    return (
      pokemon.map((poke, id) => (
        this.renderPokemonListItem(poke, id)
      ))
    );
  }

  render() {
    // console.log(`pokemonz:${this.props.pokemon[0]}`);
    // console.log(this.props.pokemon);
    return (
      <div className="pokemon-index-container">
        <ul className="pokemon-list">
          {this.renderPokemonList(this.props.pokemon)}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
