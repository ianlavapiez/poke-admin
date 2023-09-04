import React from "react";
import Button from "antd/es/button";
import { TrainerList, TrainerRegistrationModal } from "./components";
import { ControlsWrapper, HomeContainer } from "./Home.styles";
import { useBoolean, useMessage } from "hooks";

type Props = {};

const HomePage: React.FC<Props> = () => {
  const { bool, setBoolToFalse, setBoolToTrue } = useBoolean();
  const { contextHolder, openMessage } = useMessage();

  return (
    <HomeContainer>
      {contextHolder}
      <ControlsWrapper>
        <Button>Start Tournament</Button>
        <Button onClick={setBoolToTrue} type="primary">
          Trainer's Registration
        </Button>
      </ControlsWrapper>
      <TrainerList />
      <TrainerRegistrationModal
        open={bool}
        openMessage={openMessage}
        setBoolToFalse={setBoolToFalse}
      />
    </HomeContainer>
  );
};

export default HomePage;
