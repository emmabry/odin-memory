/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';


export default function Cards( { num } ) {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = async (pokemonCount) => {
        const promises = Array.from({ length: pokemonCount }, () => {
            const randomNum = Math.floor(Math.random() * 1025) + 1;
            const URL = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
            return fetch(URL).then((response) => response.json());
        });

        const results = await Promise.all(promises);
        const pokemonData = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites.front_default,
            type: data.types.map((type) => type.type.name).join(', '),
        }));

        setPokemon(pokemonData);
    };

    useEffect(() => {
        fetchPokemon(num); 
    }, []);
    return (
        <div className="pokemon-cards">
            {pokemon.map((poke) => (
                <div key={poke.id} className="pokemon-card">
                    <h2>{poke.name}</h2>
                    <img src={poke.image} alt={poke.name} />
                    <p>{poke.type}</p>
                </div>
            ))}
        </div>
    );
}       
