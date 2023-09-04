import { checkIfPokemonQuantityExceeds } from "utils/validation";
import { v4 } from "uuid";

export const trainerInitialState: ApplicationState = {
  selectedTrainer: {
    id: "",
    name: "",
    gender: "",
    rank: "Beginner",
    pokemon: [],
  },
  trainers: [],
};

type AddPokemonAction = {
  type: "ADD_POKEMON";
  payload: {
    data: {
      trainer: Trainer;
      trainers: Trainer[];
      pokemon: Pokemon;
    };
  };
};

type CreateTrainerAction = {
  type: "CREATE_TRAINER";
  payload: {
    data: TrainerWithoutIdAndPokemon;
  };
};

type FetchAllTrainersAction = {
  type: "FETCH_ALL_TRAINER";
};

type GetTrainerAction = {
  type: "GET_TRAINER";
  payload: {
    id: string;
  };
};

const addPokemon = (
  trainer: Trainer,
  trainers: Trainer[],
  pokemon: Pokemon
): { trainer: Trainer; trainers: Trainer[] } => {
  const pokemonId = v4();
  const { id: trainerId, pokemon: currentPokemon } = trainer;

  if (checkIfPokemonQuantityExceeds(currentPokemon)) {
    return {
      trainer,
      trainers,
    };
  }

  const pokemonWithId = { ...pokemon, id: pokemonId };

  currentPokemon.push(pokemonWithId);

  const updateTrainer = { ...trainer, pokemon: currentPokemon };
  const filterTrainerList = trainers.filter(({ id }) => id !== trainerId);

  filterTrainerList.push(updateTrainer);

  return {
    trainer: updateTrainer,
    trainers: filterTrainerList,
  };
};

const createTrainer = (data: TrainerWithoutIdAndPokemon): Trainer => {
  const id = v4();

  return {
    ...data,
    id,
    pokemon: [],
  };
};

const getTrainer = (trainers: Trainer[], trainerId: string) => {
  const selectedTrainer = trainers.filter(({ id }) => id === trainerId);

  return selectedTrainer[0];
};

export type TrainerActions =
  | AddPokemonAction
  | CreateTrainerAction
  | FetchAllTrainersAction
  | GetTrainerAction;

export const trainerReducer = (
  state: ApplicationState = trainerInitialState,
  action: TrainerActions
) => {
  switch (action.type) {
    case "ADD_POKEMON":
      const {
        pokemon,
        trainer: payloadTrainer,
        trainers: payloadTrainers,
      } = action.payload.data;

      const { trainer, trainers } = addPokemon(
        payloadTrainer,
        payloadTrainers,
        pokemon
      );

      return {
        ...state,
        trainers,
        selectedTrainer: trainer,
      };
    case "CREATE_TRAINER":
      const newTrainer = createTrainer(action.payload.data);

      return { ...state, trainers: [newTrainer, ...state.trainers] };
    case "FETCH_ALL_TRAINER":
      return { ...state };
    case "GET_TRAINER":
      const selectedTrainer = getTrainer(state.trainers, action.payload.id);

      return { ...state, selectedTrainer };
    default:
      return state;
  }
};
