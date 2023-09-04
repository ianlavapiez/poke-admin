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
