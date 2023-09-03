import { v4 } from "uuid";

export const trainerInitialState: ApplicationState = {
  trainers: [],
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

const createTrainer = (data: TrainerWithoutIdAndPokemon): Trainer => {
  const id = v4();

  return {
    ...data,
    id,
    pokemon: [],
  };
};

export type TrainerActions = CreateTrainerAction | FetchAllTrainersAction;

export const trainerReducer = (
  state: ApplicationState = trainerInitialState,
  action: TrainerActions
) => {
  switch (action.type) {
    case "CREATE_TRAINER":
      const newTrainer = createTrainer(action.payload.data);

      return { ...state, trainers: [newTrainer, ...state.trainers] };
    case "FETCH_ALL_TRAINER":
      return { ...state };
    default:
      return state;
  }
};
