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
