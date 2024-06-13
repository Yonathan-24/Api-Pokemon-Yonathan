import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [pokemonNames, setPokemonNames] = useState([]);

    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                const names = response.data.results.map(pokemon => pokemon.name);
                setPokemonNames(names);
            })
            .catch(error => {
                console.error('Error fetching Pokémon:', error);
            });
    };

    return (
        <div className="App">
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {pokemonNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
