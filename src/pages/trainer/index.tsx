import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActionContext, useContext } from "contexts/Context";
import { useBoolean, useMessage } from "hooks";
import { Details, PokemonModal, Profile } from "./components";
import { TrainerContainer } from "./Trainer.styles";

type Props = {};

const TrainerPage: React.FC<Props> = () => {
  const { id } = useParams();

  const { bool, setBoolToFalse, setBoolToTrue } = useBoolean();
  const { contextHolder, openMessage } = useMessage();

  const { selectedTrainer } = useContext();
  const { dispatch } = useActionContext();

  useEffect(() => {
    if (id) {
      dispatch({
        type: "GET_TRAINER",
        payload: {
          id,
        },
      });
    }
  }, [id]);

  console.log("selectedTrainer", selectedTrainer);

  return (
    <TrainerContainer>
      {contextHolder}
      <Profile trainer={selectedTrainer} />
      <Details setBoolToTrue={setBoolToTrue} trainer={selectedTrainer} />
      <PokemonModal
        close={setBoolToFalse}
        open={bool}
        openMessage={openMessage}
      />
    </TrainerContainer>
  );
};

export default TrainerPage;
