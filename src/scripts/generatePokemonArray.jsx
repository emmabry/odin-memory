export default async function generatePokemonArray(num) {
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

        return pokemonData;
    };

    return fetchPokemon(num);
}
