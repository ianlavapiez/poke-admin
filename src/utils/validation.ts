export const checkIfNameExists = (
  trainer: Trainer[],
  trainerName: string
): boolean => {
  return trainer.some(
    ({ name }) => name.toLowerCase() === trainerName.toLowerCase()
  );
};

export const checkIfPokemonQuantityExceeds = (pokemon: Pokemon[]): boolean => {
  const length = pokemon.length;

  if (length >= 6) {
    return true;
  }

  return false;
};

export const startTournament = (trainers: Trainer[]): string | boolean => {
  if (trainers.length < 8) {
    return "There should be a minimum of 8 trainers before you start the tournament.";
  }

  const checkEligibilityForPokemonCount = trainers.some(
    (trainer) => trainer.pokemon.length < 3
  );

  if (checkEligibilityForPokemonCount) {
    return "There should be at least 3 Pokémons in each trainer to start the tournament.";
  }

  return true;
};

export const sampleData: Trainer[] = [
  {
    id: "1",
    name: "1",
    gender: "Male",
    rank: "Beginner",
    pokemon: [
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
    ],
  },
  {
    id: "2",
    name: "2",
    gender: "Male",
    rank: "Beginner",
    pokemon: [
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
    ],
  },
  {
    id: "3",
    name: "3",
    gender: "Male",
    rank: "Beginner",
    pokemon: [
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
    ],
  },
  {
    id: "4",
    name: "4",
    gender: "Male",
    rank: "Beginner",
    pokemon: [
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
    ],
  },
  {
    id: "5",
    name: "5",
    gender: "Male",
    rank: "Beginner",
    pokemon: [
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
    ],
  },
  {
    id: "6",
    name: "6",
    gender: "Male",
    rank: "Beginner",
    pokemon: [
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
    ],
  },
  {
    id: "7",
    name: "7",
    gender: "Male",
    rank: "Beginner",
    pokemon: [
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
    ],
  },
  {
    id: "8",
    name: "8",
    gender: "Male",
    rank: "Beginner",
    pokemon: [
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
      {
        id: "1",
        base_experience: 1,
        height: 1,
        name: "1",
        nickname: "1",
        weight: 1,
        order: 1,
        pokedexId: "1",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
      },
    ],
  },
];
