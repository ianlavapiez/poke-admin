export const checkIfNameExists = (trainer: Trainer[], trainerName: string) => {
  return trainer.some(
    ({ name }) => name.toLowerCase() === trainerName.toLowerCase()
  );
};
