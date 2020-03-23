import React, { Component, Fragment } from 'react';
import '../App.css';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex: []

        }
    }

    componentDidMount() {
        this.loadData();
    }

    //load the data needed
    loadData = async () => {
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
            .then(data => data.json())
            .then(data => this.setState({ pokedex: data.results }))

    }

    render() {

        return (
            <Fragment>
                <h1>Pokedex App</h1>
                <div className="container">
                    {this.state.pokedex.map(
                        (pokemon, inx) => {
                            let pokemon_url_parts = pokemon.url.split('/');
                            let pokemon_id = pokemon_url_parts[6];
                            let pokemon_img_href = `/pokemon-img/${pokemon_id}.png`;

                            return (
                                <div key={inx}>
                                    <a target='_blank' rel="noopener noreferrer" href={pokemon.url}>
                                        <div  id='pokemon'>
                                        <p>{pokemon.name}</p>
                                        <img src={pokemon_img_href} alt={pokemon.name} />
                                        </div>
                                    </a>
                                </div>
                            )
                        }
                    )}
                </div>
            </Fragment>
        );
    }
}

export default AppContainer;