export const getPokemon = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_POKEAPI_BASE_URL}pokemon?limit=151&offset=0`
    );

    if (response.ok) {
      const fetchedPokemonList: PokemonList = await response.json();

      const pokemonOptions: Options[] = fetchedPokemonList.results.map(
        (pokemon: PokemonResults, idx: number) => {
          const id = idx + 1;
          const pokemonName =
            id + ". " + pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

          return {
            label: pokemonName,
            value: id.toString(),
          };
        }
      );

      return pokemonOptions;
    }
  } catch (err) {
    console.error("Something went wrong.");
  }
};

export const getPokemonDetails = async (id: string, name: string) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_POKEAPI_BASE_URL}pokemon/${id}`
    );

    if (response.ok) {
      const fetchedPokemon: Pokemon = await response.json();

      const updateFetchedPokemon = { ...fetchedPokemon, nickname: name };

      return updateFetchedPokemon;
    }

    return undefined;
  } catch (err) {
    console.error("Something went wrong.");
  }
};
