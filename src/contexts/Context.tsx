import { Dispatch, PropsWithChildren, useReducer } from "react";
import {
  TrainerActions,
  trainerInitialState,
  trainerReducer,
} from "../reducers/trainerReducer";
import { createContext } from "./createContext";

type TrainerContextState = {
  selectedTrainer: Trainer;
  trainers: Trainer[];
};

type TrainerContextActions = {
  dispatch: Dispatch<TrainerActions>;
};

const [useTrainerActionContext, TrainerActionContextProvider] =
  createContext<TrainerContextActions>();
const [useTrainerContext, TrainerContextProvider] =
  createContext<TrainerContextState>();

export const useActionContext = useTrainerActionContext;
export const useContext = useTrainerContext;

export const TrainerProvider = ({ children }: PropsWithChildren) => {
  const [{ selectedTrainer, trainers }, dispatch] = useReducer(
    trainerReducer,
    trainerInitialState
  );

  return (
    <TrainerActionContextProvider value={{ dispatch }}>
      <TrainerContextProvider value={{ selectedTrainer, trainers }}>
        {children}
      </TrainerContextProvider>
    </TrainerActionContextProvider>
  );
};
