import React from "react";
import { useBoolean } from "hooks";
import { Details, PokemonModal, Profile } from "./components";
import { TrainerContainer } from "./Trainer.styles";

type Props = {};

const TrainerPage: React.FC<Props> = () => {
  const { bool, setBoolToFalse, setBoolToTrue } = useBoolean();

  return (
    <TrainerContainer>
      <Profile />
      <Details setBoolToTrue={setBoolToTrue} />
      <PokemonModal onCancel={setBoolToFalse} open={bool} />
    </TrainerContainer>
  );
};

export default TrainerPage;
